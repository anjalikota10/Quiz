const db = require("../config/db");

// CREATE
exports.createQuestion = (req, res) => {
  const { cid, question, answers, correct_answer } = req.body;

  // answers should be an array → we convert to JSON string
  const sql = "INSERT INTO questions (cid, question, answers, correct_answer) VALUES (?, ?, ?, ?)";
  db.query(sql, [cid, question, JSON.stringify(answers), correct_answer], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Question added", id: result.insertId });
  });
};

// READ ALL
exports.getQuestions = (req, res) => {
  db.query("SELECT * FROM questions", (err, result) => {
    if (err) return res.status(500).send(err);
    // parse answers JSON string into array before sending
    const formatted = result.map(q => ({
      ...q,
      answers: JSON.parse(q.answers)
    }));
    res.send(formatted);
  });
};

// READ ONE
exports.getQuestionById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM questions WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (!result.length) return res.status(404).send({ message: "Question not found" });
    const question = result[0];
    question.answers = JSON.parse(question.answers);
    res.send(question);
  });
};

// UPDATE
exports.updateQuestion = (req, res) => {
  const { id } = req.params;
  const { cid, question, answers, correct_answer } = req.body;

  const sql = "UPDATE questions SET cid=?, question=?, answers=?, correct_answer=? WHERE id=?";
  db.query(sql, [cid, question, JSON.stringify(answers), correct_answer, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Question updated" });
  });
};

// DELETE
exports.deleteQuestion = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM questions WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Question deleted" });
  });
};



exports.getQuestionsByCourse = (req, res) => {
  const { cid } = req.params; // Get course id from URL

  const sql = `
    SELECT q.*, c.name AS course_name 
    FROM questions q
    JOIN course c ON q.cid = c.id
    WHERE q.cid = ?
  `;

  db.query(sql, [cid], (err, result) => {
    if (err) return res.status(500).send(err);

    // parse answers JSON string into array before sending
    const formatted = result.map(q => ({
      ...q,
      answers: JSON.parse(q.answers),
    }));

    res.send(formatted);
  });
};



