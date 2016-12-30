<template>
  <div role="tabPanel">
    <ul class="nav nav-tabs" role="tablist" :class="tabStyle">
      <li role="presentation"
          v-for="tab in tabs"
          :class="{active: tab === show, disabled: tab.disabled}"
          v-on:click.prevent="select(tab)">
        <a role="tab">{{ tab.header }}</a>
      </li>
    </ul>

    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabSet',
    props: {
      tabStyle: {
        type: String,
        default: 'tabs'
      },
      active: {
        type: Number,
        default: 0
      }
    },
    data: function() {
      return {
        show: null,
        tabs: [],
        _tabset: true
      }
    },
    created: function() {
      this._tabset = true
    },
    methods: {
      select: function(tab) {
        if (!tab.disabled) {
          this.show = tab
          this.$emit('select.tab.index', tab.index)
        }
      }
    }
  }
</script>