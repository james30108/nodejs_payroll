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

// Create 
router.post("/", upload_employee.single("employee_image"), employee.create)
// Retrieve all 
router.get("/", employee.findAll)
// Retrieve all published (Search)
router.get("/published", employee.findAllPublished)
// Retrieve a single with id
router.get("/:id", employee.findOne)
// Into edit page (after redirect)
router.post("/edit/", employee.edit)
// Update a with id
router.put("/:id", employee.update)
// Delete a with id
router.delete("/:id", employee.delete)
// Delete all
router.delete("/", employee.deleteAll)

module.exports = router