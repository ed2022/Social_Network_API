const router = require('express').Router();
const userRoutes = require('./users');
const thoughtsRoutes = require('./thoughts');
const friendsRoutes = require('./friends');
const reactionsRoutes = require('./reactions');
// const thoughtRoutes = require('./thoughts');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/users/:userId/friends', friendsRoutes);
router.use('/thoughts/:thoughtId/reactions', reactionsRoutes);
// router.use('/thoughts', thoughtRoutes);

module.exports = router;
