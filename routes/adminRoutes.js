const express = require("express");
const {
  getAllUsersController,
  getDoctorsController,
  changeAccountStatusController,
} = require("../controllers/admincontroller");
const authMiddleware = require("../utils/auth");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getDoctorsController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;