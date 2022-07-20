const department = require("../controllers/controller_department")
const router   = require("express").Router()

// Create 
router.post("/", department.create)
// Retrieve all 
router.get("/", department.findAll)
// Retrieve a single with id
router.get("/:id", department.findOne)
// Update a with id
router.put("/:id", department.update)
// Delete a with id
router.delete("/:id", department.delete)

module.exports = router