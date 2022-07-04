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
    Employee Detail



</template>