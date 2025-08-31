const db = require('../config/db');

exports.addContact = (req, res) => {
  const { name, email, contact,address, message } = req.body;

  const sql = `
    INSERT INTO contact(name, email, contact, address,message) 
    VALUES ('${name}', '${email}', '${contact}','${address}', '${message}')
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error inserting contact:", err);
      res.status(500).send("Database error");
    } else {
      res.send("Contact added successfully!");
    }
  });
};