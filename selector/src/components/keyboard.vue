<template>
    <div>
        <h4>key-on-test</h4>
        <!--
        <div v-on:keyup='keyOn(k)'></div>
        <input type="text" v-on:keyup="this.$data.name = $event.target.value">
        -->
        <div v-on:keyup='keyOn2($event.target.value)'></div>
        <div id="appx" v-cloak @keyup.enter="test('div enter', $event)" @keyup="test('div',$event)">
            <input @keyup="test('input', $event)"><br/>
                enter only: <input @keyup.enter="test('second input', $event)">
        </div>
    </div>
</template>

<script>
/**
 * keyboard test
 * 
 * https://www.raymondcamden.com/2019/08/12/working-with-the-keyboard-in-your-vue-app
 * 
 * 
 */
export default {
    mounted() {
        window.addEventListener("keypress", e => {
            console.log(String.fromCharCode(e.keyCode));
        });
    },
    /*
    created() {
        window.addEventListener('keypress', this.doCommand);
    },
    destroyed() {
        window.removeEventListener('keypress', this.doCommand);
    },
    */
    methods:{
        /*
        doCommand(e) {
            let cmd = String.fromCharCode(e.keyCode).toLowerCase();
            // do stuff
            console.log(cmd)
        },
        */
        keyOn(k){
            console.log('key', k)
        },
        keyOn2(k){
            console.log('key2', k)
        },
        test(where, e) {
            console.log(`keyuptest at ${where} with code ${e.keyCode}`);
        }
    }
}
</script>

<style>

</style>