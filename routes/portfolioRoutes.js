const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioController");

// GET: Route to list all portfolios
router.get("/", portfolioController.getAllPortfolios);

// GET: Route to show add portfolio page
router.get("/add", portfolioController.getAddPortfolioPage);

// POST: Route to handle portfolio creation
router.post("/add", portfolioController.addPortfolio);

// POST: Route to handle portfolio deletion
router.post("/delete/:id", portfolioController.deletePortfolio);

module.exports = router;
