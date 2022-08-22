<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">نام مشتری</th>
          <th class="text-right">نماینده فروش</th>
          <th class="text-right">زیر مجموعه</th>
          <th class="text-right">نوع فاکتور</th>
          <th class="text-right">ایجاد شده در</th>
          <th class="text-right">عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="factor in factors.data.items" :key="factor.id">
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
          <td>
            <a
              @click="
                handleShowDialog(
                  factor.branch.name,
                  factor.factor_type.name,
                  factor.customer.name
                )
              "
              flat
              class="function_td"
            >
              جزِییات فاکتور
            </a>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-dialog v-model="layout" class="dialog">
      <q-layout container class="bg-white">
        <q-header borderd>
          <q-toolbar>
            <div></div>

            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page padding>
            <div class="q-my-sm row">
              <div class="font_weight">نام مشتری :</div>
              <div>
                {{ factorDetailes.customerName }}
              </div>
            </div>
            <div class="q-my-sm row">
              <div class="font_weight">نام مشتری :</div>
              <div>
                {{ factorDetailes.customerName }}
              </div>
            </div>
            <div class="q-my-sm row">
              <div class="font_weight">نام مشتری :</div>
              <div>
                {{ factorDetailes.customerName }}
              </div>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from 'vue'
import { factors } from '../../config/data.config'
export default {
  setup (props) {
    const layout = ref(false)
    const factorDetailes = ref({})
    const handleShowDialog = (branchName, factorTypeName, customerName) => {
      factorDetailes.value = {
        branchName,
        factorTypeName,
        customerName
      }
      layout.value = true
    }
    return {
      factors,
      layout,
      factorDetailes,
      handleShowDialog
    }
  }
}
</script>
<style lang="scss">
th {
  text-align: left !important;
}
.function_td {
  width: 100%;
  justify-content: flex-end !important;
  cursor: pointer;
  &:hover {
    font-weight: 500;
  }
}
tbody > tr:hover {
  box-shadow: 2px 1px 5px $cyan-5;
  background: $cyan-3;
}
.font_weight {
  font-weight: 700;
}
.q-layout-container {
  // border-radius: 1rem !important;
  // overflow: hidden;
}
</style>
