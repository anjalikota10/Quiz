import React, { useEffect, useState } from "react";
import { Container, Card, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/Resultcard.css"; // ✅ CSS import

const Resultcard = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/results/user/${id}`)
      .then((res) => {
        if (res.data.length > 0) {
          setResult(res.data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching results:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="loading-container">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!result) {
    return (
      <Container className="loading-container">
        <p>No result found.</p>
      </Container>
    );
  }

  // Quotes
  const passQuote =
    "Success is not final; failure is not fatal: It is the courage to continue that counts.";
  const failQuote =
    "Failure is simply the opportunity to begin again, this time more intelligently.";

  return (
    <div className="resultcard-container">
      <Card className="result-card">
        <h3 className="main_heading">{result.course_name} - Quiz Result</h3>
        <hr />
        <p>
          <strong className="gradient-text">Total Questions:</strong> 
          <span style={{color:'#F9B939'}}>{result.total_questions}</span>
        </p>
        <p>
          <strong className="gradient-text">Score:</strong>
          <span style={{color:'#F9B939'}}>{result.score} / {result.total_questions}</span>
        </p>
        <p>
          <strong className="gradient-text">Percentage:</strong>
          <span style={{color:'#F9B939'}}>{result.percentage}%</span> 
        </p>
        <h5 className={result.status === "Pass" ? "text-success" : "text-danger"}>
          <strong className="gradient-text">Status: </strong>
          <span style={{color:'#F9B939'}}>{result.status}</span> 
        </h5>
        <hr />
        <p className="thankyou-text">
          <em>🙏 Thank you for giving the test!</em>
        </p>
        <blockquote className="quote_text">
          {result.status === "Pass" ? passQuote : failQuote}
        </blockquote>
        <div className="button-container">
          <Button onClick={() => navigate(`/test-details/${id}/${result.course_id}`)}>View Test Results</Button>
        </div>
      </Card>
    </div>
  );
};

export default Resultcard;
