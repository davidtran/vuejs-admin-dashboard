<template src="./TopNav.html"></template>
<style src="./TopNav.sass" lang="sass?indentedSyntax"></style>

<script>
  export default {
    name: 'TopNav',
    computed: {
      title: function() {
        this.$route.name
      }
    }
  }
</script>