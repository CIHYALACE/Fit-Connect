export default function CertificationsSection() {
  return (
    <div className="row mb-5 justify-content-center">
      <div className="col-md-10">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-5 text-dark-gradient">
              Credentials
            </h2>

            <div className="row g-4">
              {/* Certifications */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4">
                    <h3 className="h3 fw-bold mb-4">
                      <span className="text-dark-gradient">Certifications</span>
                    </h3>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start">
                        <span className="me-2">✅</span>
                        <span>Certified Personal Trainer – NASM</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <span className="me-2">✅</span>
                        <span>Performance Enhancement Specialist – NASM</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <span className="me-2">✅</span>
                        <span>Precision Nutrition Level 1</span>
                      </li>
                      <li className="d-flex align-items-start">
                        <span className="me-2">✅</span>
                        <span>Functional Movement Systems (FMS) Level 1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4">
                    <h3 className="h3 fw-bold mb-4">
                      <span className="text-dark-gradient">Education</span>
                    </h3>
                    <ul className="list-unstyled">
                      <li className="mb-3 d-flex align-items-start">
                        <span className="me-2">🎓</span>
                        <span>BSc. in Sports Science – Cairo University</span>
                      </li>
                      <li className="mb-3 d-flex align-items-start">
                        <span className="me-2">📚</span>
                        <span>MSc. in Exercise Physiology (In Progress)</span>
                      </li>
                      <li className="d-flex align-items-start">
                        <span className="me-2">🧪</span>
                        <span>Sports Nutrition Certification – ISSN</span>
                      </li>
                    </ul>
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
