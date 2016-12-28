<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<style src="./App.sass" lang="sass?indentedSyntax"></style>

<script>
require('font-awesome/css/font-awesome.css')
import Layout from './layout/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
