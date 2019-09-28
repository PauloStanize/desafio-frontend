<template>
  <div class="input-field">
    <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
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

input {
  width: 100%;
  border: none;
  border-bottom: 1px solid $input-border-color;
  border-radius: 0;
  outline: none;
  height: 30px;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
}

input:focus {
  box-shadow: 0 1px 0 0 $input-border-color;
}

label {
  position: relative;
  top: -60px;
  font-size: 14px;
}
</style>
