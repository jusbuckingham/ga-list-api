const express = require("express");
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();

// Import Models
const { User, Sales, Jobs, Forums, Posts, Comments } = require("./models");

// Passport Config
require('./config/passport')(passport);

// Import Controllers
const usersController = require('./controllers/users');
const forumsController = require('./controllers/forums');
const jobsController = require('./controllers/jobs');
const postsController = require('./controllers/posts');
const salesController = require('./controllers/sales');
const commentsController = require('./controllers/comments');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// CORS Headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Routes
app.get('/', (req, res) => res.json({ message: "Welcome to the MERN Auth API" }));

// Route Handlers
app.use('/users', usersController);
app.use('/forums', forumsController);
app.use('/jobs', jobsController);
app.use('/posts', postsController);
app.use('/sales', salesController);
app.use('/comments', commentsController);

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is jammin' on port ${PORT} 🎧`));