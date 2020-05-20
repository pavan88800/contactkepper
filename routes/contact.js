const express = require('express');
const router = express.Router();

// @route       GET /api/contact
// @des         Get All users Contact
// @Access      Private
router.get('/', (req, res) => {
	res.send(' all users');
});

// @route       POST /api/contact
// @des         Add New Contact
// @Access      Public
router.post('/', (req, res) => {
	res.send(' Add User   ');
});

// @route       PUT /api/contact/:id
// @des         Add New Contact
// @Access      Private
router.put('/:id', (req, res) => {
	res.send('Update Contact  ');
});

// @route       DELETE /api/contact/:id
// @des         Add New Contact
// @Access      Private
router.delete('/:id', (req, res) => {
	res.send('DELETE Contact  ');
});

module.exports = router;
