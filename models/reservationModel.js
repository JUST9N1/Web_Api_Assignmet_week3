const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    numberOfGuest: {
        type: Number,
        required: true,
    },
});

const Reservation = mongoose.model("new_reservation", reservationSchema);

module.exports = Reservation;

