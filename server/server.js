require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Contact = require('./models/Contact');

const app = express();

app.use(cors()); 
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

app.get('/api/cv/download/:format', (req, res) => {
  const { format } = req.params;
  
  
  let fileName = format === 'docx' ? 'resume.docx' : 'resume.pdf';
  let filePath = path.join(__dirname, 'assets', fileName);

  
  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("File not found.");
    }
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});