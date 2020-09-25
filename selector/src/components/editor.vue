<template>
    <div>
        <VueEditor v-model="content"/>
        <p>{{content}}</p>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
    components: { VueEditor },
    data: () => ({
        content: "<h1>some big sentence</h1>"
    })
}
</script>

<style>

</style>