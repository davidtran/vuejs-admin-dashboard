<template src="./Statuses.html"></template>

<script>
  import StatusItem from '../StatusItem/StatusItem.vue'

  export default {
    name: 'Statuses',
    components: {
      StatusItem
    },
    data: function() {
      return {
        items: [
          {
            id: 1,
            name: 'MicroSD 64Gb',
            amount: 12,
            status: 'complete'
          },
          {
            id: 2,
            name: 'MiniPC i5',
            amount: 10,
            status: 'pending'
          },
          {
            id: 3,
            name: 'Mountain Bike',
            amount: 40,
            status: 'confirm_payment'
          },
          {
            id: 4,
            name: 'Notebook',
            amount: 1,
            status: 'cancelled'
          },
          {
            id: 5,
            name: 'Raspberry Pi2',
            amount: 6,
            status: 'shipped'
          },
          {
            id: 6,
            name: 'Flashdrive 128Mb',
            amount: 18,
            status: 'confirm_payment'
          }
        ]
      }
    }
  }
</script>