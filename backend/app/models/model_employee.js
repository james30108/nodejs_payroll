const mongoose = require("mongoose")
// สร้างฐานข้อมูล
const dbUrl = "mongodb://127.0.0.1:27017/demo_payroll"
mongoose.connect(dbUrl,{
    
    useNewUrlParser: true, 
    useUnifiedTopology: true

}).catch(err=>console.log(err))

// ออกแบบโครงสร้างในการจัดเก็บข้อมูล (Schema)
let employeeSchema = mongoose.Schema(
    {
        employee_name: String,
        employee_email: String,
        published: Boolean
    },
    { timestamps: true }
)

// สร้างโมเดล
let Employee = mongoose.model("system_employee", employeeSchema)

// ส่งออกโมเดล
module.exports = Employee

// บันทึกข้อมูล
module.exports.saveEmployee = function (model, data) {
    model.save (data)
}