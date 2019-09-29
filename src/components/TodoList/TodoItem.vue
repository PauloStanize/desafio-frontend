<template>
  <div class="item" :class="todoPriority">
    <div>
      <div class="button px-3" @click="fireAction(actions.COMPLETE)">
        <font-awesome-icon :icon="['far', 'square']" v-if="todo.status === 'opened'" title="Aberto" />
        <font-awesome-icon :icon="['far', 'check-square']" v-else title="Fechado" />
      </div>
    </div>
    <div>
      <b>{{todo.title}}</b>
      <div>{{todo.description}}</div>
    </div>
    <div class="px-2 options">
      <div class="button py-2">
        <font-awesome-icon :icon="['far', 'edit']" title="Editar" @click="fireAction(actions.EDIT)"/>
      </div>

      <div class="button py-2">
        <font-awesome-icon :icon="['far', 'minus-square']" title="Excluir" @click="fireAction(actions.DELETE)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    return {
      actions: {
        COMPLETE: 'complete',
        EDIT: 'edit',
        DELETE: 'delete',
      },
    };
  },
  computed: {
    todoPriority() {
      const { priority } = this.todo;

      if (priority === 'low') {
        return 'low-priority';
      } if (priority === 'normal') {
        return 'normal-priority';
      }
      return 'high-priority';
    },
  },
  methods: {
    fireAction(action) {
      this.$emit(action, this.todo);
    },
  },
};
</script>

<style scoped lang="scss">
  $low-priority: #13d67f;
  $normal-priority: #e2f130;
  $high-priority: #ff2b2b;
  $priority-width: 5px;

  .item {
    border-bottom: 1px solid #ccc;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
  }

  .low-priority {
    box-shadow: inset $priority-width 0 0 $low-priority;
  }

  .normal-priority {
    box-shadow: inset $priority-width 0 0 $normal-priority;
  }

  .high-priority {
    box-shadow: inset $priority-width 0 0 $high-priority;
  }

  .button {
    height: 15px;
    width: 15px;
    cursor: pointer;
  }

  .options {
    margin-left: auto;
  }
</style>
