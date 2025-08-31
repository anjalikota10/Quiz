const db = require('../config/db');

// ✅ make sure multer is used in your route, otherwise req.file will be undefined
exports.addRegistration = (req, res) => {
  const { name, email, password, contact, address } = req.body;

  // ✅ handle image safely
  const image = req.file ? req.file.filename : '';

  const sql = `
    INSERT INTO registration(name, email, password, contact, address, image) 
    VALUES ('${name}', '${email}', '${password}', '${contact}', '${address}', '${image}')
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error inserting registration:", err);
      res.status(500).send("Database error");
    } else {
      res.send("Registered successfully!");
    }
  });
};