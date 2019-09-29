<template>
  <div class="input-field">
    <input :value="value" @input="$emit('input', $event.target.value)">
    <label>{{placeholder}}</label>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['value', 'placeholder'],
};
</script>

<style scoped lang='scss'>
.input-field {
  margin-top: 30px;
  height: 35px;
}

label {
  position: relative;
  top: -60px;
  font-size: 14px;
}
</style>
