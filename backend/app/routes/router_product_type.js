const controller = require("../controllers/controller_product_type")
const router     = require("express").Router()

// Create 
router.post("/", controller.create)
// Retrieve all 
router.get("/", controller.get_all)
// Retrieve a single with id
router.get("/:id", controller.get_one)
// Update a with id
router.put("/:id", controller.update)
// Delete a with id
router.delete("/:id", controller.delete)

module.exports = router