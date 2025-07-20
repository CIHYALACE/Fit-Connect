export default function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = "FitConnect";
  const companyDesc = "Your ultimate fitness companion connecting you with certified trainers and personalized workout plans.";
  const links = [
    { title: "Find Trainers", href: "/trainers" },
    { title: "Training Programs", href: "/programs" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
  ];
  const socialLinks = [
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-youtube", href: "#" },
  ];

  const contactInfo = {
    address: "123 Fitness Street, Gym City, 10001",
    email: "abodyoussef2015@gmail.com",
    phone: "+20 1027983379",
    workingHours: "Mon-Fri: 9:00 AM - 8:00 PM\nSat-Sun: 10:00 AM - 6:00 PM"
  };

  

  return (
    <div className="container-fluid p-0 mt-5">
      <footer className="text-center text-lg-start text-white bg-gradient-dark">
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row g-4">
              {/* Company Info */}
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  {companyName}
                </h6>
                <p className="opacity-85">
                  {companyDesc}
                </p>
              </div>

              {/* Quick Links */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
                <ul className="list-unstyled">
                  {links.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a 
                        href={link.href} 
                        className="text-white text-decoration-none d-inline-block py-1 px-2 rounded hover-bg"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-map-marker-alt mt-1 me-3"></i>
                    <span>{contactInfo.address}</span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-envelope mt-1 me-3"></i>
                    <a href={`mailto:${contactInfo.email}`} className="text-white text-decoration-none">
                      {contactInfo.email}
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="fas fa-phone-alt mt-1 me-3"></i>
                    <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-white text-decoration-none">
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-clock mt-1 me-3"></i>
                    <span style={{whiteSpace: 'pre-line'}}>{contactInfo.workingHours}</span>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow Us</h6>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      className="btn btn-floating m-0 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: index === 0 ? '#3b5998' : 
                                        index === 1 ? '#E1306C' : 
                                        index === 2 ? '#1DA1F2' : '#FF0000'
                      }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="text-center p-3 border-top border-light">
          &copy; {currentYear} {companyName}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}