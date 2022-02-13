//Calling router from express
const router = require('express').Router();
//importing routes 
const userRoutes = require('./userRoutes.js');
const thoughtsRoutes = require('./thoughtRoutes.js');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);
// router.use('/thoughts', thoughtRoutes);

module.exports = router;
