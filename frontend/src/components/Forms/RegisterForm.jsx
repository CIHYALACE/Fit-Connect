export default function RegisterForm() {
  return (
    <div className="h-custom d-flex flex-column justify-content-center px-4 gap-3 pt-4">
      <div>
        <p>Lets Get You Started</p>
        <p className="fs-3 fw-bold mb-2">Create An Account</p>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Password"
            />
            <label for="floatingInputGrid">First Name</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Confirm Password"
            />
            <label for="floatingInputGrid">Last Name</label>
          </div>
        </div>
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Password"
            />
            <label for="floatingInputGrid">Password</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Confirm Password"
            />
            <label for="floatingInputGrid">Confirm Password</label>
          </div>
        </div>
      </div>
      <div className="form-check d-flex justify-content-between">
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label fs-7" htmlFor="flexCheckDefault">
            I've Read{" "}
            <a href="#" className="text-dark fw-bold">
              Terms&Conditions
            </a>
          </label>
        </div>
      </div>
      <button type="button" className="btn btn-dark">
        <p className="py-0">Create An Account</p>
      </button>
      <div className="d-flex align-items-center">
        <hr className="flex-grow-1" />
        <span className="mx-3">or</span>
        <hr className="flex-grow-1" />
      </div>
      <button
        type="button"
        className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          width="20"
          height="20"
        />
        <span>Continue with Google</span>
      </button>
      <p className="fs-7 align-self-center">
        New User?{" "}
        <a href="#" className="text-dark fw-bold">
          SignUp Here
        </a>
      </p>
    </div>
  );
}
