import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewTrainer } from "../../api/api";
import "../../style/App.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    experience_years: 0,
    specialties: "fitness",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }
    
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (formData.experience_years < 0) {
      newErrors.experience_years = "Experience cannot be negative";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    const { confirmPassword, ...registrationData } = formData;
    
    const payload = {
      ...registrationData,
      experience_years: parseInt(registrationData.experience_years, 10) || 0,
    };

    try {
      const response = await createNewTrainer(payload);
      navigate("/login", { 
        state: { 
          successMessage: "Registration successful! Please check your email to activate your account." 
        } 
      });
    } catch (error) {
      console.error("Registration error", error);
      let errorMessage = "Registration failed. Please try again.";
      
      if (error.response) {
        if (error.response.status === 409) {
          errorMessage = "This email is already registered.";
        } else if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      }
      
      setErrors({ ...errors, api: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-custom d-flex flex-column justify-content-center px-4 gap-2 pt-3">
      <div>
        <p>Lets Get You Started</p>
        <p className="fs-3 fw-bold mb-2">Create An Account</p>
      </div>
      
      {errors.api && (
        <div className="alert alert-danger" role="alert">
          {errors.api}
        </div>
      )}
      
      <div className="row g-2 mb-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${errors.first_name ? "is-invalid" : ""}`}
              id="floatingFirstName"
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              style={{ height: "50px" }}
            />
            <label htmlFor="floatingFirstName">First Name</label>
            {errors.first_name && (
              <div className="invalid-feedback">{errors.first_name}</div>
            )}
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input
              type="text"
              className={`form-control ${errors.last_name ? "is-invalid" : ""}`}
              id="floatingLastName"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              style={{ height: "50px" }}
            />
            <label htmlFor="floatingLastName">Last Name</label>
            {errors.last_name && (
              <div className="invalid-feedback">{errors.last_name}</div>
            )}
          </div>
        </div>
      </div>
      
      <div className="form-floating mb-2">
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ height: "50px" }}
        />
        <label htmlFor="floatingInput">Email address</label>
        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>
      
      <div className="row g-2 mb-2">
        <div className="col-md">
          <div className="form-floating mb-2">
            <input
              type="number"
              className={`form-control ${errors.experience_years ? "is-invalid" : ""}`}
              id="floatingExperience"
              placeholder="Experience Years"
              name="experience_years"
              min="0"
              value={formData.experience_years}
              onChange={handleChange}
              style={{ height: "50px" }}
            />
            <label htmlFor="floatingExperience">Experience (Years)</label>
            {errors.experience_years && (
              <div className="invalid-feedback">{errors.experience_years}</div>
            )}
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating mb-2">
            <select 
              className="form-select" 
              id="floatingSelect" 
              name="specialties" 
              onChange={handleChange}
              value={formData.specialties}
              style={{ height: "50px" }}
            >
              <option value="fitness">Fitness</option>
              <option value="body building">Body Building</option>
            </select>
            <label htmlFor="floatingSelect">Specialty</label>
          </div>
        </div>
      </div>

      <div className="row g-2 mb-2">
        <div className="col-md">
          <div className="form-floating mb-2">
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ height: "50px" }}
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating mb-2">
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ height: "50px" }}
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            {errors.confirmPassword && (
              <div className="invalid-feedback">{errors.confirmPassword}</div>
            )}
          </div>
        </div>
      </div>
      
      <div className="form-check d-flex justify-content-between mb-2">
        <div>
          <input
            className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
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
      
      <button 
        type="button" 
        className="btn btn-dark btn-sm py-1" 
        onClick={handleSubmit}
        disabled={isSubmitting}
        // style={{ height: "50px" }}
      >
        <p className="py-1">
          {isSubmitting ? "Processing..." : "Create An Account"}
        </p>
      </button>

      <p className="fs-7 align-self-center">
        Already have an account?{" "}
        <a href="/login" className="text-dark fw-bold">
          Sign In Here
        </a>
      </p>
    </div>
  );
}