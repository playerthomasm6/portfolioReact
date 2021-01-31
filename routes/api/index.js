const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/home", bookRoutes);

module.exports = router;
