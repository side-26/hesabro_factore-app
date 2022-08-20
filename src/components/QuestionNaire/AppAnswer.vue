<template>
  <div>
    <div
      @click="handleSelect"
      class="q-my-md q-pa-sm q-mx-sm app_answer"
      :class="{ selected: isSelected }"
      v-if="isText"
    >
      <div class="row items-center">
        <slot></slot>
      </div>
    </div>
    <div v-if="!isText" class="q-my-md p-mx-xs">
      <div class="q-pa-md" style="max-width: 300px">
        <q-input
          v-model="text"
          filled
          type="textarea"
          hint="نظر خود را بنویسید"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'AppQuestion',

  components: {},
  props: {
    isText: {
      type: Boolean,
      required: true
    }
  },
  setup (props) {
    const isSelected = ref(false)
    const handleSelect = () => {
      isSelected.value = !isSelected.value
    }
    return {
      isSelected,
      handleSelect
    }
  }
}
</script>
<style lang="scss" scoped>
.app_answer {
  transition: all 0.15s ease-in-out;
  border-radius: 3rem;
  border: 1px solid;
  border-color: $grey-5;
  cursor: pointer;
}
.selected {
  border: 2px solid;
  border-color: $cyan-8;
  color: $cyan-8;
  font-weight: 00;
}
</style>
