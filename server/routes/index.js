const { Router } = require('express');
const controllers = require('../controllers/reviews');
const router = Router();

router.get('/reviews', controllers.getAllReviews);

router.post('/createReviews', controllers.createReview);


module.exports = router;
