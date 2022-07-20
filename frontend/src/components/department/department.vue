<script>
import services_department from "../../services/setting_department";

export default {
    name: "Department",
    data () {
        return {
            button              : "บันทึก",
            department          : [],
            upline_option       : ["", "none"],
            department_option   : {
                department_name   : null,
                department_upline : null,
                department_salary : "",
            },
        }
    },
    methods: {
        save () {

            services_department.create(this.department_option)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })  

            this.department_option = {
                department_name: "",
                department_upline: "",
                department_salary: ""
            }; 
            this.$forceUpdate()
        },
        find_all () {

            services_employee.getAll()
            .then((response) => {
                this.department   = response.data.department
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
    }
}

</script>

<template>
    <title>ตำแหน่งงาน</title>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4">ตำแหน่งงาน</h4>
        <div class="d-flex">
            <button type="button" class="btn btn-outline-primary mb-3 mx-1">ผังองค์กร</button>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <form id="formsubmit" @submit.prevent="save">
                <div class="row">
                    <div class="mb-3 col-md-4">
                        <label for="department_name" class="form-label">ตำแหน่ง</label>
                        <input
                            class="form-control"
                            type="text"
                            id="department_name"
                            placeholder="ระบุตำแหน่ง"
                            name="department_name"
                            v-model.trim="department_option.department_name"
                            autofocus
                        />
                        </div>
                        <div class="mb-3 col-md-4">
                        <label for="department_upline" class="form-label">สายงาน</label>
                        <select 
                            id="department_upline" 
                            class="select2 form-select" 
                            name="department_upline"
                            v-model="department_option.department_upline"
                            required
                        >
                            <option :value="upline_option[0]">เลือกสายงาน</option>
                            <option :value="upline_option[1]">ตำแหน่งสูงสุด</option>
                            <option :value="upline_option[2]">โปรแกรมเมอร์</option>
                        </select>
                        </div>
                        <div class="mb-3 col-md-4">
                        <label class="form-label" for="department_salary">เงินเดือน</label>
                        <input
                            type="number"
                            id="department_salary"
                            class="form-control"
                            name="department_salary"
                            placeholder="เงินเดือนประจำตำแหน่ง"
                            v-model.trim="department_option.department_salary"
                            />
                        </div>
                        <div class="mb-3 col-md-6">

                    </div>
                    <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2">{{ button }}</button>
                        <button type="reset" class="btn btn-outline-secondary" >ยกเลิก</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        
        <!-- Basic Bootstrap Table -->
        <div class="card">
        <h5 class="card-header">ตำแหน่ง</h5>
        
        <div class="table-responsive text-nowrap">
            <table class="table mb-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ลำดับชั้น</th>
                    <th>ตำแหน่งงาน</th>
                    <th>เงินเดือน</th>
                    <th>จัดการ</th>
                </tr>
            </thead>
            <tbody class="table-border-bottom-0 ">


            </tbody>
            </table>

        </div>
        </div>
    </div>
</template>