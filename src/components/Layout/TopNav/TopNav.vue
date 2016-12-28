<template src="./TopNav.html"></template>
<style src="./TopNav.sass" lang="sass?indentedSyntax"></style>

<script>
  export default {
    name: 'TopNav',
    computed: {
      title: function() {
        console.log(this.$route.path)
        switch (this.$route.path) {
          case '/dashboard':
            return 'Dashboard'
          case '/messaging':
            return 'Messaging'
          default:
            return 'Admin'
        }
      }
    }
  }
</script>