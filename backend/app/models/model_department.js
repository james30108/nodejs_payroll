module.exports = (mongoose, mongoosePaginate) => {

    // ออกแบบโครงสร้างในการจัดเก็บข้อมูล (Schema)
    let departmentSchema = mongoose.Schema(
        {
            department_name   : String,
            department_upline : String,
            department_salary : String
        },
        { timestamps: true }
    )
    
    // Paginate
    departmentSchema.plugin(mongoosePaginate)
    
    // สร้างโมเดล
    let Department = mongoose.model("system_department", departmentSchema)
    
    // ส่งออกโมเดล
    return Department
    
}