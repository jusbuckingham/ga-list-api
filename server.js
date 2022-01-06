const express = require("express");
const { Users } = require("./models");
const { Sales } = require("./models");
const { Jobs } = require("./models");
const { Forums } = require("./models");
const { Posts } = require("./models");
const { Comments } = require("./models");
const app = express();
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();
require('./config/passport')(passport);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// controllers
const users = require('./controllers/users');
const { request, response } = require("express");


// routes
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the MERN Auth API"
    });
});

app.get("/users", async (request, response) => {

    try {
        const usersArray = await Users.find({});
        response.json({ usersArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/sales", async (request, response) => {

    try {
        const salesArray = await Sales.find({});
        response.json({ salesArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/jobs", async (request, response) => {

    try {
        const jobsArray = await Jobs.find({});
        response.json({ jobsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/forums", async (request, response) => {

    try {
        const forumsArray = await Forums.find({});
        response.json({ forumsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/posts", async (request, response) => {

    try {
        const postsArray = await Posts.find({});
        response.json({ postsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});


// comments routes
app.get("/comments", async (request, response) => {
    try {
        const commentArray = await Comments.find({});
        response.json({ commentArray });

    } catch (error) {
        response.status(500).send(error);
    }
});





app.use('/users', users);

app.listen(3000, () => {
    console.log("Server is jammin' on port 3000 🎧")
});