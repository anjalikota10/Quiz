const db = require("../config/db"); // assuming you have db connection in db.js

// CREATE
exports.createCourse = (req, res) => {
const { name, description } = req.body;
const image = req.file.filename; // multer stores file

  const sql = "INSERT INTO course(name, image, description) VALUES (?, ?, ?)";
  db.query(sql, [name, image, description], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Course added", id: result.insertId });
  });
};

// READ ALL
exports.getCourses= (req, res) => {
  db.query("SELECT * FROM course", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

// READ ONE
exports.getCourseById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM course WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result[0]);
  });
};

// UPDATE
exports.updateCourse = (req, res) => {
  const { id } = req.params;
  const { name, image, description } = req.body;
  const sql = "UPDATE course SET name=?, image=?, description=? WHERE id=?";
  db.query(sql, [name, image, description, id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Course updated" });
  });
};

// DELETE
exports.deleteCourse = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM course WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Course deleted" });
  });
};