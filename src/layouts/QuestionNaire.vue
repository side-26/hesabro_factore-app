<template lang="">
  <q-layout view="hHh lpR fFf">
    <q-header color="white" flat class="bg-white desktop-only">
      <q-toolbar class="q-px-xl q-py-md">
        <q-btn flat to="/factor" class="header_link">
          <q-avatar size="50px">
            <img src="public/icons/hesabro.logo.svg" alt="logo" />
          </q-avatar>
          <q-toolbar-title class="header_title"> حسابرو </q-toolbar-title>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey-6 text-white desktop-only">
      <q-toolbar class="row justify-center">
        <div class="text-center">
          حقوق این وب سایت متعلق به گروه فناوری
          <a href="https://avapardaz.vc" class="text-black avapardaz_link">آوا‌ پرداز</a> است
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="scss">
.header_link {
  cursor: pointer;
  .header_title {
    color: $cyan-8;
    font-weight: 500;
  }
}
.avapardaz_link{
  text-decoration: none;
  transition: all .35s ease-in-out;
  &:hover{
    color: $cyan-10;
    font-weight: 700;
  }
}
</style>
