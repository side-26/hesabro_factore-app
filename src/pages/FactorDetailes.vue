<template lang="">
  <div container class="bg-white mobile-only">
    <q-header elevated class="bg-cyan-8">
      <q-toolbar class="row justify-between q-pa-md factor_dialog_toobar">
        <div class="">
          <div>تاریخ ایجاد :</div>
          <div class="q-my-sm q-ml-lg">
            {{ factorDetailes.created }}
          </div>
          <div>
            نوع فاکتور :
          </div>
          <div class="q-my-sm q-ml-lg">
            {{ factorDetailes.buy_sale.text }}
            {{ factorDetailes.factor_type.name }}
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <q-page class="q-px-md page_container">
      <div class="row justify-between">
        <section>
          <div class="q-my-lg factor_property">
            <div class="factor_key_property">نام مشتری :</div>
            <div class="factor_value_property q-mt-sm q-ml-xl">
              {{ factorDetailes.customer.name }}
            </div>
          </div>
          <div class="q-my-sm factor_property">
            <div class="factor_key_property">نام زیرمجموعه :</div>
            <div class="factor_value_property q-mt-sm q-ml-xl">
              {{ factorDetailes.branch.name }}
            </div>
          </div>
        </section>
        <section>
          <div class="q-my-lg factor_property">
            <div class="factor_key_property">نام نماینده فروش :</div>
            <div class="factor_value_property q-mt-sm q-ml-xl">
              {{ factorDetailes.sell_agent.name }}
            </div>
          </div>
          <div class="q-my-sm factor_property">
            <div class="factor_key_property">نام ایجاد کننده :</div>
            <div class="factor_value_property q-mt-sm q-ml-xl">
              {{ factorDetailes.creator.name }}
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
            <tr v-for="factorItem in factorDetailes.items" :key="factorItem.id">
              <td>
                {{ factorItem.product.name }}
              </td>
              <td class="text-center">{{ factorItem.count }}</td>
              <td>{{ factorItem.unit_price }} {{ constants.currency }}</td>
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
      <div class="row justify-between total_price_container">
        <section class="q-pa-xl bg-grey-3 col final_price_container">
          <div class="final_price_label text-center">قیمت کل</div>
          <div class="final_price text-center">
            {{ handleSprateNumber(factorDetailes.factor_amount) }}
            {{ constants.currency }}
          </div>
        </section>
      </div>
      <div class="row justify-between q-mx-sm q-pb-md absolute-bottom">
        <q-btn class=" bg-cyan-9 text-white">
          دانلود فایل فاکتور
        </q-btn>
        <q-btn to="/question_naire" label="ثبت نظر" flat class=""></q-btn>
      </div>
    </q-page>
  </div>
  <!-- desktop-mode -->
  <div class="desktop-only q-pt-xl">
    <q-page class="q_page_desktop">
      <div class="first_section">
        <section class=" row items-baseline justify-around">
          <div class="simple_info_section">
            <div class="simple_info_section_header q-mb-lg">
              اطلاعات افراد
            </div>
            <div class="simple_info_section_body">
              <div
                class="simple_info_section_body_part q-my-md row items-center"
              >
                <div class="text-grey-7">مشتری :‌</div>
                <div class="q-ml-sm">{{ factorDetailes.customer.name }}</div>
              </div>
              <div
                class="simple_info_section_body_part q-my-md row items-center"
              >
                <div class="text-grey-7">نماینده فروش :‌</div>
                <div class="q-ml-sm">{{ factorDetailes.sell_agent.name }}</div>
              </div>
              <div
                class="simple_info_section_body_part q-my-md row items-center"
              >
                <div class="text-grey-7">ایجاد شده توسط :</div>
                <div class="q-ml-sm">{{ factorDetailes.creator.name }}</div>
              </div>
            </div>
          </div>
          <div class="entirely_info_section">
            <div class="entirely_info_section_header">
              اطلاعات کلی
            </div>
            <div class="entirely_info_section_body">
              <div
                class="q-my-md row items-center entirely_info_section_bodypart"
              >
                <div class="text-grey-7">ایجاد شده در :</div>
                <div class="q-ml-sm">{{ factorDetailes.created }}</div>
              </div>
              <div
                class="q-my-md row items-center entirely_info_section_bodypart"
              >
                <div class="text-grey-7">شعبه فروش :</div>
                <div class="q-ml-sm">{{ factorDetailes.branch.name }}</div>
              </div>
              <div
                class="q-my-md row items-center entirely_info_section_bodypart"
              >
                <div class="text-grey-7">نوع فاکتور:</div>
                <div class="q-ml-sm">
                  {{ factorDetailes.buy_sale.text }}
                  {{ factorDetailes.factor_type.name }}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="row justify-between q-my-xl">
          <div>
            <div class="text-grey-7">مبلع نهایی</div>
            <div class="text-h3">
              {{ handleSprateNumber(factorDetailes.factor_amount) }}
              {{ constants.currency }}
            </div>
            <div v-if="factorDetailes.remind === 0"></div>
          </div>
        </section>
      </div>
      <section></section>
      <section class="btn_group"></section>
    </q-page>
  </div>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { factors } from '../config/data.config'
import { constants } from '../config/constant.variable.js'
import { handleSprateNumber } from '../utilities/seprateNu'
export default {
  setup (props) {
    const router = useRoute()
    const factorDetailes = computed(() =>
      factors.data.items.find(item => item.id === +router.params.id)
    )
    onMounted(() => console.log(factorDetailes.value))
    return {
      factors,
      constants,
      handleSprateNumber,
      factorDetailes
    }
  }
}
</script>
<style lang="scss">
.page_container {
  padding-top: 0 !important ;
  .total_price_container {
    padding-bottom: 8rem;
  }
}
// in deskop
.first_section {
  padding: 3rem 6rem;
  .simple_info_section {
    &_header {
      font-size: 2.1rem;
      color: #212121;
    }
    &_body {
      &_part {
        div:first-child {
          font-size: 0.9rem;
        }
        div:nth-child(2) {
          font-size: 1.01rem;
        }
      }
    }
  }

  .entirely_info_section {
    &_header {
      font-size: 2.1rem;
      font-weight: 300;
      color: $cyan-8;
    }
    &_body {
      &_part {
        div:first-child {
          font-size: 2.9rem;
        }
        div:ntn-child(2) {
          font-size: 1.01rem;
        }
      }
    }
  }
}
</style>
