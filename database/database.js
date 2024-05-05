const mongoose = require('mongoose');
const dotenv = require('dotenv')


dotenv.config()

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_CLOUD).then(() => {
        console.log("Database Connected!")
    });
};

// Exporting the function
module.exports = connectDatabase