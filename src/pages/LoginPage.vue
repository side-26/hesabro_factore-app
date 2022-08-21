<!-- eslint-disable vue/no-export-in-script-setup -->
<template lang="">
  <div class="">
    login page
  </div>
</template>
<script>
import { useMeta } from 'quasar'

const metaData = {
  // sets document title
  title: 'صفحه لاگین',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - سایت تست`
}

export default {
  setup (props) {
    useMeta(metaData)
  }
}
</script>
