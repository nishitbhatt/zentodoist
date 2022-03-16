const mongoose = require("mongoose");
// const databaseString = process.env.DATABASESTRINGPRODUCTION;
const databaseString = "mongodb+srv://TaskManager:Paparocks_123@cluster0.3rcip.mongodb.net/test";

mongoose.connect(databaseString).then((data) => {
    console.log('Connction successfull !');
}).catch((e) => {
    console.log("No Connection", e);
});
