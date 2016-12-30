<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
  import $ from 'jquery'
  import 'select2'

  export default {
    name: 'select2',
    props: {
      options: {
        type: Object,
        default: function() {
          return {}
        }
      },
      value: {
        type: null
      }
    },
    mounted: function() {
      let vm = this
      $(this.$el)
        .val(this.value)
        .select2({data: this.options})
        .on('change', function() {
          vm.$emit('input', this.value)
        })
    },
    watch: {
      value: function(value) {
        $(this.$el).select2('val', value)
      },
      options: function(options) {
        $(this.$el).select2({data: options})
      }
    },
    destroyed: function() {
      $(this.$el).off().select2('destroy')
    }
  }

</script>