import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // Clear error when user starts typing
        if (error) setError('');
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Basic validation
        if (!formData.email || !formData.password) {
            setError('Please enter both email and password');
            return;
        }
        
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                email: formData.email.trim(),
                password: formData.password
            });

            // Save token and user data
            const { token, user_type, trainer_id } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userType', user_type);
            
            if (user_type === 'trainer') {
                localStorage.setItem('trainerId', trainer_id);
                navigate('/');
            } else {
                navigate('/');
            }

        } catch (err) {
            // Handle different types of errors
            let errorMessage = 'Login failed. Please try again.';
            
            if (err.response) {
                // Server responded with an error status code (4xx, 5xx)
                if (err.response.status === 400 || err.response.status === 401) {
                    errorMessage = 'Invalid email or password';
                } else if (err.response.status === 403) {
                    errorMessage = 'Account not activated. Please check your email.';
                } else if (err.response.data?.error) {
                    errorMessage = err.response.data.error;
                }
            } else if (err.request) {
                // Request was made but no response received
                errorMessage = 'Unable to connect to the server. Please check your connection.';
            }
            
            setError(errorMessage);
            console.error('Login error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-custom d-flex flex-column justify-content-center px-4 gap-3 pt-5">
            <div>
                <p>Welcome Back</p>
                <p className="fs-3 fw-bold mb-3">Login To Your Account</p>
            </div>
            
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input 
                        type="email" 
                        className={`form-control ${error && 'is-invalid'}`} 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                        disabled={isLoading}
                        style={{ height: '50px' }}
                    />
                    <label htmlFor="email">Email address</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input 
                        type="password" 
                        className={`form-control ${error && 'is-invalid'}`} 
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        disabled={isLoading}
                        style={{ height: '50px' }}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                
                <div className="form-check d-flex justify-content-between mb-3">
                    <div>
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember Me
                        </label>
                    </div>
                    <a href="/forgot-password" className="text-decoration-none">
                        Forgot Password?
                    </a>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-dark w-100 p-2"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Logging in...
                        </>
                    ) : 'Login'}
                </button>
            </form>
            
            <div className="d-flex align-items-center">
                <hr className="flex-grow-1" />
                <span className="mx-3">or</span>
                <hr className="flex-grow-1" />
            </div>
            
            <button 
                type="button" 
                className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2 p-2"
                disabled={isLoading}
            >
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    width="20"
                    height="20"
                />
                <span>Continue with Google</span>
            </button>
            
            <p className="text-center mt-1">
                Don't have an account?{' '}
                <a href="/register" className="text-dark fw-bold">
                    Sign Up Here
                </a>
            </p>
        </div>
    );
}