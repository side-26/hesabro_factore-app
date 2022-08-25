<template>
  <div class="q-pa-md">
    <q-markup-table class="relative table">
      <thead class="bg-grey-8 table_thead">
        <tr>
          <th v-if="needTitle" :colspan="tableHeaders.length - 2">
            <div class="row no-wrap items-center q-py-sm">
              <div class="text-h4 q-ml-md">فاکتور ها</div>
            </div>
          </th>
          <th :colspan="2">
            <div>
              <q-input
                bottom-slots
                color="cyan-8"
                v-model="text"
                label="جستجو کنید"
              >
                <template v-slot:before>
                  <q-icon name="search" />
                </template>
                <template v-slot:append>
                  <q-btn round dense flat icon="close" />
                </template>
              </q-input>
            </div>
          </th>
        </tr>
        <tr>
          <th
            v-for="tableHeader in tableHeaders"
            :key="tableHeader"
            class="text-left"
          >
            {{ tableHeader }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot> </slot>
      </tbody>
    </q-markup-table>
    <div class="q-pa-sm table_pagination_container desktop-only">
      <q-pagination
        class="table_pagination"
        elevated
        v-model="currnetPage"
        :max="maxPage"
        input
      />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { factors } from '../../config/data.config'
import { constants } from '../../config/constant.variable.js'
import { handleSprateNumber } from '../../utilities/seprateNu'
import { useRouter } from 'vue-router'
export default {
  name: 'FactorTable',
  props: {
    tableHeaders: {
      type: Array,
      required: true
    },
    maxPage: {
      type: Number,
      required: true
    },
    needTitle: {
      type: Boolean
    }
  },
  setup (props) {
    const router = useRouter()
    const layout = ref(false)
    const currnetPage = ref(1)

    return {
      router,
      factors,
      layout,
      currnetPage,
      constants,
      handleSprateNumber
    }
  }
}
</script>
<style lang="scss">
.table {
  max-height: 70vh;
  overflow-y: auto;
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
  tbody > tr {
    transition: all 0.15s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 1px 2px $grey-7;
      background: $grey-3;
      transform: translateY(-8%);
      td {
        color: $cyan-7;
      }
    }
  }
  &_pagination_container {
    .table_pagination {
      transform: rotate(180deg);
      justify-content: center;
      input {
        direction: ltr;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
