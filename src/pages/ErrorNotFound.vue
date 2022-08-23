<template>
  <div class="fullscreen text-center q-pa-md flex flex-center error_page">
    <div>
      <div class="error_page_number">
        404
      </div>

      <div class="error_page_desc" style="opacity:.4">
        ادرس وارد شده اشتباه است.
      </div>

      <q-btn
        class="q-mt-xl btn_error"
        color="cyan-8"
        text-color="white"
        unelevated
        to="/"
        label="برو دیدن فاکتور ها"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
<style lang="scss">
.error_page {
  .error_page_number {
    font-size: 10vw;
  }
  .error_page_desc {
    font-size: 5vw;
  }
  .btn_error {
    min-width: 10vw;
  }
}
</style>
