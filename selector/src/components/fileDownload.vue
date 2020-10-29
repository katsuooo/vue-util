<template>
    <div>
        <h5>file-download</h5>
        <a
            :href="item.url"
            v-text="item.label"
            @click.prevent="downloadItem(item)" />
    </div>
</template>

<script>
import Axios from 'axios'
/**
 file download sample



 */
export default {
    methods: {
    downloadItem ({ url, label }) {
        Axios.get(url, { responseType: 'blob' }).then(response => {
            const blob = new Blob([response.data], { type: 'application/pdf' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = label
            link.click()
            URL.revokeObjectURL(link.href)
        }).catch(console.error)
    }
    }
}
</script>

<style>

</style>