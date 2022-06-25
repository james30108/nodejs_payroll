<script>
import axios from 'axios';

export default {
    name: "Employee",
    data () {
        return {
            employee : []
        }
    },
    methods: {
        find_all () {
            axios.get("http://localhost:8080/api/employee/")
            .then((response) => {
                this.employee = response.data
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        delete_one (employee_id) {
            
            axios.delete("http://localhost:8080/api/employee/" + employee_id)
            .then((response) => {
                this.find_all();
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            
        }
    },
    mounted () {
        this.find_all();
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
            <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>รหัสประจำตัว</th>
                    <th>ชื่อ</th>
                    <th>จัดการ</th>
                </tr>
            </thead>
            <tbody class="table-border-bottom-0">

                <tr v-for="(item, index) in employee">
                    <td></td>
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>
                        <button class="me-1 bg-transparent border-0"><i class="bx bx-edit me-1 font-22 text-primary"></i></button>
                        <button @click="delete_one(item._id)" class="me-1 bg-transparent border-0"><i class="bx bx-trash me-1 font-22 text-primary"></i></button> 
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

    </div>
</template>