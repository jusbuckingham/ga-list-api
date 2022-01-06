const { Users } = require("./Models");
const { Sales } = require("./Models");
const { Jobs } = require("./Models");
const { Forums } = require("./Models")
const { Posts } = require("./Models")
const { Comments } = require("./Models");

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

//create a comments
Comments.insertMany([
    {
        header: 'Most Covid infections are fake and mass hysteria',
        content: 'They believe a threat to be real because someone says so, </br>or because it fits their experience. Due to the threatening delusion, a large group of people gets collectively very upset. In other words, a threat, whether real or imaginary [17], causes collective anxiety [18].',
        date: new Date()
    },
    {
        header: "Let's never forget this gem",
        content: "Look, the results of the vaccine are very good, and if you do get (Covid), it's a very minor form.",
        date: new Date()
    },
    {
        header: "I've solved the energy crisis",
        content: 'Turn cellulite into fuel. Mandatory lipo for all fat asses in the USA',
        date: new Date()
    },
    {
        header: 'FYI Do not sign a solar contract w Sunnova',
        content: "We purchased a house w an existing Sunnova contract.I didn't know it but the system was already not working",
        date: new Date()
    },
    {
        header: 'New Chef Ramsey show starts tonight',
        content: 'Next Level Chef. Welcome to the Next Level. Fifteen contestants from around the country prepare to level up their cooking skills.',
        date: new Date()
    }

])

    .then((newComments) => {
        console.log(newComments);
    })
    .catch((error) => {
        console.log(error);
    });

Sales.insertMany([
    {
        title: "Excellent condition Honda Pilot ",
        description: "I am selling excellent condition Honda Pilot 2009 LX automatic. It runs perfect with no mechanical problem. This would be a great commuter car. ",
        price: "9500",
        contact_info: "555-555-555",
        location: "Los Angeles",
        image_url: "https://images.craigslist.org/00g0g_injwdb356ICz_0CI0t2_600x450.jpg",
    },
    {
        title: "2014 Hyundai Santa Fe Limited AWD 3.5 Liter V6 Auto 1-Owner Leather",
        description: "We are selling a 2014 Hyundai Santa Fe Limited AWD 3rd Row SUV. Please see the pictures to appreciate the condition of this SUV. This is a 1-Owner Bay Area vehicle since new.",
        price: "15999",
        contact_info: "666-666-666",
        location: "San Francisco",
        image_url: "https://images.craigslist.org/01313_8xiF0m5VUMIz_0ww0oo_600x450.jpg",
    },
    {
        title: "Trek Alpha Roadbike",
        description: "Rides well. Some wear and scratches. Handlebar tape also worn. 58cm frame with 16 gears and 700 tires.",
        price: "425",
        contact_info: "777-777-777",
        location: "Santa Monica",
        image_url: "https://images.craigslist.org/00M0M_27Lw3uMiIE2z_0CI0t2_600x450.jpg",
    },
    {
        title: "AirPods Max (BRAND NEW) ",
        description: "Selling a brand new sealed pair of Apple AirPods Max. Won them at a work but don’t need them. $100 off of retail plus you don’t have to pay tax (~$50) so you save $150 :)",
        price: "450",
        contact_info: "999-999-999",
        location: "San Bernardino",
        image_url: "https://images.craigslist.org/00h0h_k8dAMgywRb4z_0t20CI_600x450.jpg",
    },
    {
        title: "iPhone 12 Pro Max 256gb Unlock - White/Silver",
        description: "I have great condition lightly used iPhone 12 Pro Max 256gb Unlocked in white/silver. Comes with original box and cable as shown on the photos. Currently has a temper screen protector since day one. ",
        price: "980",
        contact_info: "100-100-100",
        location: "Los Angeles",
        image_url: "https://images.craigslist.org/01616_3UvdWLQqc0lz_0t20CI_600x450.jpg",
    },
    {
        title: 'Apple Thunderbolt Display 27" Widescreen Monitor MC914LL/B',
        description: 'Enjoy crystal-clear visual details and an easier workflow with the Thunderbolt 27" display from Apple. The display includes a built-in 2.1 speaker system with excellent audio and is FaceTime compatible right out of the box thanks to a built-in FaceTime HD camera with microphone. This high-quality display has a brightness of 375 cd/m2 and a contrast ratio of 1000:1.',
        price: "325",
        contact_info: "222-222-222",
        location: "San Bernandino",
        image_url: "https://images.craigslist.org/01212_2ftxwLsHaMXz_0rA0me_600x450.jpg",
    },
    {
        title: "Kenmore Washer & Electric Dryer",
        description: "Both matching set $580 FIRM, fully functional in working order.",
        price: "580",
        contact_info: "333-333-333",
        location: "Los Angeles",
        image_url: "https://images.craigslist.org/00Q0Q_fnTXC321HSoz_0hq0d4_600x450.jpg",
    },
])
    .then((saleItems) => {
        console.log(saleItems);
    })
    .catch((error) => {
        console.log(error);
    });