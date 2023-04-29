const express = require("express");

const router = express.Router();

router.get("/",(req,res,next) => {
    res.status(200).json({
        message:"Products ekranı GET requesti."
    })
})

router.post("/",(req,res,next) => {
    res.status(200).json({
        message:"Products ekranı POST requesti."
    })
})

module.exports = router;