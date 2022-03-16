const mongoose = require("mongoose");
const databaseString = process.env.DATABASESTRINGPRODUCTION;

mongoose.connect(databaseString).then((data) => {
    console.log('Connction successfull !');
}).catch((e) => {
    console.log("No Connection", e);
});
