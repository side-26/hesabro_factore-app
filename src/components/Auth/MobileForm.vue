<template lang="">
  <form class="q-mt-lg mobile_form" @submit.prevent="handleSubmit()">
    <div class="flex flex-col mt-4 pb-5 border-b-2 border-b-gray-300">
      <q-input
        class="input"
        color="cyan-8"
        filled
        @input="handleChangephoneNumber"
      >
        <template v-slot:prepend>
          <q-icon name="phone_iphone" />
        </template>
      </q-input>
    </div>
    <div class="q-mt-lg text-white row">
      <q-btn
        class="enter_button q-py-sm"
        @click="handleSubmit"
        fill
        color="cyan-8"
        type="submit"
        label="ورود"
      />
    </div>
  </form>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'MobileForm',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  setup (props, { emit }) {
    const phoneNumber = ref('')
    const handleChangephoneNumber = () => [
      emit('update:modelValue', phoneNumber.value)
    ]
    const handleSubmit = () => {
      emit('handleChangeStage')
    }
    return {
      phoneNumber,
      handleSubmit,
      handleChangephoneNumber
    }
  }
}
</script>
<style lang="scss">
.mobile_form {
  .input {
    width: 100%;
  }
  .enter_button {
    width: 100%;
    border-radius: 5px;
    font-weight: 500;
    font-size: 0.9rem;
  }
}
</style>
