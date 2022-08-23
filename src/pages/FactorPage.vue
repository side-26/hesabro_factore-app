<template lang="">
  <div class="table_container q-mx-auto">
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
}
export default {
  components: {
    BasicTable
  },
  setup (props) {
    useMeta(metaData)
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 599.99px) {
}
@media screen and (min-width: 600px) {
  .table_container {
    width: 95%;
  }
}
@media screen and (max-width: 1023.99px) {
}
@media screen and (min-width: 1024px) {
  .table_container {
    width: 85%;
  }
}
@media screen and (max-width: 1440px) {
}
@media screen and (min-width: 1440px) {
  .table_container {
    width: 80%;
  }
}
@media screen and (min-width: 30000px) {
  .table_container {
    width: 60%;
  }
}
</style>
