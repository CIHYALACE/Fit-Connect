import { useLocation } from "react-router-dom";
import LoginForm from "../components/Forms/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm";

export default function AccountPage() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="min-vh-100 vw-100 overflow-hidden bg-img">
      <div className="row vh-100 justify-content-center g-0">
        <div className="d-none d-md-flex flex-column justify-content-evenly col-md-4 mt-5 h-75">
          <div className="text-light">
            <img
              alt="Company Logo"
              src="/Logo3.png"
              width="250"
              className="d-inline-block align-top"
            />
          </div>

          <div className="d-flex flex-column gap-5 text-light">
            <h3 className="px-5 fs-2 fw-bold">
              Commit to Fit,<br /> Commit to You
            </h3>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner my-5 px-5">
                <div className="carousel-item active">
                  <p className="fs-6">
                    Track your workouts and progress with ease. Visualize your improvements over time with detailed analytics and charts designed to keep you motivated.
                  </p>
                </div>
                <div className="carousel-item">
                  <p className="fs-6">
                    Connect with fitness enthusiasts and trainers from around the world. Share your journey, join group challenges, and get expert advice to help you reach your goals faster.<br />
                  </p>
                </div>
                <div className="carousel-item">
                  <p className="fs-6">
                    Stay motivated with personalized challenges tailored to your fitness level. Earn badges, unlock achievements, and celebrate every milestone on your path to a healthier you.<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {path === '/login' ? (
          <div className="col-10 col-md-4 rounded-top-5 align-self-center align-self-md-end h-100 h-85 bg-white">
            <LoginForm />
          </div>
        ) : path === '/register' ? (
          <div className="col-10 col-md-4 rounded-top-5 align-self-center align-self-md-end h-100 h-85 bg-white">
            <RegisterForm />
          </div>
        ) : null}
      </div>
    </div>
  );
}
