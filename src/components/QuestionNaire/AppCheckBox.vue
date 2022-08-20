<template lang="">
  <div class="app_checkbox" :class="{ selected: isSelected }"></div>
</template>
<script>
export default {
  name: 'AppCheckBox',
  props: {
    isSelected: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss" scoped>
.app_checkbox {
  border-radius: 100%;
  height: 1rem;
  width: 1rem;
  border: 1px solid #ccc;
}
.selected {
  background-color: #0008;
}
</style>
