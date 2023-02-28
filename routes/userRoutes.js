const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/usercontroller");
const authMiddleware = require("../utils/auth");

//router onject
const router = express.Router();

//routes
//LOGIN || POST || http://localhost:4000/api/login
router.post("/login", loginController);

//REGISTER || POST || http://localhost:4000/api/register
router.post("/register", registerController);

//Auth || POST || http://localhost:4000/api/getUserData
router.get("/getUserData", authMiddleware, authController);

//APply Doctor || POST || http://localhost:4000/api/apply-doctor
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notifiaction  Doctor || POST || http://localhost:4000/api/get-all-notification
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Doctor || POST || http://localhost:4000/api/delete-all-notification
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC || http://localhost:4000/api/getAllDoctors
// router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

//BOOK APPOINTMENT || http://localhost:4000/api/book-appointment
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

//Booking Avliability || http://localhost:4000/api/booking-availbility
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List || http://localhost:4000/api/user-appointments
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;