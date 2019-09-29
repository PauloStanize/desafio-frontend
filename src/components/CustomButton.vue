<template>
  <button @click="$emit('click', $event)">
    <slot>Salvar</slot>
  </button>
</template>

<script>
  export default {
    name: "CustomButton",
    props: ['color']
  }
</script>

<style scoped>

</style>