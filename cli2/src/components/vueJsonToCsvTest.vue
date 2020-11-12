<template>
    <div>
    <h5>vue-json-to-csv</h5>
<!--
  <download-csv
    :data   = "json_data">
    Download Data
    <img src="download_icon.png">
    </download-csv>
-->
    <downloadCsv
        class   = "btn btn-default"
        :data   = "json_data"
        name    = "filename.csv">
 
        Download CSV (This is a slot)
    
    </downloadCsv>
    </div>
</template>

<script>
import downloadCsv from 'vue-json-csv'
export default {
    components:{
        downloadCsv
    },
    data: () => ({     
        json_data: [
            {
                'name': 'Tony Peña',
                'city': 'New York',
                'country': 'United States',
                'birthdate': '1978-03-15',
                'phone': {
                    'mobile': '1-541-754-3010',
                    'landline': '(541) 754-3010'
                }
            },
            {
                'name': 'Thessaloniki',
                'city': 'Athens',
                'country': 'Greece',
                'birthdate': '1987-11-23',
                'phone': {
                    'mobile': '+1 855 275 5071',
                    'landline': '(2741) 2621-244'
                }
            }
        ]
    })
}
</script>

<style>

</style>