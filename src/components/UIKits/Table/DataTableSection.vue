<template>
  <div class="card">
    <div class="card-header">
      Datatable
    </div>
    <div class="card-body no-padding">
      <data-table :data-table="tableData"></data-table>
    </div>
  </div>

</template>
<script>
  import data from './data'

  export default {
    name: 'DataTableSection',
    data: function() {
      return {
        tableData: {
          options: {
            sortable: true,
            editable: false,
            pageCount: 10,
            onPageChanged(page) {
              console.log(page)
            }
          },
          columns: generateColumns(data),
          rows: generateRows(data)
        }
      }
    }
  }

  function generateColumns(data) {
    let headers = []
    data.headers.forEach(header => {
      headers.push({
        value: header,
        text: header.toUpperCase(),
        sortable: true,
        editable: false
      })
    })
    return headers
  }

  function generateRows(data) {
    let rows = []

    data.data.forEach(item => {
      let row = {}
      for (let key in item) {
        row[key] = {
          value: item[key],
          editable: false
        }
      }
      rows.push(row)
    })
    return rows
  }

</script>