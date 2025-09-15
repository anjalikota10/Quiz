import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/MCQQuizstyle.css"; // ✅ CSS file imported

const MCQQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [user, setUser] = useState(null);
  const [course, setCourse] = useState("");
  const [alreadyAttempted, setAlreadyAttempted] = useState(false);

  const { id } = useParams(); // course_id
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Check if user already attempted the quiz
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/api/results/check/${user.id}/${id}`)
        .then((res) => {
          if (res.data.attempted) {
            setAlreadyAttempted(true);
          }
        })
        .catch((err) => console.error("Error checking results:", err));
    }
  }, [user, id]);

  // ✅ Fetch questions only if not attempted
  useEffect(() => {
    if (!alreadyAttempted) {
      axios
        .get(`http://localhost:3000/api/question/course/${id}`)
        .then((res) => {
          setQuestions(res.data);
          if (res.data.length > 0) {
            setCourse(res.data[0].course_name);
          }
        })
        .catch((err) => console.error("Error fetching questions:", err));
    }
  }, [id, alreadyAttempted]);

  const handleSelect = (qid, ans) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qid]: ans,
    }));
  };

  const handleSubmit = async () => {
    if (!user) {
      alert("User not found! Please log in.");
      return;
    }

    // ✅ Ensure all questions are answered
    if (Object.keys(selectedAnswers).length !== questions.length) {
      alert("Quiz is not completed. Please answer all questions.");
      return;
    }

    let score = 0;

    for (let q of questions) {
      const selected = selectedAnswers[q.id];
      const isCorrect = selected === q.correct_answer;
      if (isCorrect) score++;

      const payload = {
        user_id: user.id,
        course_id: id,
        question_id: q.id,
        selected_answer: selected,
        is_correct: isCorrect,
      };

      await axios.post(`http://localhost:3000/api/quiz-answers`, payload);
    }

    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    const status = percentage >= 40 ? "Pass" : "Fail";

    const resultPayload = {
      user_id: user.id,
      course_id: id,
      score,
      total_questions: totalQuestions,
      percentage,
      status,
    };

    await axios.post(`http://localhost:3000/api/results`, resultPayload);

    alert("Quiz submitted! Score saved.");
    navigate(`/resultcard/${user.id}`);
  };

  return (
    <div className="mainquiz">
      <h1 className="quiz-title">{course} Quiz</h1>

      {alreadyAttempted ? (
        <div className="already-attempted">
          <h3>✅ You have already attempted this quiz.</h3>
          <Button onClick={() => navigate(`/test-details/${user.id}/${id}`)}>View Test Results</Button>
        </div>
      ) : (
        <>
          {questions.map((q, index) => (
            <Card className="quiz-card" key={q.id}>
              <h5 className="question">Q{index + 1}. {q.question}</h5>
              <Form className="custom-radio-group">
                {q.answers.map((ans, i) => (
                  <Form.Check
                    key={i}
                    type="radio"
                    name={`question-${q.id}`}
                    label={ans}
                    value={ans}
                    checked={selectedAnswers[q.id] === ans}
                    onChange={() => handleSelect(q.id, ans)}
                  />
                ))}
              </Form>
            </Card>
          ))}

          {questions.length > 0 && (
           <div className="button-container">
            <Button onClick={handleSubmit}>Submit Answers</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MCQQuiz;
