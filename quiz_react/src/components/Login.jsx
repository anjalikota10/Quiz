import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({email: '', password: '' });
  const [user, setUser] = useState(''); 
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/api/login`, formData)
      .then((res) => {
        if (res.status === 200) {
          const user=localStorage.setItem("user", JSON.stringify(res.data.user));
          setUser(user);
          console.log(res.data);
          alert("Login Success");
          navigate("/")
        }
      })
      .catch((err) => {
        console.log("Error", err);         
      });
  };

   

  return (
    <center>
      <div className='main_login'>
        <h1>Login</h1>
        <div className="login_m">
          <div className="login_text">
            <h2>Welcome to Our Website!</h2>
            <p>To keep connected with us, please login to your personal account.</p>
          </div>
          <div className='main_body'>
            <Form onSubmit={handleSubmit}>
              <br />
              {/* <Form.Group className="main_content">
                <Form.Label>&nbsp; Name</Form.Label>
                <Form.Control className='input_cont' type="text" placeholder="👤 Name" name="name" value={formData.name} onChange={handleChange} required/>
              </Form.Group> */}

              <Form.Group className="main_content">
                <Form.Label>&nbsp; Email</Form.Label>
                <Form.Control className='input_cont'autoComplete="new-email"  type="email" placeholder="✉ Email" name="email" value={formData.email} onChange={handleChange} required/>
              </Form.Group>

              <Form.Group className="main_content">
                <Form.Label>&nbsp; Password</Form.Label>
                <Form.Control className='input_cont' autoComplete="new-password" type="password" placeholder="🔒 Password" name="password" value={formData.password} onChange={handleChange} required/>
              </Form.Group>

              <Button variant="primary" type="submit" >Login👉</Button>
            </Form>
          </div>
          <div className='msg'>
               <p>Don't have an account? <Link to="/registration">Register now</Link></p>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Login;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/css/Login.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import { Link } from 'react-router-dom'

// const Login = () => {
// //   // const [mname, setName] = useState("");
// //   // const [memail, setEmail] = useState("");
// //   // const [mpassword, setPassword] = useState("");
// //   const navigate = useNavigate();
// //   const handleLogin = () => {
// //     if (mname=="" && memail=="" && mpassword=="") {
// //       alert("Logined Successfully!👍");
// //       navigate("/home");
// //     } else {
// //       alert("User is not Registered. Please do Registration.");
// //       navigate("/registration")
// //     }
// //   };
// //   return (
// //     <center>
// //     <div className='main_login'>
// //       <h1>Login</h1>
// //       <div class="login_m">
// // 	      <div class="login_text">
// // 		      <h2>Welcome to Our Website!</h2>
// // 		      <p>To keep connected with us, please login to your personal account.</p>
// // 	      </div>
// //       <div class="form-group">
// //         {/* <input type="text" placeholder="👤 Name" onChange={e => setName(e.target.value)} /><br/>
// //         <input type="email" placeholder="✉ Email" onChange={e => setEmail(e.target.value)} /><br/>
// //         <input type="password" placeholder="🔒 Password" onChange={e => setPassword(e.target.value)} /><br/> */}
// //          <input type="text" placeholder="👤 Name"/><br/>
// //          <input type="email" placeholder="✉ Email"/><br/>
// //          <input type="password" placeholder="🔒 Password"/><br/>
// //       </div>
// //       <button onClick={handleLogin}>Login👉</button>
// //             {/* <button>Login👉</button> */}
// //   </div>
// // </div>
// // </center>
// //   );
// // }

// const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (name === 'profile') {
//             setFormData({ ...formData, profile: files[0] });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = new FormData();
//         for (let key in formData) {
//             data.append(key, formData[key]);
//         }

//         try {
//             await axios.post('http://127.0.0.1:3000/api/registration/', data);
//             alert('Student registered successfully!');
//             navigate('/home');
//         } catch {
//             alert('Error submitting form');
//         }
//     };

//     const handlelogin = () => {
//         if (name==="" || email==="" || password==="") {
//            alert("Please enter incomplete details...")
//         } 
//         if-else (name!==name || email!==email || password!==password) {
//               alert("User is not Registered. Please do Registration.");
//       navigate("/registration")
//         }
//         else{
//             alert("Logined Successfully!👍");
//       navigate("/home");
//         }
//     };
//   return (
//     <center>
//     <div className='main_login'>
//       <h1>Login</h1>
//       <div class="login_m">
// 	      <div class="login_text">
// 		      <h2>Welcome to Our Website!</h2>
// 		      <p>To keep connected with us, please login to your personal account.</p>
// 	      </div>
//         <div className='main_body'>
//           <Form onSubmit={handleSubmit} encType="multipart/form-data">
//           <br />
//             <Form.Group className="main_content">
//               <Form.Label>&nbsp; Name</Form.Label>
//               <Form.Control className='input_cont' type="text" placeholder="👤 Name" name="name" value={formData.name} onChange={handleChange} required />
//             </Form.Group>

//             <Form.Group className="main_content">
//               <Form.Label>&nbsp; Email</Form.Label>
//               <Form.Control className='input_cont' type="email" placeholder="✉ Email" name="email" value={formData.email} onChange={handleChange} required />
//             </Form.Group>

//             <Form.Group className="main_content">
//               <Form.Label>&nbsp; Password</Form.Label>
//               <Form.Control className='input_cont' type="password" placeholder="🔒 Password" name="password" value={formData.password} onChange={handleChange} required />
//             </Form.Group>
            
//             <Button variant="primary" type="submit" onClick={handlelogin}>Login👉</Button>
//           </Form>
//         </div>
//       </div>
//     </div>
//     </center>
//   );
// }

// export default Login;