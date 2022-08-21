<template lang="">
  <!-- navBar -->
  <q-dialog v-model="showDialog" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">مایل به ثبت نظرات؟؟</span>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="بازگشت" color="grey-8" v-close-popup />
        <q-btn
          @click="handlePostComments"
          flat
          label="ثبت نظرات"
          color="cyan-8"
          v-close-popup
          to="/"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <section class="flex-no h_screen relative">
    <section class="col-12 q-py-sm">
      <div class="row items-center justify-between q-px-md q-pb-sm">
        <div class="row items-center">
          <div class="q-ml-sm">مرحله {{ questionStage + 1 }}</div>
        </div>
        <div>
          <q-btn to="/" flat label="خروج" />
        </div>
      </div>
      <q-linear-progress
        style="rotate: 180deg;"
        class="q-pt-lg-md "
        color="cyan-8"
        size="3px"
        :value="progressBarAdvance"
      />
    </section>
    <section class="question_container relative row q-pa-md q-mt-lg">
      <transition-group
        tag="div"
        name="list"
        class="col col-md-6 col-lg-4 q-ml-lg-lg"
      >
        <div v-for="(item, index) in data.data" :key="item.id">
          <div v-if="index === questionStage">
            <div class="text-h6">
              {{ item.name }}
            </div>
            <div v-for="(question, index) in item.questions" :key="question.id">
              <question-container :titleNo="index" :questionInfo="question" />
            </div>
      <navigate-btn-group
      @handle-pre-stage="handlePreStage"
      @handle-next-stage="handleNextStage"
      @handle-show-dialog='handleShowDialog'
      :arrLength="data.data.length"
      :questionStage="questionStage"
      class="hidden_in_tocuh"
    />
          </div>
        </div>
    </transition-group>
    </section>
    <navigate-btn-group
      @handle-pre-stage="handlePreStage"
      @handle-next-stage="handleNextStage"
      @handle-show-dialog='handleShowDialog'
      :arrLength="data.data.length"
      :questionStage="questionStage"
      class="hidden_in_desktop absolute-bottom "
    />
  </section>
</template>
<script>
import { ref, computed } from 'vue'
import QuestionContainer from 'components/QuestionNaire/QuestionContainer.vue'
import NavigateBtnGroup from 'components/QuestionNaire/NavigateBtnGroup.vue'
import { data } from '../config/data.config'
export default {
  name: 'QuestionNaire',
  components: {
    NavigateBtnGroup,
    QuestionContainer
  },
  setup (props) {
    const questionStage = ref(0)
    const showDialog = ref(false)
    const handleNextStage = () => {
      ++questionStage.value
    }
    const handleShowDialog = () => {
      showDialog.value = true
    }
    const handlePostComments = () => {
      alert('نظرات ثبت شدند')
    }
    const handlePreStage = () => {
      --questionStage.value
    }
    const progressBarAdvance = computed(
      () => questionStage.value / (data.data.length - 1)
    )
    return {
      showDialog,
      questionStage,
      data,
      progressBarAdvance,
      handleNextStage,
      handlePreStage,
      handleShowDialog,
      handlePostComments
    }
  }
}
</script>
<style lang="scss" scoped>

.h_screen {
  height: 100vh;
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}

// responsive sizes
@media only screen and (max-width: 599.99px) {
}
@media only screen and (max-width: 1023.99px) {
  .question_container {
  max-height: 72vh;
  overflow-y: auto;
  .hidden_in_tocuh{
  display:none
}
}

}
@media only screen and (min-width: 1024px) {
  .hidden_in_desktop {
    display: none;
  }
}
@media only screen and (max-width: 1439.99px) {
}
@media only screen and (min-width: 1440px) {
}
</style>
