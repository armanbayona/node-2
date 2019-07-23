const express = require('express');
const users = require('./controllers/usersController.js');
const profiles = require('./controllers/profilesController.js');
const posts = require('./controllers/postsController.js');
const comments = require('./controllers/commentsController.js');

const db = {
  users: {
    id: 0,
    data: [],
  },
  profiles: {
    id: 0,
    data: [],
  },
  posts: {
    id: 0,
    data: [],
  },
  comments: {
    id: 0,
    data: [],
  },
};

const app = express();
app.use(express.json());

const PORT = 3001;

app.set('db', db);

//Step 3 - Creating Users
app.post('/sign-up', users.create);
//Step 4 - Creating User Profiles
app.put('/profile/:id', profiles.update);
//Step 5 - Creating Posts
app.post('/posts', posts.create);
//Step 5 - Adding Comments To Posts
app.post('/comments', posts.create);

//Debug
app.get('/debug', (req, res) => {
	res.status(200).json(req.app.get('db'))
})
//Get Entities
app.get('/all-users', users.read);
app.get('/all-profiles', profiles.read);
app.get('/all-posts', posts.read);
app.get('/all-comments', comments.read);

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`)
});