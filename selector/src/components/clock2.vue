<template>
    <div>
        <vue-clock-picker
            v-model="anotherValue"
            required
            label="time 1"
            id="clock-picker-1"
            disabled-from="19:00"
            disabled-to="08:00"
            done-text="決定" cancel-text="キャンセル"
        >
        </vue-clock-picker>
        <vue-clock-picker v-model="value" label="time 2" id="clock-picker-2"></vue-clock-picker>
    </div>
</template>

<script>
/**
 * tagはinput + labelになる。
 * 
 * 
 * 
 * 
 */
import VueClockPicker from '@pencilpix/vue2-clock-picker';
import '@pencilpix/vue2-clock-picker/dist/vue2-clock-picker.min.css';

export default {
    components:{
        VueClockPicker
    },
    data: () => ({
        clockTime: '',
        value: '00:00',
        anotherValue: ''
    }),
    methods:{
        timeset: (value) => {
            console.log('timeset:',value)
        }
    }
}
</script>

<style>

</style>