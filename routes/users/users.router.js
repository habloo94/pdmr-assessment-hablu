const router = require("express").Router();
const {list,add} = require('./users.controller');

router.get("/", list);
router.post("/", add);

module.exports = router;