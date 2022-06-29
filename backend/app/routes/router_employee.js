const employee = require("../controllers/controller_employee")
const multer   = require("multer") // เรียกใข้งาน multer
const router   = require("express").Router()

// Upload File
const storage_employee = multer.diskStorage({
    
    destination:function(req, file, cb) { // การรุบุตำแหน่งที่จะทำการเก็บไฟล์
        cb(null, "./app/public/assets/img/employees")
    },
    filename:function(req, file, cb) { // ระบุชื่อไฟล์ใหม่เพื่อป้องกันการซ้ำกันของชื่อ
        cb(null, "employee_" + Date.now() + ".jpg")
    }

})

const upload_employee = multer({ // เริ่มต้นอัปโหลด
    storage:storage_employee
})

// Create a new Tutorial
router.post("/", upload_employee.single("employee_image"), employee.create)
// Retrieve all Tutorials
router.get("/", employee.findAll)
// Retrieve all published Tutorials
router.get("/published", employee.findAllPublished)
// Retrieve a single Tutorial with id
router.get("/:id", employee.findOne)
// Update a Tutorial with id
router.put("/:id", employee.update)
// Delete a Tutorial with id
router.delete("/:id", employee.delete)
// Create a new Tutorial
router.delete("/", employee.deleteAll)

module.exports = router