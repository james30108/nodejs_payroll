module.exports = (mongoose, mongoosePaginate) => {

    // ออกแบบโครงสร้างในการจัดเก็บข้อมูล (Schema)
    let product_type_Schema = mongoose.Schema(
        {
            product_type_name   : String,
            product_type_code   : String
        },
        { timestamps: true }
    )
    
    // Paginate
    product_type_Schema.plugin(mongoosePaginate)
    
    // สร้างโมเดล
    let ProductType = mongoose.model("system_product_type", product_type_Schema)
    
    // ส่งออกโมเดล
    return ProductType
    
}