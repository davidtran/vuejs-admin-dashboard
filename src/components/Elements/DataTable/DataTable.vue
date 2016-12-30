<template src="./DataTable.html"></template>
<style src="./DataTable.sass" lang="sass?indentedSyntax"></style>
<script>
export default {
  props: ['dataTable'],

  data() {
    return {
      currentPage: 1,
      searchBy: '',
      rows: [],
      sort: {
        sortBy: '',
        desc: true
      }
    }
  },

  computed: {
    paginatedRows() {
      let rows = this.getPageRows(this.filteredRows, this.currentPage, this.dataTable.options.pageCount);
      return rows;
    },
    filteredRows() {
      return this.filterRows(this.dataTable.rows, this.dataTable.options, this.currentPage);
    },

    lastPage() {
      return Math.ceil(this.filteredRows.length / this.dataTable.options.pageCount);
    },

    centerPartPage() {
      if(this.lastPage > 10 && this.currentPage >= 5) {
        if(this.lastPage - this.currentPage > 5) {
          return this.currentPage === this.lastPage ? [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1] : [this.currentPage - 2, this.currentPage - 1, this.currentPage];
        }else {
          const r = [];

          for(let i = this.lastPage - 6; i < this.lastPage; i++) {
            r.push(i);
          }
          return r;
        }
      }else if(this.lastPage > 10) {
        const r = [];

        for(let i = 1; i < 5; i++) {
          r.push(i);
        }
        return r;
      }else {
        const r = [];

        for(let i = 1; i < this.lastPage; i++) {
          r.push(i);
        }
        return r;
      }
    },

    lastPartPage() {
      if(this.lastPage > 10 && this.lastPage - this.currentPage > 5) {
        return [this.lastPage - 1];
      }else {
        return [];
      }
    },

    firstRow() {
      return this.currentPage === 1 ? 0 : this.dataTable.options.pageCount * (this.currentPage - 1);
    },

    lastRow() {
      return this.dataTable.options.pageCount * this.currentPage > this.filteredRows.length ? this.filteredRows.length : this.dataTable.options.pageCount * this.currentPage;
    }
  },

  watch: {
    'dataTable.rows'(rows) {
      rows.forEach((row, index) => {
        for(let key in row) {
          const column = this.dataTable.columns.filter((column) => {
            return column.value === key;
          })[0];

          row[key] = Object.assign({
            editable: column.editable,
            editing: false,
            tmpValue: ''
          }, row[key]);
        }

        this.dataTable.rows[index] = row;
      });
    },

    'dataTable.columns'(columns) {
      columns.forEach((column, index) => {
        column = Object.assign({
          editable: false,
          sortable: false
        }, column);

        this.dataTable.columns[index] = column;
      })
    },

    'searchBy'(val) {
      console.log(val);
      if(val) {
        this.currentPage = 1;
      }
    }
  },

  methods: {
    paginatedRows(rows) {
      if (rows || !this.options) {
        return [];
      }
      return this.getPageRows(rows, this.currentPage, this.options.pageCount);
    },
    onChangePageCount() {
      this.currentPage = 1;
    },

    filterRows(rows, options, currentPage) {
      rows = this.sort.sortBy ? this.sortRows(rows, this.sort.sortBy) : rows;

      if(this.searchBy !== '') {
        rows = rows.filter((row) => {
          let r = false;

          for(let key in row) {
            if(row[key].value
              .toString()
              .toLowerCase()
              .indexOf(this.searchBy.toLowerCase()) !== -1) {
              r = true;
            }
          }

          return r;
        });
      }

      return rows;
    },

    getPageRows(rows) {
      return rows.slice(this.firstRow, this.lastRow);
    },

    togglePage(page) {
      switch(page) {
        case 'prev':
          if(this.currentPage <= 1) return ;
          this.currentPage--;
          break;
        case 'next':
          if (this.currentPage >= this.lastPage) return ;
          this.currentPage++;
          break;
        default:
          if(this.currentPage == page) return ;
          this.currentPage = page;
      }
      if(this.dataTable.onPageChanged) {
        this.dataTable.onPageChanged(this.currentPage);
      }
    },

    sortBy(column) {
      if(!column.sortable || !this.dataTable.options.sortable) return ;

      if(column.value === this.sort.sortBy) {
        this.sort.desc = !this.sort.desc;
      }else {
        this.sort.sortBy = column.value;
        this.sort.desc = true;
      }
    },

    editField(field, key) {
      if(!this.isEditable(field, key, true)) return ;

      field.tmpValue = field.value;
      field.editing = true;
    },

    saveEdit(field) {
      field.value = field.tmpValue;
      field.editing = false;
      field.tmpValue = '';
    },

    cancelEdit(field) {
      field.editing = false;
      field.tmpValue = '';
    },

    sortRows(rows, sortBy) {
      const arr = rows.slice(0);

      return arr.sort((a, b) => {
        const r = this.sort.desc ? a[sortBy].value < b[sortBy].value : a[sortBy].value > b[sortBy].value;

        return r ? 1 : -1;
      })
    },

    isSortable(column) {
      return column.sortable && this.dataTable.options.sortable;
    },

    isEditable(field, key, beforeEditing) {
      const column = this.dataTable.columns.filter((column) => {
        return column.value === key;
      })[0];
      if(beforeEditing) {
        return field.editable && this.dataTable.options.editable && column.editable;
      }else {
        return field.editable && this.dataTable.options.editable && field.editing && column.editable;
      }
    }
  }
}
</script>
