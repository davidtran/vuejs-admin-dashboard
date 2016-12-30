<template src="./Modal.html"></template>
<style src="./Modal.sass" lang="sass?indentedSyntax"></style>
<script>
  export default {
    name: 'Modal',
    props: {
      size: {
        type: String,
        default: 'small'
      },
      backdrop: {
        type: Boolean,
        default: true
      },
      effect: {
        type: String,
        default: null
      },
      okText: {
        type: String,
        default: 'Save changes'
      },
      closeText: {
        type: String,
        default: 'Close'
      },
      title: {
        type: String
      }
    },
    data: function() {
      return {
        isShowingModal: false,
        documentBody: document.getElementsByTagName('body')[0]
      }
    },
    computed: {
      modalClassName: function() {
        let classNames = [];
        if (this.backdrop) classNames.push('fade')
        if (this.isShowingModal) classNames.push('in')
        if (this.size === 'large') classNames.push('modal-lg')
        if (this.size === 'small') classNames.push('modal-sm')
        return classNames.join(' ')
      }
    },
    methods: {
      close: function () {
        this.hideModal()
        this.$emit('close')
      },
      ok: function() {
        this.hideModal()
        this.$emit('ok')
      },
      showModal: function() {
        let el = this.$el
        this.isShowingModal = true
        this.documentBody.classList.add('modal-open')
        el.style.display = 'block'
      },
      hideModal: function() {
        let el = this.$el
        this.isShowingModal = false
        this.documentBody.classList.remove('modal-open')
        el.style.display = 'none'
      }
    }
  }
</script>