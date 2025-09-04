const db = require("../config/db");

// Save Answer
exports.saveAnswer = (req, res) => {
  const { user_id, course_id, question_id, selected_answer, is_correct } = req.body;
  const sql = "INSERT INTO quiz_answers (user_id, course_id, question_id, selected_answer, is_correct) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [user_id, course_id, question_id, selected_answer, is_correct], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Answer saved", id: result.insertId });
  });
};

// Get all answers of a user for a course
exports.getUserAnswers = (req, res) => {
  const { user_id, course_id } = req.params;
  const sql = "SELECT * FROM quiz_answers WHERE user_id=? AND course_id=?";
  db.query(sql, [user_id, course_id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};