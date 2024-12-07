const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/database'); // MongoDB connection
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/portfolio', portfolioRoutes);

// Redirect root to /portfolio
app.get('/', (req, res) => {
    res.redirect('/portfolio');
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
