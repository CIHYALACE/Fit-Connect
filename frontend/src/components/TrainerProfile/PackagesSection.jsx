export default function PakagesSection() {
  return (
    <div className="row mb-6 justify-content-center">
      <div className="col-md-10">
        <div className="row">
          <div className="col-12 text-center text-md-start">
            <h2 className="display-5 fw-bold mb-5 text-dark-gradient">
              Pricing & Packages
            </h2>
            <p className="fs-4 mb-5">
              Flexible options for every fitness journey
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="col-12">
            <div className="row g-4">
              {/* Hourly Rate */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="text-center mb-4">
                      <span className="badge bg-primary bg-opacity-10 text-primary mb-3">
                        PAY-AS-YOU-GO
                      </span>
                      <h3 className="h2 fw-bold">Hourly</h3>
                    </div>

                    <ul className="list-unstyled mb-4 flex-grow-1">
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>1-on-1 coaching sessions</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>Custom workout plans</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>Form correction</span>
                      </li>
                      <li className="d-flex text-muted">
                        <span className="me-2">✖</span>
                        <span>Nutrition planning</span>
                      </li>
                    </ul>

                    <div className="text-center mt-auto">
                      <p className="h1 fw-bold mb-0">$75</p>
                      <p className="text-muted mb-4">per session</p>
                      <button className="btn btn-outline-dark w-100 rounded-3">
                        Book Session
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Package */}
              <div className="col-md-4">
                <div className="card border-3 border-warning shadow-sm rounded-4 h-100">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="text-center mb-4">
                      <span className="badge bg-warning text-dark mb-3">
                        MOST POPULAR
                      </span>
                      <h3 className="h2 fw-bold">Monthly</h3>
                    </div>

                    <ul className="list-unstyled mb-4 flex-grow-1">
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>8 sessions/month</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>Customized nutrition plan</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>24/7 chat support</span>
                      </li>
                      <li className="d-flex">
                        <span className="me-2">✔️</span>
                        <span>Progress tracking</span>
                      </li>
                    </ul>

                    <div className="text-center mt-auto">
                      <div className="d-flex justify-content-center align-items-end mb-2">
                        <p className="h1 fw-bold mb-0">$450</p>
                        <p className="text-muted ms-2">
                          <del>$600</del>
                        </p>
                      </div>
                      <p className="text-success fw-semibold mb-4">
                        25% savings
                      </p>
                      <button className="btn btn-dark-gradient w-100 rounded-3">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3-Month Package */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="text-center mb-4">
                      <span className="badge bg-dark bg-opacity-10 text-dark mb-3">
                        BEST VALUE
                      </span>
                      <h3 className="h2 fw-bold">Quarterly</h3>
                    </div>

                    <ul className="list-unstyled mb-4 flex-grow-1">
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>30 sessions (10/month)</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>Meal plans + grocery lists</span>
                      </li>
                      <li className="mb-3 d-flex">
                        <span className="me-2">✔️</span>
                        <span>Weekly check-ins</span>
                      </li>
                      <li className="d-flex">
                        <span className="me-2">✔️</span>
                        <span>Priority scheduling</span>
                      </li>
                    </ul>

                    <div className="text-center mt-auto">
                      <div className="d-flex justify-content-center align-items-end mb-2">
                        <p className="h1 fw-bold mb-0">$1,050</p>
                        <p className="text-muted ms-2">
                          <del>$1,500</del>
                        </p>
                      </div>
                      <p className="text-success fw-semibold mb-4">
                        30% savings + 2 bonus sessions
                      </p>
                      <button className="btn btn-outline-dark w-100 rounded-3">
                        Commit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bundle Discount Notice */}
          <div className="col-12 mt-5">
            <div className="card border-0 bg-light-gradient rounded-4">
              <div className="card-body p-4 text-center">
                <h4 className="h4 fw-bold mb-3">Program + Coaching Bundles</h4>
                <p className="mb-3">
                  Save up to 40% when you combine any training program with
                  coaching sessions
                </p>
                <button className="btn btn-link text-dark fw-semibold">
                  View Bundle Options →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
