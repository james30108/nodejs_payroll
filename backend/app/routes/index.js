const express   = require("express") // import Express เข้ามาทำงาน
const router    = express.Router() // Router จะทำงานเกี่ยวกับระบบรับส่งข้อมูลทั้งหมด

router.use("/api/employee", require("./router_employee"))
router.use("/api/department", require("./router_department"))

module.exports = router // ทำการ export 