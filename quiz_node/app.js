const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db');

const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const courseRoutes = require('./routes/courseRoutes');
const questionRoutes = require('./routes/questionRoutes');
const resultRoutes = require('./routes/resultRoutes');
const quizAnswerRoutes = require('./routes/quizAnswerRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Configure CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://web.quiz.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.send('Welcome to Node + MySQL API');
});

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/login', authRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/quiz-answers', quizAnswerRoutes);
app.use('/api/registration', registrationRoutes);

// Static files
app.use('/uploads', express.static('uploads'));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
