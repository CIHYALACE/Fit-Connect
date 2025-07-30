export default function TrainerPreview  ({ auther}){
  return (
    <div className="row mb-5 justify-content-center">
      <div className="col-md-10">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="card-body p-5">
            <div className="row align-items-center">
              {/* Trainer Photo */}
              <div className="col-md-4 text-center mb-4 mb-md-0">
                <div className="position-relative d-inline-block">
                  <img 
                    src={auther.profile_picture} 
                    alt={auther.user.first_name}
                    className="img-fluid rounded-4 shadow-sm"
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className="position-absolute bottom-0 end-0 bg-gradient-dark text-light px-3 py-1 rounded-pill small fw-bold">
                    PRO COACH
                  </div>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="col-md-8">
                <h3 className="display-6 fw-bold text-dark-gradient mb-2">{auther.user.first_name} {auther.user.last_name}</h3>
                <p className="fs-4 mb-4">
                  {auther.bio} with {auther.experience_years} years of experience
                </p>
                <p className="mb-4">
                  Specializing in evidence-based training methods to help clients achieve 
                  sustainable results through proper programming and nutrition.
                </p>
                
                {/* CTA Button */}
                <a 
                  href={`/trainers/${auther.id}`} 
                  className="btn btn-outline-dark-gradient px-4 py-2 rounded-3 fw-semibold"
                >
                  View Full Trainer Profile →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
