const { Router } = require("express");

const router = Router();
const { getUsers } = require("../controllers/index.controller");

router.post("/users", getUsers);

module.exports = router;
