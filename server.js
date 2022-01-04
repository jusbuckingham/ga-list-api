const express = require("express");
const { Users } = require("./models");
const { Sales } = require("./models");
const { Jobs } = require("./models");
const { Forums } = require("./models");
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

app.listen(3000, () => {
    console.log("Server is jamming on port 3000 🎧")
});