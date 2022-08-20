<template lang="">
  <div class="q-mt-xl q-px-sm">
    <div>
      {{ questionInfo.question }}
    </div>
    <section class="q-mt-lg  q-px-sm row justify-center items-center">
      <div v-for="item in questionInfo.options" :key="item.id">
        <AppAnswer :isText="!isText" @click="handleAddAnswers()"
          >{{item.title}}
        </AppAnswer>
      </div>
    </section>
  </div>
</template>
<script>
import { computed, onMounted } from 'vue'
import AppAnswer from 'components/QuestionNaire/AppAnswer.vue'
export default {
  name: 'QuestionContainer',
  props: {
    questionInfo: {
      type: Object,
      required: true
    }
  },
  components: {
    AppAnswer
  },
  setup (props) {
    const handleAddAnswers = () => {
      console.log('hello')
    }
    onMounted(() => {
      console.log(props.questionInfo, isText.value)
    })
    const isText = computed(
      () =>
        props.questionInfo.type.text.includes('متن') &&
        props.questionInfo.options.length === 0
    )
    return {
      handleAddAnswers,
      isText
    }
  }
}
</script>
<style lang="scss"></style>
