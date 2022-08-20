<!-- eslint-disable vue/no-export-in-script-setup -->
<template lang="">
  <div class="">
    <BasicTable />
  </div>
</template>
<script>
import BasicTable from 'components/BasicTable.vue'
import { useMeta } from 'quasar'

const metaData = {
  // sets document title
  title: 'صفحه لاگین',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - سایت تست`

}

export default {
  components: { BasicTable },
  setup (props) {
    useMeta(metaData)
  }
}
</script>
