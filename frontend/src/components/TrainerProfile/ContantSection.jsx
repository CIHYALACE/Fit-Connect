export default function ContantSection({ trainer }) {
  return (
    <div className="row mb-5 justify-content-center">
      <div className="col-md-10">
        <div className="row">
          <div className="col-12 text-center text-md-start">
            <h2 className="display-5 fw-bold text-dark-gradient">
              Connect With Me
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h3 fw-bold mb-4">Send a Message</h3>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        id="name"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-3"
                        id="email"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control rounded-3"
                        id="message"
                        rows="4"
                        placeholder="I'm interested in..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark-gradient w-100 py-3 rounded-3 fw-semibold"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4 p-lg-5 d-flex flex-column">
                  <h3 className="h3 fw-bold mb-4">Follow My Journey</h3>
                  <p className="mb-5">
                    Join {trainer.first_name}'s community of{" "}
                    {trainer.speciality} enthusiasts for daily
                    tips, workout routines, and transformation stories.
                  </p>

                  <div className="mt-auto">
                    {/* Social Links Grid */}
                    <div className="row g-3">
                      {[
                        {
                          platform: "Instagram",
                          handle:
                            "@" + trainer.user.first_name + "_fitness",
                          icon: "📸",
                          url: "#",
                        },
                        {
                          platform: "YouTube",
                          handle: trainer.user.first_name + " " + trainer.speciality,
                          icon: "▶️",
                          url: "#",
                        },
                        {
                          platform: "TikTok",
                          handle:
                            "@" + trainer.user.first_name + "coach",
                          icon: "🎵",
                          url: "#",
                        },
                        {
                          platform: "Email",
                          handle:
                            "coach@" +
                            trainer.user.first_name +
                            ".com",
                          icon: "✉️",
                          url: "#",
                        },
                      ].map((social, index) => (
                        <div className="col-6" key={index}>
                          <a
                            href={social.url}
                            className="card border-0 bg-light rounded-3 text-decoration-none h-100"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="card-body p-3">
                              <div className="d-flex align-items-center">
                                <span className="fs-3 me-3">{social.icon}</span>
                                <div>
                                  <p className="mb-1 fw-semibold text-dark">
                                    {social.platform}
                                  </p>
                                  <p className="mb-0 small text-muted">
                                    {social.handle}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-5 pt-3 border-top">
                      <h4 className="h6 fw-semibold mb-3">Verified Profiles</h4>
                      <div className="d-flex flex-wrap gap-3">
                        <img
                          src="/verified-badge.svg"
                          alt="Verified"
                          className="img-fluid"
                          style={{ height: "28px" }}
                        />
                        <img
                          src="/trustpilot-rating.svg"
                          alt="4.9 Rating"
                          className="img-fluid"
                          style={{ height: "28px" }}
                        />
                        <img
                          src="/google-rating.svg"
                          alt="5.0 Rating"
                          className="img-fluid"
                          style={{ height: "28px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
