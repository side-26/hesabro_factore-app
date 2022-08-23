<template lang="">
  <div
    class="navigate absolute-bottom row justify-between q-pa-lg items-center mobile-only bg-white"
  >
    <transition-group tag="div" name="list">
      <q-btn
        @click="handleNextStage"
        v-if="arrLength - 1 > questionStage"
        color="cyan-8"
        icon="chevron_right"
      >
        بعدی
      </q-btn>
      <q-btn @click="handleShowDialog" color="cyan-8" v-else> ثبت نظرات</q-btn>
    </transition-group>
    <transition-group tag="div" name="list">
      <q-btn
        @click="handlePreStage"
        v-if="questionStage"
        color="cyan-8"
        icon-right="chevron_left"
        >قبلی</q-btn
      ><q-btn to="/factor" color="cyan-8" v-else>خروج</q-btn>
    </transition-group>
  </div>
  <!-- desktop-mode -->
  <div
    class="navigate_btn_group_desktop row justify-between q-pa-lg items-center desktop-only bg-white w-5"
  >
    <transition-group tag="div" name="list">
      <q-btn
        class="navigate_btn"
        @click="handleNextStage"
        v-if="arrLength - 1 > questionStage"
        color="cyan-8"
        icon="chevron_right"
      >
        بعدی
      </q-btn>
      <q-btn
        class="navigate_btn"
        @click="handleShowDialog"
        color="cyan-8"
        v-else
      >
        ثبت نظرات</q-btn
      >
    </transition-group>
    <transition-group tag="div" name="list">
      <q-btn
        class="navigate_btn"
        @click="handlePreStage"
        v-if="questionStage"
        color="cyan-8"
        icon-right="chevron_left"
        >قبلی</q-btn
      ><q-btn class="navigate_btn" to="/factor" color="cyan-8" v-else
        >خروج</q-btn
      >
    </transition-group>
  </div>
</template>
<script>
export default {
  props: {
    arrLength: {
      type: Number,
      required: true
    },
    questionStage: {
      type: Number,
      required: true
    }
  },
  setup (props, { emit }) {
    const handleNextStage = () => {
      emit('handleNextStage')
    }
    const handleShowDialog = () => {
      emit('handleShowDialog')
    }
    const handlePreStage = () => {
      emit('handlePreStage')
    }
    return {
      handleShowDialog,
      handleNextStage,
      handlePreStage
    }
  }
}
</script>
<style lang="scss">

</style>
