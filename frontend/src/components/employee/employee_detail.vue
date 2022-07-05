<script>
import services_employee from "../../services/setting_employee";

export default {
    name: "Employee's Detail",
    data () {
        return {
            id : sessionStorage.getItem("employee_id"), // session
            employee : []
        }
    },
    mounted () {
        services_employee.get(this.id)
        .then((response) => {
            this.employee = response.data
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
</script>

<template>
    {{ JSON.stringify(employee) }}
    
    <title>แก้ไขข้อมูลพนักงาน</title>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">พนักงาน /</span> แก้ไขข้อมูลพนักงาน</h4>

        <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
            <h5 class="card-header">ข้อมูลส่วนตัว</h5>

            <!-- Account -->
            <form id="formsubmit" @submit.prevent="onSubmit">
            <div class="card-body">
                <div class="d-flex align-items-start align-items-sm-center gap-4">
                
                    <img
                    src="../../assets/img/avatars/1.png"
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
                            name="employee_image"
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
                        type="number"
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
                        v-model.trim="employee.employee_department"
                        name="employee_department"
                    >
                        <option value="">เลือกตำแหน่งงาน</option>
                        <option value="en">โปรแกรมเมอร์</option>
                        <option value="fr">บัญชี</option>
                        <option value="de">ธุรการ</option>
                    </select>
                    </div>
                    <div class="mb-3 col-md-12">
                    <label for="employee_adress" class="form-label">ที่อยู่</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="employee_adress" 
                        placeholder="employee_adress" 
                        v-model.trim="employee.employee_adress"
                        name="employee_adress"
                        />
                    </div>
                </div>
                <div class="mt-2">
                    <button type="submit" class="btn btn-primary me-2" @click="submitForm">บันทึกการเปลี่ยนแปลง</button>
                    <button type="reset" class="btn btn-outline-secondary">ยกเลิก</button>
                </div>
                
            </div>
            </form>
            <!-- /Account -->
            </div>
            <div class="card">
                <h5 class="card-header">Delete Account</h5>
                <div class="card-body">
                    <div class="mb-3 col-12 mb-0">
                    <div class="alert alert-warning">
                        <h6 class="alert-heading fw-bold mb-1">Are you sure you want to delete your account?</h6>
                        <p class="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                    </div>
                    </div>
                    <form id="formAccountDeactivation" onsubmit="return false">
                    <div class="form-check mb-3">
                        <input
                        class="form-check-input"
                        type="checkbox"
                        name="accountActivation"
                        id="accountActivation"
                        />
                        <label class="form-check-label" for="accountActivation"
                        >I confirm my account deactivation</label
                        >
                    </div>
                    <button type="submit" class="btn btn-danger deactivate-account">Deactivate Account</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>



</template>