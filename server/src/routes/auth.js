const express = require("express")
const router = express.Router()

const {
    sendOtp,
    signUp
} = require("../controllers/auth")


router.post("/sign-up",signUp)

router.post("send-otp",sendOtp)

module.exports = router
