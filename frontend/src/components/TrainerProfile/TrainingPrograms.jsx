export default function TrainingPrograms({ programs }) {
  return (
    <div className="row mb-6 justify-content-center">
      <div className="col-md-10">
        <div className="row">
          <div className="col-12 text-center text-md-start">
            <h2 className="display-5 fw-bold mb-5 text-dark-gradient">
              Available Programs
            </h2>
          </div>

          {/* Programs Grid */}
          <div className="col-12">
            <div className="row g-4">
              {programs.map((program) => (
                <div className="col-md-6 col-lg-3" key={program.id}>
                  <div className="card border-0 shadow-sm rounded-4 h-100">
                    {/* Program Image */}
                    <div
                      className="position-relative rounded-top-4 overflow-hidden"
                      style={{ height: "200px" }}
                    >
                      <img
                        src={`/${program.img}`}
                        alt={program.name}
                        className="img-fluid h-100 w-100 object-fit-cover"
                      />
                      {program.price === 99 && (
                        <span className="position-absolute top-0 end-0 bg-warning text-dark p-2 m-2 small rounded-3 fw-bold">
                          PREMIUM
                        </span>
                      )}
                    </div>

                    {/* Program Content */}
                    <div className="card-body p-4 d-flex flex-column">
                      <div className="mb-3">
                        <h3 className="h4 fw-bold mb-1">{program.name}</h3>
                        <p className="text-muted mb-0">By {program.auther}</p>
                      </div>

                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="h5 fw-bold mb-0">
                            ${program.price}
                          </span>
                          <span className="badge bg-light text-dark">
                            {program.price === 99 ? "12 Weeks" : "8 Weeks"}
                          </span>
                        </div>

                        <div className="d-grid gap-2">
                          <button className="btn btn-dark-gradient rounded-3">
                            View Details
                          </button>
                          <button className="btn btn-outline-dark rounded-3">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programs CTA */}
          <div className="col-12 mt-5">
            <div className="card border-0 bg-light-gradient rounded-4">
              <div className="card-body p-4 p-lg-5 text-center">
                <h3 className="h2 fw-bold mb-3">Need help choosing?</h3>
                <p className="mb-4 fs-5">
                  Take our 30-second quiz to find your perfect program match
                </p>
                <button className="btn btn-dark btn-lg px-4 py-2 rounded-3 fw-semibold">
                  Find My Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
