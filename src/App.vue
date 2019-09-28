<template>
  <div id="app">
    <TodoList />
    <uncontrolled-confirmation-modal />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';

export default {
  name: 'app',
  components: {
    TodoList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: $app-background;
}
</style>
