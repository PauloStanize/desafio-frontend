<template>
  <div>
    <Header @search="fetchTodos" @showSaveForm="showSaveForm" />

    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
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
import Qs from 'qs'
import TodoItem from "./TodoItem";
import SaveForm from "../SaveForm";
import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import todoSeed from "@/assets/todoSeed";
import Api from '@/api';

export default {
  name: "TodoList",
  components: {
    TodoItem,
    SaveForm,
    CustomButton,
    Header
  },
  methods: {
    showSaveForm(todo) {
      this.isSaveFormShowing = true;
      this.saveModel = todo;
    },
    async fetchTodos(query) {
      this.currentFetchQuery = { ...this.currentFetchQuery, ...query };

      const queryString = Qs.stringify(this.currentFetchQuery)
      const res = await Api.get(`/todos?${queryString}`)

      this.todos = res.data
    },
    async saveTodo(todo) {
      let res

      if(todo.id) {
        res = await Api.put(`/todos/${todo.id}`, {
          ...todo
        })
      } else {
        res = await Api.post('/todos', {
          ...todo
        })
      }

      const index = todo.id && this.todos.findIndex(el => el.id === todo.id)

      if (index > -1) {
        this.$set(this.todos, index, res.data)
      } else {
        this.todos.push(res.data)
      }

      this.isSaveFormShowing = false;
    },
    async completeTodo(todo) {
      await this.saveTodo({
        ...todo,
        status: todo.status === "opened" ? "closed" : "opened"
      })
    },
    async deleteTodo(todo) {
      const index = this.todos.indexOf(todo);

      this.$uncontrolledConfirmationModal.show({
        title: "Excluir",
        text:
          "Tem certeza que deseja excluir isto? A ação não poderá ser desfeita",
        onConfirm: async () => {
          await Api.delete(`/todos/${todo.id}`)
          this.todos.splice(index, 1)
        }
      });
    }
  },
  data() {
    return {
      isSaveFormShowing: false,
      saveModel: {},
      todos: [],
      currentFetchQuery: {}
    };
  },
  async created() {
    const res = await Api.get("/todos", {
      responseType: "json"
    })

    this.todos = res.data
  }
}
</script>

<style scoped>
</style>
