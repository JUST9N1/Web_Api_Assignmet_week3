const bookAppointmentModel = require("../models/bookAppointmentModel");

const bookAppointment = async (req, res) => {
    const { date, time } = req.body;

    if (!date || !time) {
        return res.json({
            success: false,
            message: "Please Enter all fields",
        });
    }

    try {
        const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
        const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
        const currentDate = new Date();

        if (!dateFormat.test(date)) {
            return res.json({
                success: false,
                message: "Please enter valid date format",
            });
        }

        if (new Date(date) < currentDate){
            return res.json({
                success: false,
                message: "Cannot book the appointment"
            })
        }

        if (!timeFormat.test(time)) {
            return res.json({
                success: false,
                message: "Please enter valid time format",
            });
        }

        if (time == "15:00") {
            return res.json({
                success: false,
                message: "Time slot unavailable",
            });
        }

        const newBookAppointment = new bookAppointmentModel.bookAppointmentmodel({
            date: date,
            time: time,
        });

        await newBookAppointment.save();

        res.json({
            success: true,
            message: "Booked Appointment Sucessfully",
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = { bookAppointment };
