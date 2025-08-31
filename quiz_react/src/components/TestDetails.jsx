import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button, Spinner, ListGroup, Badge } from "react-bootstrap";
import "../assets/css/TestDetails.css";

const TestDetails = () => {
  const { user_id, course_id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Course, setCourse] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/results/test-details/${user_id}/${course_id}`)
      .then((res) => {
        setQuestions(res.data);
        setCourse(res.data[0]?.course_name || "");
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user_id, course_id]);

  if (loading) {
    return (
      <div className="maintd">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="test-details">
      <h3 className="course-title">{Course} Test Details</h3>
      {questions.map((q, index) => {
        const answers = Array.isArray(q.answers) ? q.answers : q.answers.split(",");
        return (
          <Card key={q.question_id} className="main-card">
            <Card.Body>
              <Card.Title className="question-title">
                Q{index + 1}. {q.question}
              </Card.Title>
              <ListGroup>
                {answers.map((option, i) => {
                  const isCorrect = option === q.correct_answer;
                  const isSelected = option === q.selected_answer;
                  return (
                    <ListGroup.Item
                      key={i}
                      className={`answer-option ${
                        isCorrect
                          ? "correct-answer"
                          : isSelected && !isCorrect
                          ? "wrong-answer"
                          : ""
                      }`}
                    >
                      {option}
                      {isCorrect && <Badge bg="success">✅ Correct</Badge>}
                      {isSelected && !isCorrect && (
                        <Badge bg="danger">❌ Your Answer</Badge>
                      )}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Card>
        );
      })}

      {/* ✅ Button wrapper for centering */}
      <div className="button-container">
        <Button className="back-button" onClick={() => window.history.back()}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default TestDetails;
