var express = require('express');
var router = express.Router();
const {User} = require('../lib/models');

// REST API Design
// Create a user
// List out all the users
// List out a single user
// Delete a single user
// Update a single user
// CRUD operations

// GET /users -> http://localhost:3000/api/v1/users Listing out all the users
router.get('/users', async function(req, res, next) {
    // you write code here to fetch users from the database using seqlize and then return the response with the users found.
    let users = await User.findAll({});
    res.json(users)
});

// GET /users/1 -> http://localhost:3000/api/v1/users/1 List out the user with id = 1
router.get('/users/:id', async function(req, res, next) {
    console.log('req.params are', req.params)
    let user = await User.findOne({where: {id: req.params.id}});
    res.json(user)
});

// POST /users -> http://localhost:3000/api/v1/users Creating a user
router.post('/users', async function(req, res, next) {
    console.log("the request body is", req.body);
    // write a query in seqlelize to create the user now
    let user = await User.create(req.body);
    res.json(user)
});

// DELETE /users/1 -> http://localhost:3000/api/v1/users/1 Delete the user with id = 1
router.delete('/users/:id', async function(req, res, next) {
    console.log('req.params are', req.params)
    let user = await User.destroy({where: {id: req.params.id}});
    res.json(user)
});

// UPDATE /users/1 -> http://localhost:3000/api/v1/users/1 Update the user with id = 1
router.put('/users/:id', async function(req, res, next) {
    console.log('req.params are', req.params)
    let user = await User.update(req.body, {where: {id: req.params.id}});
    res.json(user)
});

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

module.exports = router;
