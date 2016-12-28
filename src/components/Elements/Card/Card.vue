<template src="./Card.html"></template>
<style src="./Card.sass" lang="sass?indentedSyntax"></style>
<script>
  import Vue from 'vue'
  export default {
    name: 'Card',
    props: [
      'title',
      'bodyClass',
      'noHeader',
      'additionClassName'
    ]
  }
</script>