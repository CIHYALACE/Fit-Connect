import React from 'react';
import FeatureItem from './FeatureItem';

export default function WhyFitConnect() {
  return (
    <section className="why-fitconnect bg-gradient-dark text-white rounded-4 mb-5 mx-3 mx-lg-5" style={{ minHeight: '95vh' }}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="text-center mb-5 px-3">
              <h2 className="display-3 fw-bold mb-4">
                <span className="text-white">Why </span>
                <span className="text-primary-gradient">FitConnect</span>
                <span className="text-white">?</span>
              </h2>
              <p className="lead text-light opacity-85 mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Discover what makes us the premier fitness platform
              </p>
            </div>
            
            <div className="row g-4 justify-content-center">
              <FeatureItem 
                icon="fa fa-heartbeat text-primary"
                title="Personalized Plans"
                description="Tailored workouts designed for your specific goals"
                colorClass="bg-primary-soft"
              />
              <FeatureItem 
                icon="fa fa-certificate text-success"
                title="Certified Trainers"
                description="Expert guidance from accredited professionals"
                colorClass="bg-success-soft"
              />
              <FeatureItem 
                icon="fa fa-line-chart text-info"
                title="Progress Tracking"
                description="Comprehensive analytics to monitor your journey"
                colorClass="bg-info-soft"
              />
              <FeatureItem 
                icon="fa fa-mobile text-warning"
                title="Mobile Friendly"
                description="Full platform access anywhere, anytime"
                colorClass="bg-warning-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}