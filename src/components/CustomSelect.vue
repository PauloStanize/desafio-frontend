<template>
  <div class="input-field">
    <select :value="value" @change="$emit('input', $event.target.value)">
      <option v-for="(option, index) in options" :value="option.value" :key="index">{{option.text}}</option>
    </select>
    <label>{{placeholder}}</label>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: ['value', 'options', 'placeholder'],
};
</script>

<style scoped lang="scss">
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
