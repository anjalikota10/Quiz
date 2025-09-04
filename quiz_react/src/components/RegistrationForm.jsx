import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Rigistration.css';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    address: '',
    image: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // ✅ Name validation (only letters & spaces, min 3 chars)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]{3,}$/.test(formData.name)) {
      newErrors.name = "Name must be at least 3 characters and contain only letters";
    }

    // ✅ Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // ✅ Password validation (min 6, at least 1 letter & 1 number)
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(formData.password)) {
      newErrors.password = "Password must be at least 6 characters with letters and numbers";
    }

    // ✅ Contact validation (10-digit number only)
    if (!formData.contact) {
      newErrors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be a 10-digit number";
    }

    // ✅ Address validation (min 10 chars)
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.length < 10) {
      newErrors.address = "Address must be at least 10 characters";
    }

    // ✅ Image validation (must be selected)
    if (!formData.image) {
      newErrors.image = "Profile image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return; // ✅ prevent submit if validation fails

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("contact", formData.contact);
      data.append("address", formData.address);
      data.append("image", formData.image);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/registration`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert(response.data.message || "Registration Submitted Successfully");
      navigate("/login");

      setFormData({
        name: '',
        email: '',
        password: '',
        contact: '',
        address: '',
        image: ''
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert("Error: " + (error.response.data.error || error.response.data.message));
      } else if (error.request) {
        alert("No response from server. Please check if backend is running.");
      } else {
        alert("Request error: " + error.message);
      }
    }
  };

  return (
    <center>
      <div className='main'>
        <div className="main_bgform">
          <div className='mainheader'>
            <h2>Registration Form</h2>
          </div>
          <div className='main_body'>
            <Form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
              <br />

              {/* Name */}
              <Form.Group className="main_content">
                <Form.Label>&nbsp; Name</Form.Label>
                <Form.Control
                  className='input_cont'
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </Form.Group>

              {/* Email */}
              <Form.Group className="main_content">
                <Form.Label>&nbsp; Email</Form.Label>
                <Form.Control
                  className='input_cont'
                  autoComplete="new-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </Form.Group>

              {/* Password */}
              <Form.Group className="main_content">
                <Form.Label>&nbsp; Password</Form.Label>
                <Form.Control
                  className='input_cont'
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </Form.Group>

              {/* Contact */}
              <Form.Group className="main_content">
                <Form.Label>&nbsp; Contact</Form.Label>
                <Form.Control
                  className='input_cont'
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
                {errors.contact && <p className="text-danger">{errors.contact}</p>}
              </Form.Group>

              {/* Address */}
              <Form.Group className="main_content">
                <Form.Label>&nbsp; Address</Form.Label>
                <Form.Control
                  className='input_cont'
                  as="textarea"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <p className="text-danger">{errors.address}</p>}
              </Form.Group>

              {/* Profile Image */}
              <Form.Group className="main_content">
                <Form.Label>&nbsp; Profile Image</Form.Label>
                <Form.Control
                  className='input_cont'
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {errors.image && <p className="text-danger">{errors.image}</p>}
              </Form.Group>

              <Button variant="primary" type="submit">Register</Button>
            </Form>
          </div>
        </div>
      </div>
    </center>
  );
};

export default RegistrationForm;
