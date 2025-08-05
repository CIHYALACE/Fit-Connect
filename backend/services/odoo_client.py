import xmlrpc.client
import logging
from django.conf import settings

logger = logging.getLogger(__name__)

def get_odoo_connection():
    """
    Establish connection to Odoo and return models and uid
    Uses settings from Django settings.py
    """
    try:
        # Get settings
        odoo_url = settings.ODOO_URL
        odoo_db = settings.ODOO_DB
        odoo_username = settings.ODOO_USERNAME
        odoo_password = settings.ODOO_PASSWORD

        # Initialize connection
        common = xmlrpc.client.ServerProxy(f"{odoo_url}/xmlrpc/2/common")
        
        # Authenticate
        uid = common.authenticate(
            odoo_db,
            odoo_username,
            odoo_password,
            {}
        )
        
        if not uid:
            raise Exception("Authentication failed. Please check your Odoo credentials.")
            
        models = xmlrpc.client.ServerProxy(f"{odoo_url}/xmlrpc/2/object")
        return models, uid, {
            'db': odoo_db,
            'uid': uid,
            'password': odoo_password
        }
        
    except Exception as e:
        logger.error(f"Odoo connection error: {str(e)}")
        raise

def create_odoo_trainer(name, email, phone=None, profile_picture=None):
    """
    Create a trainer in Odoo with optional profile picture
    
    Args:
        name (str): Full name of the trainer
        email (str): Email address
        phone (str, optional): Phone number
        profile_picture (str, optional): URL or path to the profile picture
        
    Returns:
        int: The created partner ID in Odoo
    """
    try:
        models, uid, creds = get_odoo_connection()
        
        # Prepare partner data
        partner_data = {
            'name': name,
            'email': email,
            'phone': phone or '',
            'is_company': False,
        # 'function': 'Trainer',  # Optional: to mark the role
        }

        logger.info(f"Creating Odoo partner: {name} ({email})")
        
        # First create the partner
        partner_id = models.execute_kw(
            creds['db'],
            creds['uid'],
            creds['password'],
            'res.partner',
            'create',
            [partner_data]
        )
        
        # If profile picture is provided, update the partner with the image
        if profile_picture:
            try:
                import base64
                from urllib.parse import urlparse
                from django.core.files.storage import default_storage
                from django.conf import settings
                import os
                
                logger.info(f"Processing profile picture: {profile_picture}")
                
                # Handle different types of profile picture URLs/paths
                if profile_picture.startswith(('http://', 'https://')):
                    # For HTTP/HTTPS URLs, use urllib which is more stable with older OpenSSL
                    from urllib.request import urlopen
                    from urllib.error import URLError, HTTPError
                    
                    try:
                        with urlopen(profile_picture, timeout=10) as response:
                            if response.status == 200:
                                image_data = base64.b64encode(response.read()).decode('utf-8')
                            else:
                                logger.warning(f"Failed to download image: HTTP {response.status}")
                                image_data = None
                    except (URLError, HTTPError) as e:
                        logger.warning(f"Error downloading image from URL: {str(e)}")
                        image_data = None
                else:
                    # Handle local file path (relative to media root)
                    file_path = profile_picture
                    if hasattr(settings, 'MEDIA_URL') and file_path.startswith(settings.MEDIA_URL):
                        # Remove MEDIA_URL prefix if present
                        file_path = file_path[len(settings.MEDIA_URL):]
                    
                    # Handle absolute vs relative paths
                    if file_path.startswith('/'):
                        file_path = file_path[1:]  # Remove leading slash
                    
                    # Try to open the file
                    try:
                        with default_storage.open(file_path, 'rb') as f:
                            image_data = base64.b64encode(f.read()).decode('utf-8')
                    except (FileNotFoundError, OSError) as e:
                        logger.warning(f"Profile picture not found at: {file_path} - {str(e)}")
                        image_data = None
                
                if image_data:
                    # Update partner with image
                    models.execute_kw(
                        creds['db'],
                        creds['uid'],
                        creds['password'],
                        'res.partner',
                        'write',
                        [[partner_id], {
                            'image_1920': image_data,
                        }]
                    )
                    logger.info(f"Updated partner {partner_id} with profile picture")
                
            except Exception as img_error:
                logger.error(f"Error processing profile picture: {str(img_error)}")
                # Don't fail the whole operation if image upload fails
        
        logger.info(f"Successfully created Odoo partner with ID: {partner_id}")
        return partner_id
        
    except Exception as e:
        logger.error(f"Error creating Odoo trainer: {str(e)}")
        raise
