<template lang="">
  <q-layout view="hHh lpR fFf">
    <q-header color="white" elevated class="bg-white desktop-only">
      <q-toolbar class="q-px-xl q-py-md row justify-between">
        <q-btn flat to="/factor" class="header_link">
          <q-avatar size="50px">
            <img src="public/icons/hesabro.logo.svg" alt="logo" />
          </q-avatar>
          <q-toolbar-title class="header_title"> حسابرو </q-toolbar-title>
        </q-btn>
        <profileMenu />
      </q-toolbar>
    </q-header>
    <q-page-container class="q-page-container">
      <router-view />
    </q-page-container>
    <app-footer />
  </q-layout>
</template>
<script>
import profileMenu from 'components/profileMenu.vue'
import AppFooter from 'layouts/AppFooter.vue'

export default {
  components: { profileMenu, AppFooter }
}
</script>
<style lang="scss" scoped>
.header_link {
  cursor: pointer;
  .header_title {
    color: $cyan-8;
    font-weight: 500;
  }
}
.avapardaz_link {
  text-decoration: none;
  transition: all 0.35s ease-in-out;
  &:hover {
    color: $cyan-10;
    font-weight: 700;
  }
}

@media screen and (max-width: 599.9px) {
}
@media screen and (min-width: 1023.9px) {
  .q-page-container {
    padding-top: 100px !important;
  }
}
@media screen and (max-width: 1439.9px) {
}
</style>
