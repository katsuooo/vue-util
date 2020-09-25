<template>
<div class="columns">
  <div class="left-column" id="context">
  <p>Some text</p>
  </div>
  <div class="right-column" id="info-box">
    <img />
    <ul>
      <li>some list</li>
      <li>41</li>
    </ul>
    {{height}}
  </div>
</div>
</template>

<script>
export default {
    data: () => ({
        height:Number
    }),
    mounted () {
        this.matchHeight()
    },
    methods:{
        matchHeight () {
            this.height = document.getElementById('info-box').clientHeight
        }
    }

}
</script>

<style>

</style>