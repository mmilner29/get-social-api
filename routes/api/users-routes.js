const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    removeFriend,
    addFriend
} = require('../../controllers/user-controller');

// at /api/users

router
.route('/')
.get(getAllUsers)
.post(createUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

// router
// .route('/api/users/:userId/friends')
// .post(addFriend);

module.exports = router;