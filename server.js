const express = require("express");
const { User } = require("./models");
const { Sale } = require("./models");
const { Job } = require("./models");
const { Forum } = require("./models");
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.get("/users", async (request, response) => {

    try {
        const usersArray = await users.find({});
        response.json({ usersArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/sales", async (request, response) => {

    try {
        const salesArray = await sales.find({});
        response.json({ salesArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/jobs", async (request, response) => {

    try {
        const jobsArray = await jobs.find({});
        response.json({ jobsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/forums", async (request, response) => {

    try {
        const forumsArray = await forums.find({});
        response.json({ forumsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running at port 3000 🎧")
});