import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/TestList.css"; // ✅ CSS import

const TestList = () => {
  const [tests, setTests] = useState([]);
  const [user, setUser] = useState(null); // ✅ use null initially

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user && user.id) { // ✅ only fetch when user is ready
      axios
        .get(`http://localhost:3000/api/results/user/${user.id}`)
        .then((res) => setTests(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]); // ✅ depend on user

  if (!user) {
    return <p className="loading-text">Loading user...</p>;
  }

  return (
    <div className="test-list-container">
      <h3 className="test-history-title">Your Tests History</h3>
      {tests.length === 0 ? (
        <p className="no-tests-text">No tests found.</p>
      ) : (
        tests.map((test) => (
          <Card key={test.id} className="test-card">
            <Card.Body>
              <Card.Title className="test-course">{test.course_name}</Card.Title>
              <Card.Text>
                <span className="gradient-text">Status: </span>
                <span style={{color:'#F9B939',paddingLeft:'10px',fontSize:'x-large'}}>{test.status}👩‍🎓</span>
              </Card.Text>
              <Card.Text>
                <span className="gradient-text">Score: </span>
                <span style={{color:'#F9B939',paddingLeft:'10px',fontSize:'x-large'}}>{test.score}/{test.total_questions}</span>
              </Card.Text>
              <Card.Text>
                <span className="gradient-text">Percentage: </span>
                <span style={{color:'#F9B939',paddingLeft:'10px',fontSize:'x-large'}}>{test.percentage}%</span>
              </Card.Text>
            </Card.Body>
            <div className="button-container">
              <Link to={`/test-details/${user.id}/${test.course_id}`}>
                <Button>View</Button>
            </Link>
          </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default TestList;
