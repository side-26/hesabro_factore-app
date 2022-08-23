<template lang="">
  <div class="q-pa-md">
    <q-btn color="cyan-8" label="حساب کاربری">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">تست</div>
            بخش تست
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">مهدی رشیدی</div>

            <q-btn
              color="cyan-8"
              label="خروج از حساب"
              push
              size="sm"
              v-close-popup
              to="/"
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
