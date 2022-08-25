<template lang="">
  <div class="table_container q-mx-auto">
    <FactorTable
      class="q-pt-xl"
      :tableHeaders="tableHeadersArr"
      maxPage="5"
      needTitle="true"
    >
      <tr
        v-for="factor in factors.data.items"
        @click="handleShowDetailes(factor.id)"
        :key="factor.id"
      >
        <td>
          {{ factor.customer.name }}
        </td>
        <td>
          {{ factor.sell_agent.name }}
        </td>
        <td>
          {{ factor.branch.name }}
        </td>
        <td>
          {{ factor.factor_type.name }}
        </td>
        <td>
          {{ factor.created }}
        </td>
      </tr>
    </FactorTable>
  </div>
</template>
<script>
import { useMeta } from 'quasar'
import { useRouter } from 'vue-router'
import { factors } from '../config/data.config'
import FactorTable from 'components/Factors/FactorTable.vue'
const metaData = {
  // sets document title
  title: 'صفحه فاکتور ها',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - حسابرو`
}
export default {
  components: {
    FactorTable
  },
  setup (props) {
    const router = useRouter()
    const tableHeadersArr = [
      'نام مشتری',
      'نماینده فروش',
      'شعبه',
      'نوع فاکتور',
      'ایجاد شده در'
    ]
    const handleShowDetailes = id => {
      router.push(`/factor_detailes/${id}`)
    }
    useMeta(metaData)
    return {
      factors,
      tableHeadersArr,
      handleShowDetailes
    }
  }
}
</script>
<style lang="scss">
@import url('assets/scss/pages/factor.scss');
</style>
