const Portfolio = require('../models/Portfolio');

// ▼ All portfolios ▼
exports.getAllPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.render('index', { portfolios });
    } catch (err) {
        res.status(500).send('Server error while fetching portfolios.');
    }
};

// ▼ Render portfolio add page ▼
exports.getAddPortfolioPage = (req, res) => {
    res.render('add');
};

// ▼ Handle add portfolio operation ▼
exports.addPortfolio = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        await Portfolio.create({ title, description, image });
        res.redirect('/portfolio');
    } catch (err) {
        res.status(500).send('Server error while adding portfolio.');
    }
};

// ▼ Handle portfolio delete operation ▼
exports.deletePortfolio = async (req, res) => {
    try {
        const { id } = req.params;
        await Portfolio.findByIdAndDelete(id);
        res.redirect('/portfolio');
    } catch (err) {
        res.status(500).send('Server error while deleting portfolio.');
    }
};
