<script>
import axios from 'axios';

export default {
    name: "Insert Employee",
    data () {
        return {
            employee: {
                employee_name: "John Doe",
                employee_email: "Example@gmail.com"
            }
        }
    },
    methods: {
        submitForm() {
            
            axios.post("http://localhost:8080/api/employee/", 
            {
                employee_name  : this.employee.employee_name,
                employee_email : this.employee.employee_email
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

        }
    }
}
</script>

<template>
    
    <title>Insert Employee</title>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Employee /</span> Insert Employee</h4>
        {{JSON.stringify(employee)}}
        <div class="row">
        <div class="col-md-12">
            <div class="card mb-4">
            <h5 class="card-header">Profile Details</h5>
            <!-- Account -->
            <hr class="my-0" />
            <div class="card-body">
                <form id="formAccountSettings" method="POST" @submit.prevent="submitForm">
                <div class="row">
                    <div class="mb-3 col-md-6">
                    <label for="employee_name" class="form-label">Name</label>
                    <input
                        class="form-control"
                        type="text"
                        id="employee_name"
                        name="employee_name"
                        placeholder="John Doe"
                        v-model.trim="employee.employee_name"
                        autofocus
                    />
                    </div>
                    <div class="mb-3 col-md-6">
                    <label for="employee_email" class="form-label">E-mail</label>
                    <input
                        class="form-control"
                        type="text"
                        id="employee_email"
                        name="employee_email"
                        placeholder="Example@email.com"
                        v-model="employee.employee_email"
                    />
                    </div>

                </div>
                <div class="mt-2">
                    <button type="submit" class="btn btn-primary me-2">Insert Employee</button>
                    <button type="reset" class="btn btn-outline-secondary">Cancel</button>
                </div>
                </form>
            </div>
            <!-- /Account -->
            </div>
        </div>
        </div>
    </div>

</template>