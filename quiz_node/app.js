const express = require('express');
const cors = require('cors');
require('./config/db'); 
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const courseRoutes = require('./routes/courseRoutes');
const questionRoutes = require('./routes/questionRoutes');
const resultRoutes = require('./routes/resultRoutes');
const quizAnswerRoutes = require('./routes/quizAnswerRoutes');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to Node + MySQL API');
});
app.use('/api/contact',contactRoutes) 
app.use('/api/login', authRoutes) 
app.use('/api/course', courseRoutes) 
app.use('/api/results', resultRoutes)
app.use('/api/question', questionRoutes) 
app.use('/api/quiz-answers',quizAnswerRoutes)
app.use('/api/registration',registrationRoutes) 
app.use('/uploads', express.static('uploads')); 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});