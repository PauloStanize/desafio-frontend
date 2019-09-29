<template>
  <div>
    <Header @search="fetchTodos" @showSaveForm="showSaveForm" />

    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo.sync="todo"
      @complete="completeTodo"
      @delete="deleteTodo"
      @edit="showSaveForm"
    />

    <SaveForm
      :model.sync="this.saveModel"
      v-if="this.isSaveFormShowing"
      @cancel="isSaveFormShowing = false"
      @submit="saveTodo"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import SaveForm from "../SaveForm";
import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import todoSeed from "@/assets/todoSeed";

export default {
  name: "TodoList",
  components: {
    TodoItem,
    SaveForm,
    CustomButton,
    Header
  },
  methods: {
    filterTodos({ title = "", priority = "all", status = "all" }) {
      this.todos = todoSeed

      if (!!title) {
        this.todos = this.todos.filter(todo => todo.title.toUpperCase().includes(title.toUpperCase()));
      }

      if(priority !== 'all') {
        this.todos = this.todos.filter(todo => todo.priority === priority)
      }

      if(status !== 'all') {
        this.todos = this.todos.filter(todo => todo.status === status)
      }
    },
    fetchTodos(query) {
      this.currentFetchQuery = { ...this.currentFetchQuery, ...query };
      this.filterTodos(this.currentFetchQuery)
    },
    showSaveForm(todo) {
      this.isSaveFormShowing = true;
      this.saveModel = todo;
    },
    saveTodo(todo) {
      const index = todo.id && this.todos.findIndex(el => el.id === todo.id);

      if (index > -1) {
        this.todos[index] = todo;
      } else {
        this.todos.push({
          ...todo,
          id: this.todos.length + 1
        });
      }

      this.isSaveFormShowing = false;
    },
    completeTodo(todo) {
      const index = this.todos.indexOf(todo);
      const currentStatus = this.todos[index].status;

      this.todos[index].status =
        currentStatus === "opened" ? "closed" : "opened";
    },
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);

      this.$uncontrolledConfirmationModal.show({
        title: "Excluir",
        text:
          "Tem certeza que deseja excluir isto? A ação não poderá ser desfeita",
        onConfirm: () => this.todos.splice(index, 1)
      });
    }
  },
  data() {
    return {
      isSaveFormShowing: false,
      saveModel: {},
      todos: todoSeed,
      currentFetchQuery: {}
    };
  }
};
</script>

<style scoped>
</style>
