<template>
    <div>
        <h5>vue-select-option</h5>
        <select v-model="city">
            <option v-for="(c, index) in province.Cities" :key="index">{{ c.name }}</option>
        </select>
    </div>
</template>

<script>
/**
 select/optionをjsonで記述し、v-forでかく


 */
var x = {
  Provinces: [
  {
    "Province": "Foo",
    "Cities": [
      {
        "name": "Fooland"
      },
      {
        "name": "Fooville"
      }]
  },

  {"Province": "Bar",
    "Cities": [
      {
        "name": "Barland"
      },
      {
        "name": "Barville"
      },
      {
        "name": "Barak"
      }
    ]
  } 
 ]
}

/**

 */
export default {
    data: () => ({
        city: '',
        province: {}
    }),
    beforeMount(){
        //this.province = x.Provinces[0]
        this.province = x.Provinces[1]
    }
}
</script>

<style>

</style>