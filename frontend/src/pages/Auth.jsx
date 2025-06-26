import LoginForm from "../components/Forms/LoginForm";

export default function AccountPage() {
  return (
    <div className="min-vh-100 vw-100 overflow-hidden bg-img">
      <div className="row vh-100 justify-content-center g-0">
        <div className="d-none d-md-flex flex-column justify-content-evenly flex-wrap col-md-4 mt-5 h-75">
          <h3 className="text-light ps-5 mt-5">
            <img
              alt=""
              src="icons8-dumbbell-50(1).png"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{" "}
            Fit Connect
          </h3>

          <div className="d-flex flex-column gap-5 text-light">
            <h3 className="px-5 fs-2 fw-bold">
              Commit to Fit,<br /> Commit to You
            </h3>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
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

        <div className="col-10 col-md-4 border border-1 border-dark rounded-top-5 align-self-end h-85 bg-white">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
