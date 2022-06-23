// ตัวอย่าง การใช้งาน express.js แบบ Dymanic files
const express       = require("express")
const cors          = require("cors");
const router        = require("./app/routes/")
const app           = express()

// สำหรับรับข้อมูล จาก API ฝั่ง Frontend 
var corsOptions = {
    origin: "http://localhost:3000" // ใส่ที่มาของเว็บที่ส่งข้อมุลเข้ามา
};
app.use(cors(corsOptions))

// use คือการกำหนด middleware หรือก็คือตัวกรอง request ที่ส่งเข้ามา
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({extended:false})) // คำสั่งแปลงข้อมูลที่ถูกส่งมาแบบ post 
app.use(router)


app.listen(8080,()=>{
    console.log("รัน server ที่ port 8080")
})