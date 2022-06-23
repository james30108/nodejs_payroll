<template>
    <title>พนักงาน</title>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4">พนักงาน</h4>
        <a href="#/employee_insert" class="btn btn-primary text-white mb-3">เพิ่มพนักงาน</a>
        <!-- Basic Bootstrap Table -->
        <div class="card">
        <h5 class="card-header">พนักงาน</h5>
        <div class="table-responsive text-nowrap">
            <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>รหัสประจำตัว</th>
                    <th>ชื่อ</th>
                    <th>ตำแหน่ง</th>
                    <th>เงินเดือน</th>
                    <th>จัดการ</th>
                </tr>
            </thead>
            <tbody class="table-border-bottom-0">

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>

                        <form action="/product_type_edit" method="post">
                            <input type="hidden" name="product_type_id" value="<%= item._id %>">
                            <button class="me-1 bg-transparent border-0"><i class="bx bx-edit me-1 font-22 text-primary"></i></button>
                            <a href="/product_type_delete/<%= item._id %>" onclick="javascript:return confirm('Delete');"><i class="bx bx-trash me-1 font-22 text-primary"></i></a>
                        </form>
                
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

    </div>
</template>