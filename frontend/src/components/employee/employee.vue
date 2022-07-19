<script>
import services_employee from "../../services/setting_employee"

export default {
    name: "Employee",
    data () {
        return {
            employee        : [],
            page            : 1, // หมายเลขหน้า
            page_start      : 1, 
            page_end        : null, 
            size            : 3, // จำนวนข้อมูลเริ่มต้น
            size_option     : [3, 6, 9], // จำนวนข้อมูลที่สามารถเลือกแสดง
            page_option     : [],
            employee_name   : null,
            employee_department : null,
            employee_tel    : null,
        }
    },
    methods: {
        get_parameter (page, size, employee_name, employee_department, employee_tel) {
            let params = {
                page                : page,
                size                : size,
                employee_name       : employee_name,
                employee_department : employee_department,
                employee_tel        : employee_tel,
            }
            return params
        },
        find_all () {

            const params = this.get_parameter (
                this.page,
                this.size,
                this.employee_name,
                this.employee_department,
                this.employee_tel
            )
            services_employee.getAll(params)
            .then((response) => {
                this.employee     = response.data.employee
                this.total_page   = response.data.total_page
                this.page_start   = response.data.page_start
                this.page_end     = response.data.page_end
                this.page         = parseInt(response.data.page)
                
                this.page_option  = []
                for (let i = this.page_start; i <= this.page_end ; i++) {
                    this.page_option.push(i)
                }
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
        },
        delete_one (employee_id) {
            
            services_employee.delete(employee_id)
            .then((response) => {
                this.find_all()
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            
        },
        detail (employee_id) {

            sessionStorage.setItem("employee_id", employee_id)
            sessionStorage.getItem("employee_id")
            this.$router.push("/employee_detail")

        },
        size_change (event) {
            this.size = event.target.value
            this.page = 1
            this.find_all ()
        },
        page_change (value) {
            this.page = value
            this.find_all ()
        },
        reset () {
            this.$router.go(0)
        },
    },
    mounted () {
        this.find_all ()
        this.$forceUpdate ()
    }
}
</script>

<template>
    <title>พนักงาน</title>
    {{ JSON.stringify(page) }}
    {{ JSON.stringify(total_page) }}
    {{ JSON.stringify(employee_tel) }}
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4">พนักงาน</h4>
        <div class="d-flex">
            <router-link to="/employee_insert" class="btn btn-success text-white mb-3 mx-1">เพิ่มพนักงาน</router-link>
        
        <!-- Button trigger modal -->
        <button
            type="button"
            class="btn btn-outline-primary mb-3 mx-1"
            data-bs-toggle="modal"
            data-bs-target="#basicModal"
        >
            ค้นหา
        </button>
        <button type="button" class="btn btn-outline-secondary mb-3 mx-1" @click="reset">คืนค่า</button>

        <!-- Modal -->
        <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
            <form id="formsubmit" @submit.prevent="onSubmit">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1">ค้นหาพนักงาน</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>
                <div class="modal-body">
                <div class="row">
                    <div class="col mb-3">
                    <label for="name" class="form-label">ชื่อ</label>
                    <input type="text" id="nameBasic" class="form-control" placeholder="Enter Name" name="employee_name" v-model.trim="employee_name"/>
                    </div>
                </div>
                <div class="row g-2">
                    <div class="col mb-0">
                    <label for="emailBasic" class="form-label">ตำแหน่ง</label>
                    <input type="text" id="emailBasic" class="form-control" placeholder="xxxx@xxx.xx" v-model.trim="employee_department"/>
                    </div>
                    <div class="col mb-0">
                    <label for="dobBasic" class="form-label">เบอร์โทร</label>
                    <input type="text" id="dobBasic" class="form-control" placeholder="XXX-XXXX-XXX" v-model.trim="employee_tel"/>
                    </div>
                </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    Close
                </button>
                <button type="button" class="btn btn-primary" @click="find_all">ค้นหา</button>
                </div>
            </form>
            </div>
            </div>
        </div>
        </div>
        
        
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
                    <td>{{ index + 1 }}</td>
                    <td><button @click="detail(item._id)" class="bg-transparent border-0 text-primary">{{ item.employee_name }}</button></td>
                    <td>{{ item.employee_tel }}</td>
                    <td>{{ item.employee_department }}</td>
                    <td>
                        <button @click="delete_one(item._id)" class="me-1 bg-transparent border-0"><i class="bx bx-trash me-1 font-22 text-primary"></i></button> 
                    </td>
                </tr>
            </tbody>
            </table>
            <div class="d-flex">
            <div class="mb-3 col-md-2 mx-3">
            <select 
                class="form-select" 
                v-model="size" 
                @change="size_change($event)"
            >
                <option v-for="size in size_option" :key="size" :value="size">{{ size }}</option>
            </select>
            </div>
            <div class="mb-3 col-md-6 ms-auto mx-3">
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-end">
                    <li class="page-item prev" @click="page_change (1)" >
                        <a class="page-link" href="javascript:void(0);"
                        ><i class="tf-icon bx bx-chevrons-left"></i
                        ></a>
                    </li>
                    <li class="page-item"
                        v-for="number in page_option"
                        :class="{active: number === page}"
                        @click="page_change (number)"
                    >
                        <a class="page-link" href="javascript:void(0);">{{ number }}</a>
                    </li>
                    <li class="page-item next" @click="page_change (total_page)">
                        <a class="page-link" href="javascript:void(0);"
                        ><i class="tf-icon bx bx-chevrons-right"></i
                        ></a>
                    </li>
                    </ul>
                </nav>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>