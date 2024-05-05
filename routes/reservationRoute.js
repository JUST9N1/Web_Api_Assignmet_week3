const router = require("express").Router();

const reservationController = require("../controllers/reservationController");

router.post("/reservations", reservationController.createReservation);

module.exports = router;
