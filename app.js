const express = require('express');
const path = require('path');
const connectDB = require('./config/database'); // MongoDB connection
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Redirect index
app.get('/', (req, res) => {
    res.redirect('index');
});

// Routes
app.use('/portfolio', portfolioRoutes);



// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
