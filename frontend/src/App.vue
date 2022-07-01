<script>
import sidebar from './components/sidebar.vue'
import navbar from './components/header.vue'
import content from './components/content.vue'

export default {
  name: "Payroll_fontend",
  components: {
    sidebar, 
    navbar,
    content
  },
  data() {
    return {
        menu_togle_data : false
    }
  },
  methods: {

    toggle_function (data) {
      this.menu_togle_data = data
      console.log (this.menu_togle_data)
    }
    
  }
}
</script>

<template>
    <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <sidebar :menu_toggle="menu_togle_data"/>
      <div class="layout-page">
        <navbar @button_toggle="toggle_function"/>
          <div class="content-wrapper">
            <content/>
          </div>
      </div>
    </div>
    <div class="layout-overlay layout-menu-toggle"></div>
  </div>
</template>
