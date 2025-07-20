import React from 'react';
import FeatureItem from './FeatureItem';

export default function WhyFitConnect() {
  return (
    <section className="why-fitconnect container bg-dark text-white py-5 mb-5 rounded">
      <div className="container-xxl"> {/* Changed to container-xxl for modern wide screens */}
        <div className="container py-4"> {/* Nested container for content */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">
              <span className="text-white"> Why </span>
              <span className="text-danger">FitConnect</span>
              <span className="text-white"> ?</span>
            </h2>
            <p className="lead text-muted mb-4">Discover what makes us different</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <FeatureItem 
              icon="fa fa-heartbeat"
              title="Personalized Plans"
              description="Tailored workouts for your goals"
            />
            <FeatureItem 
              icon="fa fa-certificate"
              title="Certified Trainers"
              description="Expert guidance you can trust"
            />
            <FeatureItem 
              icon="fa fa-line-chart"
              title="Progress Tracking"
              description="Visualize your improvement"
            />
            <FeatureItem 
              icon="fa fa-mobile"
              title="Mobile Friendly"
              description="Access anywhere, anytime"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
