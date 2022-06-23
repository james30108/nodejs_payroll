<script setup>
import { ref, computed } from 'vue'
import home from './home.vue'
import employee from './employee/employee.vue'
import employee_insert from './employee/employee_insert.vue'

const routes = {
  '/': home,
  '/employee': employee,
  '/employee_insert': employee_insert,

}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
    <component :is="currentView" />
</template>