import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import '../assets/css/Contactus.css'
// import { Link } from 'react-router-dom'

const Contactus = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/contact", formData);
      alert("✅ Contact Submitted Successfully");
      setFormData({ name: '', email: '', contact: '',address: '', message: ''}); // reset form
    } catch (error) {
      console.error(error);
      alert("❌ Error submitting the form");
    }
  };
  
    return (
        <center>
        <div className='mainc'>
            <h2>Contact US</h2>
            <div className="mainbgform">
                <div className='mainbody'>
                    <Form onSubmit={handleSubmit} encType="multipart/form-data">
                        <br />
                        <Form.Group className="maincontent">
                        <Form.Label> &nbsp; Name</Form.Label>
                        <Form.Control className='inputcont' type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="maincontent">
                        <Form.Label> &nbsp; Email</Form.Label>
                        <Form.Control className='inputcont' type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="maincontent">
                        <Form.Label> &nbsp; Contact</Form.Label>
                        <Form.Control className='inputcont' type="text" name="contact" value={formData.contact} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="maincontent">
                        <Form.Label> &nbsp; Address</Form.Label>
                        <Form.Control className='input_cont' as="textarea" name="address" value={formData.address} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="maincontent">
                        <Form.Label> &nbsp; Message</Form.Label>
                        <Form.Control className='input_cont' as="textarea" name="message" value={formData.message} onChange={handleChange} required />
                        </Form.Group>
                        <button variant="primary" type="submit">Contact</button>
                    </Form>
               </div>
            </div>
        </div>
        </center>
    );
};

export default Contactus;
