<template>
  <div>
    <select v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
      <option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">{{option.text}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'CustomSelect',
    props: ['value', 'options']
  }
</script>

<style scoped>

</style>