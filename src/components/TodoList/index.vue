<template>
  <div>
    <button @click="showSaveForm({})">Criar tarefa</button>
    <SaveForm :model.sync="this.saveModel" v-if="this.isSaveFormShowing" v-on:cancel="isSaveFormShowing = false" v-on:submit="saveTodo">

    </SaveForm>
    <Todo v-for="(todo, index) in todos" v-bind:key="index" :todo.sync="todo" v-on:complete="completeTodo" v-on:delete="deleteTodo" v-on:edit="showSaveForm"/>
  </div>
</template>

<script>
import Todo from './Todo';
import SaveForm from '../SaveForm';

export default {
  name: 'TodoList',
  components: {
    Todo,
    SaveForm,
  },
  methods: {
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
          id: this.todos.length + 1,
        });
      }

      this.isSaveFormShowing = false;
    },
    completeTodo(todo) {
      const index = this.todos.indexOf(todo);
      const currentStatus = this.todos[index].status;

      this.todos[index].status = currentStatus === 'opened' ? 'closed' : 'opened';
    },
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);

      this.$uncontrolledConfirmationModal.show({
        title: 'Excluir',
        text: 'Tem certeza que deseja excluir isto? A ação não poderá ser desfeita',
        onConfirm: () => this.todos.splice(index, 1),
      });
    },
  },
  data() {
    return {
      isSaveFormShowing: false,
      saveModel: {},
      todos: [
        {
          id: 1,
          title: 'Desenvolver um Web-app capaz de criar, editar, remover e ordenar os itens de um Todo-list.',
          status: 'closed',
          description: 'Configurações: Os campos para filtro/busca são: Título do item, Status (itens aberto, concluída), Prioridade (Baixa, Média e Alta)',
          priority: 'low',
        },
        {
          id: 2,
          title: 'O Web-App deverá ser capaz de salvar os dados, (pode ser desde localStorage até o Firebase).',
          status: 'opened',
          description: 'Adicionar o botão de remoção',
          priority: 'normal',
        },
        {
          id: 3,
          title: 'Desenvolver uma API para consumir e servir estes dados.',
          status: 'opened',
          description: 'Desenvolver todo o app em Vue.',
          priority: 'high',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
