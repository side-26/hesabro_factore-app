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
            <div class="text-h6">
              {{ item.name }}
            </div>
            <div v-for="(question, index) in item.questions" :key="question.id">
              <question-container :titleNo="index" :questionInfo="question" />
            </div>
          </div>
        </div>
      </transition-group>
    </section>
    <div
      class="navigate absolute-bottom row justify-between q-pa-lg items-center mobile-only bg-white"
    >
      <transition-group tag="div" name="list">
        <q-btn
          @click="handleNextStage"
          v-if="data.data.length - 1 > questionStage"
          color="cyan-8"
          icon="chevron_right"
        >
          بعدی
        </q-btn>
        <q-btn @click="handleShowDialog" color="cyan-8" v-else>
          ثبت نظرات</q-btn
        >
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
  </section>
</template>
<script>
import { ref, computed } from 'vue'
import QuestionContainer from 'components/QuestionNaire/QuestionContainer.vue'
import { data } from '../config/data.config'
export default {
  name: 'QuestionNaire',
  components: {
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
.question_container {
  max-height: 72vh;
  overflow-y: auto;
}
.h_screen {
  height: 100vh;
}
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
</style>
