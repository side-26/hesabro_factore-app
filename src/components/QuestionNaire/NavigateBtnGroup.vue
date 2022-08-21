<template>
  <div
    class="navigate row justify-between q-pa-lg items-center   bg-white"
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
      ><q-btn to="/" color="cyan-8" v-else>خروج</q-btn>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'NavigateBtnGroup',
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
    const handlePreStage = () => {
      emit('handlePreStage')
    }
    const handleNextStage = () => {
      emit('handleNextStage')
    }
    const handleShowDialog = () => {
      emit('handleShowDialog')
    }
    return {
      handlePreStage,
      handleNextStage,
      handleShowDialog
    }
  }
}
</script>
