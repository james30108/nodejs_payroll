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
        }
    },
    methods: {
        get_parameter (page, size) {
            let params = {}
            if (page) {
                params["page"] = page
            }
            if (size) {
                params["size"] = size
            }
            return params
        },
        find_all () {
            const params = this.get_parameter (
                this.page,
                this.size
            )
            services_employee.getAll(params)
            .then((response) => {
                this.employee     = response.data.employee
                this.total_page   = response.data.total_page
                this.page_start   = response.data.page_start
                this.page_end     = response.data.page_end
                
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
    },
    mounted () {
        this.find_all ()
        this.$forceUpdate ()
    }
}
</script>

<template>
    <title>พนักงาน</title>
    {{ JSON.stringify(page_option) }}
    {{ JSON.stringify(page_start) }}
    {{ JSON.stringify(page_end) }}
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
                <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>
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