import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../assets/css/Profilestyle.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="profilemain">
            <Card className="pro_card">
              <Card.Body className="text_center">
                <h1>My Profile</h1>
                {user ? (
                  <>
                    <Image
                      src={`${import.meta.env.VITE_API_URL}/uploads/${user.image}`}
                      alt="Profile"
                      roundedCircle
                      width="200"
                      height="200"
                    />
                    <h4>
                      <span className="gradient-text">Name: </span>
                      <span style={{color:'#F9B939'}}>{user.name}</span>
                    </h4>
                    <p>
                      <span className="gradient-text">Email: </span>
                      <span style={{color:'#F9B939'}}>{user.email}</span>
                    </p>
                    <div className="pro_add_cont">
                      <p>
                        <strong className="gradient-text">📍 Address: </strong> 
                        <span style={{color:'#F9B939'}}>{user.address}</span>
                      </p>
                      <p>
                        <strong className="gradient-text">📞 Contact: </strong> 
                        <span style={{color:'#F9B939'}}>{user.contact}</span>
                      </p>
                      <p>
                        <strong className="gradient-text">🔒 Password: </strong> 
                        <span style={{color:'#F9B939'}}>{user.password}</span>
                      </p>
                    </div>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </Card.Body>
            </Card>
    </div>
  );
};

export default Profile;
