const { Users } = require("./Models");
const { Sales } = require("./Models");
const { Jobs } = require("./Models");
const { Forums } = require("./Models")
const { Posts } = require("./Models")

// create jobs
Jobs.insertMany([
    {
        title: 'PAID research study for mobile gamers!',
        description: 'We are a user research company specializing in market research and usability testing, and we are looking for participants for an upcoming paid user research study!',
        payment: '$100',
        contact_info: 'jjbigboy@hotmail.com',
        location: 'lansing'
    },
    {
        title: 'Calling all gamers',
        description: 'Mint conditiongame gear',
        payment: '$5',
        contact_info: 'perice@msu.edu',
        location: 'lansing'
    }
])
    .then((newJobs) => {
        console.log(newJobs);
    })
    .catch((error) => {
        console.log(error);
    });

