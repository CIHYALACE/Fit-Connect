import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewTrainer } from "../../api/api";
import "../../style/App.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    bio: "",
    experience_years: 0,
    specialties: "fitness",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const { confirmPassword, ...registrationData } = formData;
    
    const payload = {
      ...registrationData,
      experience_years: parseInt(registrationData.experience_years, 10) || 0,
    };

    try {
      const response = await createNewTrainer(payload);
      alert("Registration successful. Please check your email to activate your account.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="h-custom d-flex flex-column justify-content-center px-4 gap-2 pt-3">
      <div>
        <p>Lets Get You Started</p>
        <p className="fs-3 fw-bold mb-2">Create An Account</p>
      </div>
      <div className="row g-2 mb-2">
        <div className="col-md">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInputGrid"
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputGrid">First Name</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInputGrid"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
            <label htmlFor="floatingInputGrid">Last Name</label>
          </div>
        </div>
      </div>
      <div className="form-floating mb-2">
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
      <div className="form-floating mb-2">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Your bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Bio</label>
      </div>
      
      <div className="row g-2 mb-2">
        <div className="col-md">
          <div className="form-floating mb-2">
            <input
              type="number"
              className="form-control"
              id="floatingExperience"
              placeholder="Experience Years"
              name="experience_years"
              min="0"
              value={formData.experience_years}
              onChange={handleChange}
            />
            <label htmlFor="floatingExperience">Experience (Years)</label>
          </div>
        </div>
        <div className="col-md">
        <div className="form-floating mb-2">
        <select className="form-select" id="floatingSelect" name="userType" onChange={handleChange}>
          <option value="">specialties</option>
          <option value="fitness">Fitness</option>
          <option value="body building">Body Building</option>
        </select>
        <label htmlFor="floatingSelect">User Type</label>
      </div>
        </div>
      </div>

      <div className="row g-2 mb-2">
        <div className="col-md">
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>
        </div>
      </div>
      <div className="form-check d-flex justify-content-between mb-2">
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            required
          />
          <label className="form-check-label fs-7" htmlFor="flexCheckDefault">
            I've Read{" "}
            <a href="#" className="text-dark fw-bold">
              Terms & Conditions
            </a>
          </label>
        </div>
      </div>
      <button type="button" className="btn btn-dark btn-sm py-1" onClick={handleSubmit}>
        <p className="py-0">Create An Account</p>
      </button>

      <p className="fs-7 align-self-center">
        Already have an account?{" "}
        <a href="#" className="text-dark fw-bold">
          Sign In Here
        </a>
      </p>
    </div>
  );
}
