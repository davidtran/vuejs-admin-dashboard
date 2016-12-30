<template>
  <div class="card">
    <div class="card-header">
      Modal
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-12">
          <div>
            <button type="button" class="btn btn-primary" v-on:click.prevent="showModal()">
            Demo modal
            </button>
          </div>
          <modal title="Custom Modal Title" ref="modal" size="large" @close="onModalClose" @ok="onModalOk">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl</p>
          </modal>

          <div class="simplio-example __modal">
            <div class="modal in">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title">Modal title</h4>
                  </div>
                  <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-sm btn-success">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalSection',
    data: function() {
      return {
        isShowingModal: false
      }
    },
    methods: {
      showModal: function() {
        this.$refs.modal.showModal()
      },
      onModalClose: function() {
        alert('Close button clicked')
      },
      onModalOk: function() {
        alert('Ok button clicked')
      }
    }
  }
</script>