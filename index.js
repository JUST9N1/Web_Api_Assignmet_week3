const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./database/database");



dotenv.config();

connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT;


app.use("/api/", require("./routes/userRoutes"));
app.use("/api", require("./routes/reservationRoute"));
app.use("/api", require("./routes/bookAppointmentRoute"));


app.listen(PORT, () => {
  console.log(`The server is successfully running on  ${PORT}`);
});
