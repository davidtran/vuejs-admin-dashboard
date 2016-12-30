<template src="./Pagination.html"></template>
<script>
  export default {
    name: 'Pagination',
    props: [
      'totalItems',
      'currentPage',
      'maxSize',
      'itemPerPage'
    ],
    methods: {
      changePage: function(pageNumber) {
        this.$emit('changePage', pageNumber)
        this.updatePagination()
      },
      updatePagination: function() {

      }
    }
  }
</script>