<script>
import services_employee from "../../services/setting_employee"

export default {
    name: "Employee",
    data () {
        return {
            employee : []
        }
    },
    methods: {
        find_all () {

            services_employee.getAll()
            .then((response) => {
                this.employee = response.data
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        },
        delete_one (employee_id) {
            
            services_employee.delete(employee_id)
            .then((response) => {
                this.find_all();
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            
        },
        detail (employee_id) {

            sessionStorage.setItem("employee_id", employee_id)
            sessionStorage.getItem("employee_id")
            this.$router.push("/employee_detail")

        },
    },
    mounted () {
        this.find_all()
        this.$forceUpdate()
    }
}
</script>

<template>
    <title>พนักงาน</title>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4">พนักงาน</h4>
        <router-link to="/employee_insert" class="btn btn-primary text-white mb-3">เพิ่มพนักงาน</router-link>
        <!-- Basic Bootstrap Table -->
        <div class="card">
        <h5 class="card-header">พนักงาน</h5>
        <div class="table-responsive text-nowrap">
            <table class="table mb-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ชื่อ</th>
                    <th>เบอร์โทร</th>
                    <th>ตำแหน่ง</th>
                    <th>จัดการ</th>
                </tr>
            </thead>
            <tbody class="table-border-bottom-0 ">

                <tr v-for="(item, index) in employee">
                    <td>{{index + 1}}</td>
                    <td><button @click="detail(item._id)" class="bg-transparent border-0 text-primary">{{ item.employee_name }}</button></td>
                    <td>{{ item.employee_tel }}</td>
                    <td>{{ item.employee_department }}</td>
                    <td>
                        <button @click="delete_one(item._id)" class="me-1 bg-transparent border-0"><i class="bx bx-trash me-1 font-22 text-primary"></i></button> 
                    </td>
                </tr>
            </tbody>
            </table>

            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-end">
                <li class="page-item prev">
                    <a class="page-link" href="javascript:void(0);"
                    ><i class="tf-icon bx bx-chevrons-left"></i
                    ></a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">2</a>
                </li>
                <li class="page-item active">
                    <a class="page-link" href="javascript:void(0);">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">4</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">5</a>
                </li>
                <li class="page-item next">
                    <a class="page-link" href="javascript:void(0);"
                    ><i class="tf-icon bx bx-chevrons-right"></i
                    ></a>
                </li>
                </ul>
            </nav>
        </div>
        </div>

    </div>
</template>