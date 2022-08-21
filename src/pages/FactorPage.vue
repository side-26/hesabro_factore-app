<template lang="">
  <div class="">
    <BasicTable />
  </div>
</template>

<script>
import { useMeta } from 'quasar'
import BasicTable from 'components/Factors/BasicTable.vue'
const metaData = {
  // sets document title
  title: 'صفحه فاکتور ها',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - سای
  ت تست`
},

export default {
    components: {
        BasicTable
    },
  setup (props) {
    useMeta(metaData)
  }
}
</script>
