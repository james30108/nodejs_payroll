<script>
import services_employee from "../../services/setting_employee";

export default {
    name: "Employee's Detail",
    data () {
        return {
            id                  : sessionStorage.getItem("employee_id"), // session
            employee            : [],
            employee_image      : "",
            isButtonDisabled    : true,
            
        }
    },
    methods: {
        delete_one (employee_id) {
            
            services_employee.delete(employee_id)
            .then((response) => {
                this.$router.push("/employee")
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            
        },
        submitForm_update() {
            
            const form_submit = document.getElementById("form_employee_update")
            const data = new FormData(form_submit)

            services_employee.update(this.id, data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            
            this.$forceUpdate()
            this.$router.push('/employee')
            
        },
        confirm () {
            this.isButtonDisabled = !this.isButtonDisabled
        },
        cancelForm(){
            this.$router.push("/employee")
        }
    },
    mounted () {
        services_employee.get(this.id)
        .then((response) => {
            this.employee = response.data.data
            this.employee_image = response.data.image != "" ? "http://" + response.data.image : "../../assets/img/avatars/1.png"

            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
</script>

<template>
    
    <title>แก้ไขข้อมูลพนักงาน</title>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">พนักงาน /</span> แก้ไขข้อมูลพนักงาน</h4>
        <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
                <h5 class="card-header">ข้อมูลส่วนตัว</h5>

                <!-- Account -->
                <form id="form_employee_update" @submit.prevent="onSubmit">
                <input type="hidden" name="employee_image" v-model.trim="employee.employee_image">
                <div class="card-body">
                    <div class="d-flex align-items-start align-items-sm-center gap-4">
                    
                        <img
                        :src="this.employee_image"
                        alt="user-avatar"
                        class="d-block rounded"
                        height="100"
                        width="100"
                        id="uploadedAvatar"
                        />
                        
                        <div class="button-wrapper">
                            <label for="file" class="btn btn-primary me-2 mb-4" tabindex="0">
                            <span class="d-none d-sm-block">อัปโหลดรูป</span>
                            <i class="bx bx-upload d-block d-sm-none"></i>
                            <input
                                type="file"
                                id="file"
                                class="account-file-input"
                                hidden
                                accept="image/png, image/jpeg"
                                ref="file" 
                                name="employee_image_new"
                                @change="uploadfile()"
                            />
                            </label>
                            <button type="button" class="btn btn-outline-secondary account-image-reset mb-4">
                            <i class="bx bx-reset d-block d-sm-none"></i>
                            <span class="d-none d-sm-block">รีเซ็ต</span>
                            </button>
                            <p class="text-muted mb-0">เฉพาะ JPG, GIF หรือ PNG. ขนาดสูงสุด 800K</p>
                        </div>
                        
                    </div>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                    
                    <div class="row">
                        <div class="mb-3 col-md-6">
                        <label for="employee_name" class="form-label">ชื่อ</label>
                        <input
                            class="form-control"
                            type="text"
                            id="employee_name"
                            placeholder="John Doe"
                            name="employee_name"
                            v-model.trim="employee.employee_name"
                            autofocus
                        />
                        </div>
                        <div class="mb-3 col-md-6">
                        <label for="employee_email" class="form-label">อีเมล</label>
                        <input
                            class="form-control"
                            type="text"
                            id="employee_email"
                            placeholder="Example@email.com"
                            name="employee_email"
                            v-model="employee.employee_email"
                        />
                        </div>
                        <div class="mb-3 col-md-6">
                        <label class="form-label" for="employee_tel">เบอร์โทรศัพท์</label>
                        <input
                            type="text"
                            id="employee_tel"
                            class="form-control"
                            v-model.trim="employee.employee_tel"
                            name="employee_tel"
                            placeholder="0995669878"
                            />
                        </div>
                        <div class="mb-3 col-md-6">
                        <label for="employee_department" class="form-label">ตำแหน่งงาน</label>
                        <select 
                            id="employee_department" 
                            class="select2 form-select" 
                            v-model="employee.employee_department"
                            name="employee_department"
                        >
                            <option value="">เลือกตำแหน่งงาน</option>
                            <option value="en">โปรแกรมเมอร์</option>
                            <option value="fr">บัญชี</option>
                            <option value="de">ธุรการ</option>
                        </select>
                        </div>
                        <div class="mb-3 col-md-12">
                        <label for="employee_address" class="form-label">ที่อยู่</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="employee_address" 
                            placeholder="employee_address" 
                            v-model.trim="employee.employee_address"
                            name="employee_address"
                            />
                        </div>
                    </div>
                    <div class="mt-2">
                        <button type="submit" class="btn btn-primary me-2" @click="submitForm_update">บันทึกการเปลี่ยนแปลง</button>
                        <button class="btn btn-outline-secondary" @click="cancelForm">ยกเลิก</button>
                    </div>
                    
                </div>
                </form>
                <!-- /Account -->
            </div>

            <div class="card">
                <h5 class="card-header">ลบข้อมูลพนักงานท่านนี้</h5>
                <div class="card-body">
                    <div class="mb-3 col-12 mb-0">
                    <div class="alert alert-warning">
                        <h6 class="alert-heading fw-bold mb-1">ยืนยันว่าต้องการจะลบข้อมูลพนักงานท่านนี้ ?</h6>
                        <p class="mb-0">หากท่านทำการลบข้อมูลไปแล้ว จะไม่สามารถกูเคืนข้อมูลขึ้นมาใหม่ได้อีกครั้ง</p>
                    </div>
                    </div>
                    
                    <div class="form-check mb-3">
                        <input
                        class="form-check-input"
                        type="checkbox"
                        name="accountActivation"
                        id="accountActivation"
                        @click="confirm()"
                        />
                        <label class="form-check-label" for="accountActivation">ฉันยืนยันว่าจะทำการลบข้อมูล</label>
                    </div>
                    <button @click="delete_one(employee._id)" class="btn btn-danger deactivate-account" :disabled="isButtonDisabled">ลบข้อมูล</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    
</template>