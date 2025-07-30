export default function IncludedMaterials() {
  return (
<div className="row mb-6 justify-content-center">
  <div className="col-md-10">
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="card-body p-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark-gradient position-relative d-inline-block">
            Included Materials
          </h2>
          <p className="text-muted mt-3">Everything you need for success</p>
        </div>

        {/* Enhanced List */}
        <ul className="list-unstyled row g-4">
          {[
            {
              title: "Step-by-step exercise video library",
              desc: "100+ HD demonstrations with form cues"
            },
            {
              title: "Printable workout schedule",
              desc: "PDF + Excel versions with tracking"
            },
            {
              title: "Nutrition plan",
              desc: "With grocery lists and meal prep guide"
            },
            {
              title: "Instant digital access",
              desc: "Mobile app + web portal available 24/7"
            },
            {
              title: "Priority support",
              desc: "48-hour email response guarantee"
            },
            {
              title: "Priority support",
              desc: "48-hour email response guarantee"
            }
          ].map((item, index) => (
            <li key={index} className="col-md-6">
              <div className="d-flex h-100 p-4 bg-light-gradient rounded-4">
                <div className="me-4">
                  <div className="bg-white rounded-3 p-3 shadow-sm">
                    <span className="text-dark fw-bold fs-4">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="h5 fw-bold mb-2">{item.title}</h3>
                  <p className="text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>
  );
}
