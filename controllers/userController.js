const userModel = require("../models/userModel");

const createUser = async (req, res) => {
    // Extracting data from request body
    const {name, phoneNumber, email} = req.body;

    try {
        // Checking if any required field is missing
        if (!name || !phoneNumber || !email) {
            return res.json({
                success: false,
                message: "Please enter all fields",
            });
        }

        // Checking if the user already exists
        const existingUser = await userModel.findOne({ phoneNumber: phoneNumber });

        if (existingUser) {
            return res.json({
                success: false,
                message: "User already exists",
            });
        }

        // Creating a new user
        const newUser = new userModel({
            name: name,
            phoneNumber: phoneNumber,
            email: email,
        });

        // Saving the new user to the database
        await newUser.save();

        res.json({
            success: true,
            message: "User created successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = { createUser };
