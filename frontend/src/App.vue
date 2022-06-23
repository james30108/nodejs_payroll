<script setup>
import sidebar from './components/sidebar.vue'
import navbar from './components/header.vue'
import content from './components/content.vue'
</script>

<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <sidebar/>
      <div class="layout-page">
        <navbar/>
        <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->
            <content/>
          </div>
      </div>
    </div>
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
  </div>
</template>

<style>

</style>
