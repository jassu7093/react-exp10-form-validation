import React, { useState } from "react";

const ValidatedForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required ❌";
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Enter a valid email address 📧";
    }

    if (formData.password.length <= 6) {
      newErrors.password = "Password must be longer than 6 characters 🔒";
    }

    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🧾 Registration Form with Validation</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          textAlign: "left",
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#fafafa",
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0", padding: "5px" }}
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0", padding: "5px" }}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0", padding: "5px" }}
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: "30px" }}>
          <h3>✅ Registration Successful!</h3>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default ValidatedForm;
