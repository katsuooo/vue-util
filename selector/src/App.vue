<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <selector />
        <clock />
        <clock2 />
        <height />
        <qrcode />
        <editor />
        <keyboard />
        <autoKana />
        <FocusLock>
          You can not leave this form
          <!--<button @click="onClick" />-->
          <input type='text'>
        </FocusLock>
        <hr />
        <h5>vue-qrcode</h5>
        <vue-qrcode value="Hello, World!" :options="{ width: 200 }"></vue-qrcode>
        <vue-qrcode value="Hello, World!" :options="{ width: 200 }"></vue-qrcode>
        <fileDownload />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import selector from './components/selector.vue'
import clock from './components/clock.vue'
import clock2 from './components/clock2.vue'
import height from './components/height.vue'
import qrcode from './components/qrcode.vue'
import editor from './components/editor.vue'
import keyboard from './components/keyboard.vue'
import autoKana from './components/autoKana.vue'
import FocusLock from 'vue-focus-lock'
import VueQrcode from 'vue-qrcode'
import fileDownload from './components/fileDownload.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    selector,
    clock,
    clock2,
    height,
    qrcode,
    editor,
    keyboard,
    autoKana,
    FocusLock,
    VueQrcode,
    fileDownload
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
