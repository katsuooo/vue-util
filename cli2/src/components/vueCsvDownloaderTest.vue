<template>
    <div>
        <h5>vue-csv-downloader</h5>
    <vue-csv-downloader
        :data="data"
        :fields="fields"
    >
    </vue-csv-downloader>
    </div>
</template>

<script>
import VueCsvDownloader from 'vue-csv-downloader';

export default {
    components: {
        VueCsvDownloader,
    },
    data() {
        return {
            data: [
                {id: 1, fruit: 'Apple', price: 4.50, unit: 'lb'},
                {id: 2, fruit: 'Blueberry', price: 3.00, unit: 'lb'},
                {id: 3, fruit: 'Pineapple', price: 5.15, unit: 'each'},
            ],
            fields: ['fruit', 'price', 'unit'],
        };
    },
};
</script>

<style>

</style>