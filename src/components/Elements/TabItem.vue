<template>
  <div role="tabpanel" class="tab-pane active" v-show="show"
    :class="{hide: !show}"
    :transition="transition">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabItem',
    props: {
      header: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      active: function() {
        return this._parent && this._parent.show === this
      },
      index: function() {
        return this._parent && this._parent.tabs.indexOf(this)
      },
      show: function() {
        return this._parent && this._parent.show === this
      },
      transition: function() {
        return this._parent ? this._parent.effect : null
      }
    },
    created: function() {
      let parent = this.$parent

      if (!parent._tabset) {
        console.error(('Error: "tab" depend on "tabset" to work properly.'))
        return
      }

      parent.tabs.push(this)
      if (parent.tabs.length === 1) {
        parent.show = this
        this.show = true
      }
      this._parent = parent
    }
  }
</script>
