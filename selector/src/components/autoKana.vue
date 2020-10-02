<template>
  <div class="hello">
      <h4>history-kana

          
      </h4>
    漢字：<input type="text" v-model="name" v-on:input="update_furigana">
    ふりがな：<input type="text" v-model="furigana">
  </div>
</template>

<script>
/**
 * yarn add historykana --save
 * 
 * 
 * 
 */
import historykana from 'historykana'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      furigana: '',
      history: []
    }
  },
  methods: {
    update_furigana (input) {
      this.history.push(input.target.value)
      this.furigana = historykana(this.history)
    }
  }
}
</script>