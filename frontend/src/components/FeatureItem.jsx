export default function FeatureItem({ icon, title, description }) {
    return (
      <div className="col-md-6 col-lg-3">
        <div className="feature-card bg-primary-soft p-4 h-100 text-center border-light border-opacity-10">
          <div className="icon-wrapper bg-primary-soft border rounded-circle d-inline-flex align-items-center justify-content-center mb-4 p-3">
            <i className={`${icon} fa-2x text-white`}></i>
          </div>
          <h3 className="h5 text-white mb-3 fw-semibold">{title}</h3>
          <p className="text-light mb-0 opacity-75">{description}</p>
        </div>
      </div>
    );
  }