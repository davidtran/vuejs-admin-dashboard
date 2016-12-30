<template src="./Card.html"></template>

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