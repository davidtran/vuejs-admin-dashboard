<template>
  <div class="row">
    <div class="col-xs-12">
      <simple-table></simple-table>
    </div>
    <div class="col-xs-12">
      <data-table-section></data-table-section>
    </div>
  </div>
</template>

<script>
  import SimpleTable from './SimpleTable.vue'
  import DataTableSection from './DataTableSection.vue'

  export default {
    name: 'Table',
    components: {
      SimpleTable,
      DataTableSection
    }
  }
</script>