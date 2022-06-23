const express   = require("express") // import Express เข้ามาทำงาน
const multer    = require("multer") // เรียกใข้งาน multer
const router    = express.Router() // Router จะทำงานเกี่ยวกับระบบรับส่งข้อมูลทั้งหมด

router.use("/api/employee", require("./router_employee"));

module.exports = router // ทำการ export 