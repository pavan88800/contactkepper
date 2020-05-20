const express = require('express');
const router = express.Router();

// @route     GET /api/auth
// @des       Get logged in  Users
// @Access     Private
router.get('/', (req, res) => {
	res.send(' Get All Users  ');
});

// @route     POST /api/auth
// @des       Auth user get token
// @Access     public
router.post('/', (req, res) => {
	res.send(' Register a user');
});
module.exports = router;
