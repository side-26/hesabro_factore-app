<template lang="">
  <div class="q-mt-lg">
    <form @submit="handleArrive">
      <div class="q-mb-md">
        <section class="m">
          <div class="focus:border-cyan-500 mx-2">
            <q-input
              color="cyan-8"
              filled
              v-model="id"
              label="کد تایید"
              mask="#-#-#-#"
              filled-value="unmasked-value"
              hint="*-*-*-*"
            />
            <q-btn class="q-mt-xs" flat color="black">تغییر شماره تلفن</q-btn>
          </div>
        </section>
        <!-- <div>
          <a href="#" class="font-bold text-cyan-700 text-sm">ارسال مجدد</a>
        </div> -->
      </div>
      <div class="">
        <q-btn
          class="q-py-sm validate_btn"
          unelevated
          fill
          color="cyan-8"
          style="width:100%"
          to="/factor"
        >
          ورود
        </q-btn>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup (props, { emit }) {
    const input = ref()
    const handleArrive = () => {
      alert('welcome')
    }
    const handleChangePhoneNumber = () => {
      alert('you change route!!1')
      emit('handleChangeStage')
    }
    const handleMoveInput = evt => {
      if (evt.target.value.length === 0) input.value.focus()
    }

    return {
      input,
      handleArrive,
      handleChangePhoneNumber,
      handleMoveInput
    }
  }
}
</script>
<style lang="scss">
.validate_btn {
  border-radius: 5px;
}
</style>
