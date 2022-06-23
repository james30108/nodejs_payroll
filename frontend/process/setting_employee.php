<?php 
/*
$connect = mysqli_connect("localhost","root","","vue_payroll") or die ("เชื่อมต่อฐานข้อมูลไม่ได้");
mysqli_query($connect, "SET NAMES UTF8");
*/
// แปลง Json เป็น PHP
$data = json_decode(file_get_contents("php://input"));

file_put_contents('log_notify.txt', 
    date('Y-m-d H:i:s')     . " / " .
    $data               . " / " . 
    $data['action']           . " / " . 
    $data['employee_name']    . " / " . 
    $data['employee_email']);

/*
if ($data["action"] == "insert") {

    $employee_name = $data["employee_name"];
    $employee_email = $data["employee_email"];

    // Insert order detail
    mysqli_query($connect, "INSERT INTO system_employee (
        employee_name,    
        employee_email
    )
    VALUES (
        '$employee_name', 
        '$employee_email'
    )") or die(mysqli_error($connect));

    echo "อัปเดตเรียบร้อย";
}
else {
    echo $data->action;
}
*/
?>