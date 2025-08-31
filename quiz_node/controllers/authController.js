const db = require('../config/db');

exports.login = (req, res) => {
const { email, password } = req.body;
  const sql = "SELECT * FROM registration WHERE email = ? AND password = ?";

  db.query(sql, [ email, password], (err, result) => {
  if (err) {
    console.log("DB Error:", err); // <-- log full error
    return res.status(500).send("DB error");
  }

  if (result.length === 0) return res.status(401).send("Invalid email or password");

  res.status(200).json({ message: "Login success", user: result[0] });
});

};