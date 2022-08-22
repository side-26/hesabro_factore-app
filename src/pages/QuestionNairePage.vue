<template lang="">
  <!-- navBar -->
  <q-dialog v-model="showDialog" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">مایل به ثبت نظرات ؟</span>
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
    <section class="col-12 q-py-sm mobile-only">
      <div class="row items-center justify-between q-px-md q-pb-sm">
        <div class="row items-center">
          <div class="q-ml-sm">مرحله {{ questionStage + 1 }}</div>
        </div>
        <div>
          <q-btn to="/" flat label="خروج" />
        </div>
      </div>
      <q-linear-progress
        class="q-pt-lg-md"
        color="cyan-8"
        size="3px"
        :value="progressBarAdvance"
      />
    </section>
    <section class="question_container q-pa-md q-mt-lg">
      <transition-group tag="div" name="list">
        <div v-for="(item, index) in data.data" :key="item.id">
          <div v-if="index === questionStage">
            <div class="text-h6 row center_in_desktop text-cyan-8">
              <div>دسته بندی :</div>
              <div class="q-ml-xs">
                {{ item.name }}
              </div>
            </div>
            <div v-for="(question, index) in item.questions" :key="question.id">
              <question-container :titleNo="index" :questionInfo="question" />
            </div>
          </div>
        </div>
      </transition-group>
    </section>
    <NavigateBtn
      @handle-next-stage="handleNextStage"
      @handle-show-dialog="handleShowDialog"
      @handle-pre-stage="handlePreStage"
      :arrLength="data.data.length"
      :questionStage="questionStage"
    />
  </section>
</template>
<script>
import { ref, computed } from 'vue'
import QuestionContainer from 'components/QuestionNaire/QuestionContainer.vue'
import NavigateBtn from 'components/QuestionNaire/NavigateBtn.vue'
import { data } from '../config/data.config'
export default {
  name: 'QuestionNaire',
  components: {
    QuestionContainer,
    NavigateBtn
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
    // onMounted(() => {
    //   console.log(
    //     progressBarAdvance.value,
    //     data.data.length,
    //     questionStage.value
    //   )
    // })
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
<style lang="scss">
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
// responsive
@media screen and (max-width: 599px) {
  .question_container {
    max-height: 72vh;
    overflow-y: auto;
    .selected {
      border: 2px solid;
      border-color: $cyan-8;
      color: $cyan-8;
      font-weight: 00;
    }
    .choosen {
      border: 2px $cyan-8;
      border: none;
      font-weight: 800;
      font-size: 1.01rem;
      color: $cyan-8;
    }
    .yes_or_no {
      border: 1px solid $grey-5;
      border-radius: 3rem;
      transition: all 0.25s ease-in;
    }
  }
}
@media screen and (min-width: 600px) {
}
@media screen and (max-width: 1023.99px) {
  .h_screen {
    height: 100vh;
  }
}
@media screen and (min-width: 1024px) {
  .center_in_desktop {
    text-align: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
  }
  .font_weight {
    font-weight: 700;
    word-spacing: 10px;
    text-align: center;
  }
  .multi_answers_in_desktop {
    flex-direction: column;
    justify-content: end;
    .answers_container {
      width: 50%;
      // margin: 1rem 0;

      .answer {
        margin: 0.6rem 0;
        .app_answer {
          background-color: $grey-3;
          padding: 0.7rem 0;
          padding-left: 1rem;
          border: none;
          margin: 0;
        }

        .selected {
          border: 2px dotted $grey-3;
          background: $cyan-4;
          color: white;
          overflow: hidden;
          box-sizing: content-box !important;
        }
      }
    }
  }
  .yes_or_no_answers_container,
  .text_answers {
    width: 50%;
    margin: 0 auto;
    .yes_or_no {
      transition: all 0.25s ease-in-out;
      cursor: pointer;
      border-radius: 3rem;
      background-color: $grey-3;
      padding: 0.7rem 0;
      padding-left: 1rem;
      border: none;
      margin: 0;
    }
    .choosen {
      border: 2px dotted $grey-3;
      background: $cyan-4;
      color: white;
      overflow: hidden;
      box-sizing: content-box !important;
    }
  }
  .navigate_btn_group_desktop {
    margin: 0 auto;
    width: 40%;
    .navigate_btn {
      border-radius: 3rem;
      width: 10rem;
    }
  }
}
@media screen and (min-width: 1440px) {
  .navigate_btn_group_desktop{
    width: 30%;
  }
}
</style>
