const router = require("express").Router();
const {
    open,login
} = require('./login.controller');

router.get("/", open);
router.post("/", login);

module.exports = router;