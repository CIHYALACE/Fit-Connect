export default function ProgramHero({ program }) {
  return (
    <div className="row mt-5 mb-5 justify-content-center">
      <div className="col-md-10">
        <div className="row align-items-center g-5">
          {/* Portrait Image Column */}
          <div className="col-lg-5 text-center">
            <div className="position-relative">
              <img 
                src={program.image} 
                alt={program.title}
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  objectFit: "cover"
                }}
              />
              {/* Level Badge */}
              <div className="position-absolute top-0 end-0 mt-3 me-3">
                <span className="badge bg-gradient-dark text-light py-2 px-3 fw-bold rounded-pill">
                  {program.difficulty_level}
                </span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-7">
            <div className="ps-lg-5">
              {/* Program Title */}
              <h1 className="display-3 fw-bold text-dark-gradient mb-4">
                {program.title}
              </h1>
              
              {/* Trainer */}
              <div className="d-flex align-items-center mb-5">
                <div className="bg-light-gradient rounded-circle p-1 me-3">
                  <img 
                    src={program.auther.profile_picture} 
                    alt={program.auther.user.username}
                    className="rounded-circle"
                    width="60"
                    height="60"
                  />
                </div>
                <p className="h5 mb-0 fw-semibold">
                  Program by <span className="text-dark">{program.auther.user.username}</span>
                </p>
              </div>

              {/* Stats Row */}
              <div className="d-flex flex-wrap gap-4 mb-5">
                {/* Duration Badge */}
                <div className="bg-light-gradient rounded-pill p-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-0 small text-muted">DURATION</p>
                      <p className="mb-0 h4 fw-bold">{program.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="bg-light-gradient rounded-pill p-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-0 small text-muted">INVESTMENT</p>
                      <div className="d-flex align-items-end">
                        <p className="mb-0 h4 fw-bold">${program.price}</p>
                        {program.original_price && (
                          <p className="mb-0 ms-2 text-muted text-decoration-line-through">
                            ${program.original_price}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA and Guarantee */}
              <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
                <button className="btn btn-dark-gradient btn-lg px-5 py-3 rounded-3 fw-bold">
                Enroll Now - ${program.price}
                </button>
                <div className="d-flex align-items-center">
                  <span className="badge bg-success bg-opacity-10 text-success me-2">✓</span>
                  <span className="small text-muted">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}