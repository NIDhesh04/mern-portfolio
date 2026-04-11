// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Contact = require('./models/Contact'); // Import our schema

const app = express();

// Middleware
app.use(cors()); // Allows your React frontend to communicate with this backend
app.use(express.json()); // Parses incoming JSON data from the contact form

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ==========================================
// ROUTE 1: Contact Form Submission (POST)
// ==========================================
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create and save the new message to MongoDB
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// ==========================================
// ROUTE 2: CV Download (GET)
// ==========================================
app.get('/api/cv/download/:format', (req, res) => {
  const { format } = req.params;
  
  // Determine which file to serve based on the URL parameter
  let fileName = format === 'docx' ? 'resume.docx' : 'resume.pdf';
  let filePath = path.join(__dirname, 'assets', fileName);

  // res.download automatically sets the correct headers for file downloading
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("File not found.");
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});