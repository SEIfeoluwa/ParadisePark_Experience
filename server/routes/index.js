const { Router } = require('express');
const controllers = require('../controllers/reviews');
const router = Router();

router.get('/', (req, res) => res.send('This is user!'));
router.get('/reviews', controllers.getAllReviews);

router.post('/createReviews', controllers.createReview);


module.exports = router;
