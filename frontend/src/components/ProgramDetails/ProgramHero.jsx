export default function ProgramHero({ program }) {
  return (
    <div className="row mt-3 mb-6 justify-content-center">
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
                <span className="badge bg-warning text-dark py-2 px-3 fw-bold rounded-pill">
                   For {program.difficulty_level}
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

              {/* Duration Badge */}
              <div className="d-inline-block bg-light-gradient rounded-pill p-3 mb-5">
                <div className="d-flex align-items-center">
                  <div>
                    <p className="mb-0 small text-muted">PROGRAM DURATION</p>
                    <p className="mb-0 h4 fw-bold">{program.duration}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="btn btn-dark-gradient btn-lg px-5 py-3 rounded-3 fw-bold">
                Start Program Today →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}