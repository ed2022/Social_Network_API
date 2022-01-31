const router = require('express').Router();

const {
  getThoughts,
  getSingleThoughts,
  createThoughts, 
  updateThoughts,
  deleteThoughts,
} = require('../../controllers/thoughtController');

//GET  by /api/thoughts
router.get('/', getThoughts);

//GET by /api/id/api/thoughts/:thoughtsId
router.get('/:thoughtsId', getSingleThoughts);

//POST/api/thoughts/:thoughtsID 
router.post('/', createThoughts);

//PUT by id/api/thoughts/:thoughtsId
router.put('/:usersId', updateThoughts);

//DELETE by id/api/thoughts/:thoughtsId
router.delete('/:usersId',deleteThoughts);

module.exports = router;
