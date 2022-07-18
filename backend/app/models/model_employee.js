module.exports = (mongoose, mongoosePaginate) => {


// ออกแบบโครงสร้างในการจัดเก็บข้อมูล (Schema)
let employeeSchema = mongoose.Schema(
    {
        employee_name       : String,
        employee_email      : String,
        employee_tel        : String,
        employee_department : String,
        employee_address    : String,
        employee_image      : String,
        published           : Boolean
    },
    { timestamps: true }
)

// Paginate
employeeSchema.plugin(mongoosePaginate)

// สร้างโมเดล
let Employee = mongoose.model("system_employee", employeeSchema)

// ส่งออกโมเดล
return Employee

// บันทึกข้อมูล
/*
module.exports.saveEmployee = function (model, data) {
    model.save (data)
}
*/
}