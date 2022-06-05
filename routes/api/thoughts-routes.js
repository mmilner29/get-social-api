const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

router.route('/:userId/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);


router.route('/:userId')
.post(createThought)
.get(getAllThoughts);

module.exports = router;