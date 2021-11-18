const router = require("express").Router();
const {list,add} = require('./cars.controller');

router.get("/", list);
router.post("/", add);

module.exports = router;