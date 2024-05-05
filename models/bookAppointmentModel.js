const mongoose = require("mongoose");

const bookAppointmentSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^\d{4}-\d{2}-\d{2}$/.test(value);
            },
            message: (props) =>
                `${props.value} is not a valid date format (YYYY-MM-DD)!`,
        },
    },
    time: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
            },
            message: (props) => `${props.value} is not a valid time format (HH:mm)!`,
        },
    },
});

const bookAppointmentmodel = mongoose.model(
    "bookAppointment",
    bookAppointmentSchema
);

module.exports = { bookAppointmentmodel };
