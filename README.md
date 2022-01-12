# ga-list-api


## Purpose of this api
To serve data to the main ga-list application 

<!-- ## How does it work? -->


## Necessary Deliverables:
- A working app, built by the whole team, hosted somewhere on the internet
- A link to your hosted working app in the URL section of your Github repo
- ✅ A team git repository hosted on Github, with a link to your hosted project, and frequent commits from every team member dating back to the very beginning of the project.
- A readme.md file with:
Include a screenshot of the site in repo's README
Explanations of the technologies used
A couple paragraphs about the general approach you took
Installation instructions for any dependencies
- Link to your user stories – who are your users, what do they want, and why?
- Link to your wireframes – sketches of major views / interfaces in your application
- Descriptions of any unsolved problems or major hurdles your team had to overcome.



<!-- ## Screenshots -->

## Explanations of the technologies used
The backend was bulit with MongoDB, Express & Node


<!-- ## A couple paragraphs about the general approach you took -->


<!-- ## Installation instructions for any dependencies -->


<!-- ## ERD & WIREFRAME -->


## USER STORIES
### As a user I want to...
1. Access the home page (without logging in).
2. To browse listings (without logging in).
3. To log in (optional).
4. To create and manage my own posts (have to be logged in).

<!-- ### Additional details
- Who this is for: 
- What this is for: 
- Why:  -->

## Code Snippets
### Jobs Schema
```
const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    payment: String,
    contact_info: String,
    location: String,
});

const Jobs = mongoose.model("Jobs", JobsSchema);

module.exports = Jobs; 
```
### Jobs Display
```
router.get("/", async (request, response) => {

    console.log(request.body)
    response.send('ok');

    try {
        const jobsArray = await Jobs.find({});
        response.json({ jobsArray });
    } catch (error) {
        response.status(500).send(error);
    }
});
```


<!-- ## Descriptions of any unsolved problems or major hurdles your team had to overcome. -->
