<template>
  <div class="q-pa-md">
    <q-markup-table class="relative table">
      <thead class="bg-grey-8 table_thead">
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
            <a @click="handleShowDialog(factor.id)" flat class="function_td">
              جزِییات فاکتور
            </a>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-dialog v-model="layout" class="dialog">
      <q-layout container class="bg-white">
        <q-header borderd class="bg-cyan-8">
          <q-toolbar class="row justify-between q-pa-md factor_dialog_toobar">
            <div class="">
              <div>تاریخ ایجاد :</div>
              <div class="q-my-sm q-ml-lg">
                {{ factorDetailes.props.created }}
              </div>
              <div>
                نوع فاکتور :
              </div>
              <div class="q-my-sm q-ml-lg">
                {{ factorDetailes.props.buy_sale.text }}
                {{ factorDetailes.props.factor_type.name }}
              </div>
            </div>
            <q-btn
              side
              flat
              v-close-popup
              round
              dense
              icon="close"
              class="q-mb-lg"
            />
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page padding class="">
            <div class="row justify-between">
              <section>
                <div class="q-my-lg factor_property">
                  <div class="factor_key_property">نام مشتری :</div>
                  <div class="factor_value_property q-mt-sm q-ml-xl">
                    {{ factorDetailes.props.customer.name }}
                  </div>
                </div>
                <div class="q-my-sm factor_property">
                  <div class="factor_key_property">نام زیرمجموعه :</div>
                  <div class="factor_value_property q-mt-sm q-ml-xl">
                    {{ factorDetailes.props.branch.name }}
                  </div>
                </div>
              </section>
              <section>
                <div class="q-my-lg factor_property">
                  <div class="factor_key_property">نام نماینده فروش :</div>
                  <div class="factor_value_property q-mt-sm q-ml-xl">
                    {{ factorDetailes.props.sell_agent.name }}
                  </div>
                </div>
                <div class="q-my-sm factor_property">
                  <div class="factor_key_property">نام ایجاد کننده :</div>
                  <div class="factor_value_property q-mt-sm q-ml-xl">
                    {{ factorDetailes.props.creator.name }}
                  </div>
                </div>
              </section>
            </div>
            <div class="q-my-lg q-pt-lg factor_detailes_table_container">
              <q-markup-table class="relative">
                <thead class="sticky">
                  <tr class="bg-grey-3">
                    <th class="text-left">نام محصول</th>
                    <th class="text-right">تعداد</th>
                    <th class="text-right">قیمت تکی</th>
                    <th class="text-right">قیمت کل</th>
                    <th class="text-right">تخفیف</th>
                    <th class="text-right">مالیات</th>
                  </tr>
                </thead>
                <tbody class="dialog_table_body">
                  <tr
                    v-for="factorItem in factorDetailes.props.items"
                    :key="factorItem.id"
                  >
                    <td>
                      {{ factorItem.product.name }}
                    </td>
                    <td class="text-center">{{ factorItem.count }}</td>
                    <td>
                      {{ factorItem.unit_price }} {{ constants.currency }}
                    </td>
                    <td>
                      {{ handleSprateNumber(factorItem.sum_price) }}
                      {{ constants.currency }}
                    </td>
                    <td>
                      {{ handleSprateNumber(factorItem.discount) }}
                      {{ constants.currency }}
                    </td>
                    <td>
                      <div v-if="factorItem.tax">
                        {{ handleSprateNumber(factorItem.tax) }}
                        {{ constants.currency }}
                      </div>
                      <div v-else>0 {{ constants.currency }}</div>
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>
            <div class="row justify-between">
              <section class="q-pa-xl bg-grey-3 col final_price_container">
                <div class="final_price_label text-center">قیمت کل</div>
                <div class="final_price text-center">
                  {{ handleSprateNumber(factorDetailes.props.factor_amount) }}
                  {{ constants.currency }}
                </div>
              </section>
            </div>
            <div class="row absolute-bottom justify-around">
              <q-btn class=" q-ma-md bg-cyan-9 text-white">
                دانلود فایل فاکتور
              </q-btn>
              <q-btn
                to="/question_naire"
                label="ثبت نظر"
                flat
                class="q-ma-md"
              ></q-btn>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import { factors } from '../../config/data.config'
import { constants } from '../../config/constant.variable.js'
import { handleSprateNumber } from '../../utilities/seprateNu'
export default {
  setup (props) {
    const layout = ref(false)
    const factorDetailes = reactive({ props: {} })
    const handleShowDialog = id => {
      factorDetailes.props = factors.data.items.find(item => item.id === id)
      layout.value = true
    }
    return {
      factors,
      layout,
      factorDetailes,
      handleShowDialog,
      constants,
      handleSprateNumber
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
tbody > tr {
  transition: all 0.15s ease-in-out;
  &:hover {
    box-shadow: 1px 1px 2px $grey-7;
    background: $grey-3;
    transform: translateY(-8%);
    td {
      color: $cyan-7;
    }
  }
}
.table {
  height: 70vh;
  overflow-y: auto;
}
.factor_key_property {
  font-weight: 700;
}
// .factor_value_property{
//   marg
// }
.q-layout-container {
  // border-radius: 1rem !important;
  // overflow: hidden;
}
.factor_dialog_toobar {
  align-items: flex-start !important;
}
.factor_detailes_table_container {
  border-top: 1px solid $grey-5;
  height: fit-content;
  max-height: 50vh;
  overflow-y: auto;
  .dialog_table_body > tr {
    &:hover {
      background: $cyan-8;
      color: white;
    }
  }
}
thead {
  z-index: 200;
  tr {
    background: white !important;
    width: 100%;
    th {
      font-weight: 700 !important;
      font-size: 0.9rem !important;
    }
  }
  position: sticky !important;
  top: 0 !important;
}
.final_price_container {
  .final_price_label {
    font-size: 1.1rem;
  }
  .final_price {
    font-size: 1.5rem;
  }
}
.download_btn {
  color: white;
}
</style>
