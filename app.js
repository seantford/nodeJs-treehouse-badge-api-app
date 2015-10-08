//require the profile.js file
var profile = require("./profile.js");

//users array will be the console input, in array form, starting at the 3rd item.
var users = process.argv.slice(2);

//for each user in users array, run profile.get
users.forEach(profile.get);