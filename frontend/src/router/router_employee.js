export default [
    {
        path: '/employee',
        name: 'employee',
        component: () => import('../components/employee/employee.vue')
    },
    {
        path: '/employee_insert',
        name: 'employee_insert',
        component: () => import('../components/employee/employee_insert.vue')
    },
    {
        path: '/employee_detail',
        name: 'employee_detail',
        component: () => import('../components/employee/employee_detail.vue')
    },
]