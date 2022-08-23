<template>
  <div class="q-my-md answer">
    <div
      @click="handleSelect"
      class="q-my-md q-pa-sm q-mx-sm app_answer"
      :class="{ selected: isSelected }"
      v-if="type.includes('چند گزینه ای')"
    >
      <div class="row items-center">
        <slot></slot>
      </div>
    </div>
    <div v-else-if="type.includes('متن')" class="q-my-sm p-mx-xs">
      <q-input filled type="textarea" hint="نظر خود را بنویسید" />
    </div>
    <div v-else class="yes_or_no_answers_container">
      <div class="yes_or_no q-px-sm q-py-xs" :class="{ choosen: isChoosen }">
        <slot></slot>
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
    type: {
      type: String,
      required: true
    },
    isChoosen: {
      type: Boolean
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

.comment_area {
  width: 100vw;
}

</style>
