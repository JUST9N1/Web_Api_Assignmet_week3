const router = require("express").Router();

const bookAppointmentController = require("../controllers/bookAppointmentController");

router.post("/book-appointment", bookAppointmentController.bookAppointment);

module.exports = router;
