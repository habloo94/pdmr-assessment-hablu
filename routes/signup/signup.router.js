const router = require("express").Router();
const {open} = require('./signup.controller');

router.get("/", open);

module.exports = router;