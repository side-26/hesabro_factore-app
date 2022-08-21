<template lang="">
  <div class="q-mt-xl q-px-sm">
    <div>{{ titleNo + 1 }}- {{ questionInfo.question }}</div>
    <section class="q-mt-lg  q-px-sm">
      <div
        v-if="isMultiChoices"
        class="row justify-center desktop_size_multi_Answers  items-center"
      >
        <div v-for="item in questionInfo.options" :key="item.id">
          <AppAnswer :type="questionInfo.type.text" @click="handleAddAnswers()"
            >{{ item.title }}
          </AppAnswer>
        </div>
      </div>
      <div v-if="isText">
        <div v-for="(item, index) in questionInfo.options + 1" :key="index">
          <AppAnswer :type="questionInfo.type.text" />
        </div>
      </div>
      <div class="" v-if="isYesOrNO">
        <div
          v-for="item in questionInfo.options"
          :key="item.id"
          @click="handleChooseOne(item.id)"
        >
          <AppAnswer
            :isChoosen="item.id === choosenNo"
            :type="questionInfo.type.text"
            class="q-my-sm"
            >{{ item.title }}</AppAnswer
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
import AppAnswer from 'components/QuestionNaire/AppAnswer.vue'
export default {
  name: 'QuestionContainer',
  props: {
    questionInfo: {
      type: Object,
      required: true
    },
    titleNo: {
      type: Number,
      required: true
    }
  },
  components: {
    AppAnswer
  },
  setup (props) {
    const choosenNo = ref(-1)
    const handleAddAnswers = () => {
      console.log('answerd is added')
    }
    const isText = computed(() => props.questionInfo.type.text.includes('متن'))
    const isYesOrNO = computed(() =>
      props.questionInfo.type.text.includes('بله و خیر')
    )
    const isMultiChoices = computed(() =>
      props.questionInfo.type.text.includes('چند گزینه ای')
    )
    const handleChooseOne = id => {
      if (id === choosenNo.value) {
        choosenNo.value = -1
      } else {
        choosenNo.value = id
      }
    }
    return {
      choosenNo,
      handleAddAnswers,
      isText,
      isYesOrNO,
      handleChooseOne,
      isMultiChoices
    }
  }
}
</script>
<style lang="scss">
@media only screen and (max-width: 599.99px) {
}
@media only screen and (max-width: 1023.99px) {
}
@media only screen and (min-width: 1024px) {
  .desktop_size_multi_Answers {
    justify-content: start !important;
  }
}
@media only screen and (min-width: 1439.99px) {
}
</style>
