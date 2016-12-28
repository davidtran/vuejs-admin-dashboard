<!-- HTML -->
<template>
  <div class="app app-default">
    <side-menu></side-menu>


    <div class="app-container">
      <top-nav></top-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<style src="./Layout.sass" lang="sass?indentedSyntax"></style>

<script>
  import SideMenu from './SideMenu/SideMenu.vue'
  import TopNav from './TopNav/TopNav.vue'

  export default {
    name: 'Layout',
    components: {
      SideMenu,
      TopNav
    }
  }
</script>