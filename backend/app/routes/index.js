const express   = require("express") // import Express เข้ามาทำงาน
const router    = express.Router() // Router จะทำงานเกี่ยวกับระบบรับส่งข้อมูลทั้งหมด

router.use("/api/employee", require("./router_employee"))
router.use("/api/department", require("./router_department"))
router.use("/api/product_type", require("./router_product_type"))
//router.use("/api/product_attribute", require("./router_product_attribute"))

module.exports = router // ทำการ export 