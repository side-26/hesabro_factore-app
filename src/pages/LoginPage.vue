<template lang="">
  <div class="flex justify-center items-center login_container">
    <section class="login q-pa-lg">
      <figure class="flex justify-center mb-12">
        <img
          src="https://cdn.mobit.ir/get/asrd/settings/120/62d3c91f8e432.png?inline=1"
          alt="company-logo"
        />
      </figure>
      <div v-if="isEnterd" class="text-h6 q-mb-md">کد تایید را وارد کنید</div>
      <div v-else class="text-h6 q-mb-md">ورود | ثبت‌نام</div>
      <transitionGroup name="list">
        <div v-if="isEnterd" class="text-grey-7 text-caption">
          کد تایید برای شماره تلفن 0913241595 ارسال شد
        </div>
        <div v-else class="text-grey-7">
          لطفا شماره موبایل خود را وارد کنید
        </div>
      </transitionGroup>
      <section></section>
      <div class="mt-5 border-b-2 border-b-gray-300 ">
        <transitionGroup name="list">
          <MessageForm v-if="isEnterd" @handleChangeStage="handleStages" />
          <MobileForm
            v-else
            @handleChangeStage="handleStages"
            v-model="phoneNumber"
          />
        </transitionGroup>
      </div>
    </section>
  </div>
</template>
<script>
import MessageForm from 'components/Auth/MessageForm.vue'
import MobileForm from 'components/Auth/MobileForm.vue'
import { ref } from 'vue'
// const metaData = {
//   title: 'ورود / ثبت نام',
//   titleTemplate: title => `${title} -
// حسابرو`
// }
export default {
  name: 'LoginPage',
  components: {
    MessageForm,
    MobileForm
  },
  setup (props) {
    const isEnterd = ref(false)
    const phoneNumber = ref('')
    const handleStages = nextStage => {
      isEnterd.value = !isEnterd.value
    }
    return {
      isEnterd,
      phoneNumber,
      handleStages
    }
  }
}
</script>
<style lang="scss">
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
.login_container {
  height: 100vh;
  .login {
    width: 25%;
    // box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);
    border: 1px solid $grey-4;
    border-radius: 10px;
  }
}
</style>
