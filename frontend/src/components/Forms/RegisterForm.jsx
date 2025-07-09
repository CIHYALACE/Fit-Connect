import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`,
    };
    
    try {
      const response = await axios.post("/api/register", formData);
      alert("Registration successful");
    } catch (error) {
      console.error("Registration error", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="h-custom d-flex flex-column justify-content-center px-4 gap-3 pt-4">
      <div>
        <p>Lets Get You Started</p>
        <p className="fs-3 fw-bold mb-2">Create An Account</p>
      </div>
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGrid"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputGrid">First Name</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputGrid"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputGrid">Last Name</label>
          </div>
        </div>
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInputGrid"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputGrid">Password</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInputGrid"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputGrid">Confirm Password</label>
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
      <button type="button" className="btn btn-dark" onClick={handleSubmit}>
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
