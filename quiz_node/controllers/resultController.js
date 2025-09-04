const db = require("../config/db");

// Save Result
exports.saveResult = (req, res) => {
  const { user_id, course_id, score, total_questions, percentage, status } = req.body;
  const sql = "INSERT INTO results (user_id, course_id, score, total_questions, percentage, status) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [user_id, course_id, score, total_questions, percentage, status], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Result saved", id: result.insertId });
  });
};

// Get results of a user
exports.getUserResults = (req, res) => {
  const { user_id } = req.params;
  const sql = `
   SELECT r.id, 
       r.course_id, 
       r.status, 
       r.score, 
       r.total_questions, 
       r.percentage,
       c.name AS course_name
FROM results r
JOIN course c ON r.course_id = c.id
WHERE r.user_id = ?
ORDER BY r.id DESC;
`;
  db.query(sql, [user_id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

exports.getUserTestDetails = (req, res) => {
  const { user_id, course_id } = req.params;

  const sql = `
    SELECT 
      c.name AS course_name,
      q.id AS question_id,
      q.question,
      q.answers,
      q.correct_answer,
      qa.selected_answer,
      qa.is_correct
    FROM quiz_answers qa
    JOIN questions q ON qa.question_id = q.id
    JOIN course c ON qa.course_id = c.id
    WHERE qa.user_id = ? AND qa.course_id = ?
    ORDER BY q.id
  `;

  db.query(sql, [user_id, course_id], (err, result) => {
    if (err) return res.status(500).send(err);

    // Parse JSON answers so frontend gets array not string
    const formatted = result.map(row => ({
      ...row,
      answers: JSON.parse(row.answers)
    }));

    res.send(formatted);
  });
};

// Get leaderboard for a course
exports.getCourseResults = (req, res) => {
  const { course_id } = req.params;
  const sql = "SELECT * FROM results WHERE course_id=? ORDER BY percentage DESC";
  db.query(sql, [course_id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

// ------------------ Check Test Attempt ------------------
exports.checkTestAttempt = (req, res) => {
  const { user_id, course_id } = req.params;

  const sql = `SELECT * FROM results WHERE user_id = ? AND course_id = ? LIMIT 1`;

  db.query(sql, [user_id, course_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.length > 0) {
      // Test already attempted
      return res.json({ attempted: true, test: result[0] });
    } else {
      // No test attempted yet
      return res.json({ attempted: false });
    }
  });
};
