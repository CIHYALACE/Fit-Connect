export default function ClientTranformationSection({ testimonials }) {
  return (
    <div className="row mb-5 justify-content-center">
      <div className="col-md-10">
        <div className="row">
          <div className="col-12 text-center text-md-start">
            <h2 className="display-5 fw-bold mb-5 text-dark-gradient">
              Client Transformations
            </h2>
          </div>

          {/* Before/After Gallery */}
          <div className="col-12 mb-6">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src="/before-after-1.jpg"
                      alt="Client transformation"
                      className="img-fluid"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 bg-dark-gradient-opacity p-3">
                      <p className="text-white mb-0 fw-semibold">
                        12 Week Program
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src="/before-after-2.jpg"
                      alt="Client transformation"
                      className="img-fluid"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 bg-dark-gradient-opacity p-3">
                      <p className="text-white mb-0 fw-semibold">
                        8 Month Journey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src="/before-after-3.jpg"
                      alt="Client transformation"
                      className="img-fluid"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 bg-dark-gradient-opacity p-3">
                      <p className="text-white mb-0 fw-semibold">
                        Strength Transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="col-12">
            <h3 className="h3 fw-bold mb-4 text-dark-gradient">
              What Clients Say
            </h3>
            <div className="row g-4">
              {testimonials.map((testimonial) => (
                <div className="col-md-4" key={testimonial.id}>
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    <div className="card-body p-4">
                      <div className="mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>
                            {i < testimonial.rating ? "⭐" : "☆"}
                          </span>
                        ))}
                      </div>
                      <p className="fs-5 mb-4">"{testimonial.text}"</p>
                      <p className="mb-0 fw-semibold text-dark">
                        — {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="col-12 mt-6">
            <h3 className="h3 fw-bold mb-4 text-dark-gradient">
              Success Stories
            </h3>
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4 p-lg-5">
                <div className="row align-items-center">
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                      src="/success-story.jpg"
                      alt="Success story"
                      className="img-fluid rounded-4"
                    />
                  </div>
                  <div className="col-lg-8">
                    <h4 className="h4 fw-bold mb-3">
                      From Beginner to Competitor
                    </h4>
                    <p className="mb-4">
                      "I started with zero fitness experience. Through
                      personalized programming and nutrition coaching, I entered
                      my first bodybuilding competition within 18 months and
                      placed 2nd in my category."
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <p className="h1 fw-bold mb-0 ls-xs">18</p>
                        <p className="mb-0 small">Months</p>
                      </div>
                      <div>
                        <p className="h1 fw-bold mb-0 ls-xs">24kg</p>
                        <p className="mb-0 small">Muscle Gained</p>
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
