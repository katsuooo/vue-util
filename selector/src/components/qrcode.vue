<template>
  <qrcode-stream @decode="onDecode"></qrcode-stream>
</template>

<script>
//import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  components: {
    QrcodeStream,
    //QrcodeDropZone,
    //QrcodeCapture
  },
  methods: {
    /*
    onDecode (decodedString) {
      var currentVueInstance = this
      $.ajax({
        success: function () {
          currentVueInstance.decodedContent = "Welcome student."
        }
      })
    }*/
    onDecode (content) {
      /*
      $.ajax({
        success: () => {
          this.decodedContent = "Welcome student."
        }
      })
      */
      console.log(content)
    }
  }
}
</script>

<style>

</style>