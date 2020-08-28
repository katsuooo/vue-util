<template>
    <div>
        <vSelect :options="['aaa','bbb','ccc']" v-model="selected" @input='setSelected(selected)' />
    </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
    components:{
        vSelect
    },
    data: () => ({
        selected: ''
    }),
    methods:{
        setSelected: (selectedx) => {
            console.log(selectedx)
            console.log('test')
        }
    }
}
</script>

<style>
@import '@/../../../node_modules/vue-select/dist/vue-select.css';

</style>