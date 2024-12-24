const Review = require("../models/Review");

exports.createReview = async (req, res) => {
    try {
        const { companyName, pros, cons, rating } = req.body;
        const newReview = await Review.create({
            companyName,
            pros,
            cons,
            rating,
        });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: "Failed to create review" });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const { companyName } = req.query;
        const reviews = await Review.findAll({ where: { companyName } });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
};
