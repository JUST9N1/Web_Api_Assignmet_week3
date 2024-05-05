const Reservation = require("../models/reservationModel");

const createReservation = async (req, res) => {
    const { userId, eventDate, numberOfGuest } = req.body;

    if (!userId || !eventDate || !numberOfGuest) {
        return res.json({
            success: false,
            message: "Please enter all fields",
        });
    }

    try {
        const currentDate = new Date();
        if (numberOfGuest < 0) {
            return res.json({
                success: false,
                message: "Guest numbers must be greater than 0",
            });
        }

        if (new Date(eventDate) < currentDate) {
            return res.json({
                sucess: false,
                message: "Please enter valid date"
            })
        }

        const newReservation = new Reservation({
            userId: userId,
            eventDate: eventDate,
            numberOfGuest: numberOfGuest,
        });

        await newReservation.save();

        res.json({
            success: true,
            data: {
                userId: userId,
                eventDate: eventDate,
                numberOfGuest: numberOfGuest,
            },
            message: "Reservation saved",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = { createReservation };
