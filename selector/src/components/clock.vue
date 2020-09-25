<template>
        <vue-clock-picker
            mode="24" :defaultHour="defaultHour"
            :defaultMinute="defaultMinute"
            :onTimeChange="timeChangeHandler"
        >
        </vue-clock-picker>
</template>

<script>
import VueClockPicker from 'vue-clock-picker'

export default {
    components:{
        VueClockPicker
    },
    data: () => ({
        defaultHour:8,
        defaultMinute:0,

    }),
    methods:{
        timeChangeHandler:() => {

        }
        
    }
}
</script>

<style>

</style>