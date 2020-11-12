<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <vueCsvDownloaderTest />
    <vueJsonToCsvTest />
    <vueSelectOption />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import jsoncsv from 'vue-json-csv' 
import vueCsvDownloaderTest from './components/vueCsvDownloaderTest.vue'
import vueJsonToCsvTest from './components/vueJsonToCsvTest.vue'
import vueSelectOption from './components/vueSelectOption.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    vueCsvDownloaderTest,
    vueJsonToCsvTest,
    vueSelectOption
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
