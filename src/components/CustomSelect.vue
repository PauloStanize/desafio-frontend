<template>
  <div class="input-field">
    <select v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
      <option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">{{option.text}}</option>
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

select {
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

label {
  position: relative;
  top: -60px;
  font-size: 14px;
}
</style>
