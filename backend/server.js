const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const cors = require('cors');
const path = require('path');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      secure: false, 
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    },
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Catch-all route
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Ensure uploads directory exists
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)){
  fs.mkdirSync(uploadsDir);
}

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
