<template>
  <div class="modal-area">
    <div class="modal-wrapper">
      <div class="modal-body">
        <CustomInput v-model="innerModel.title" placeholder="Título" />
        <CustomInput v-model="innerModel.description" placeholder="Descrição" />
        <CustomSelect v-model="innerModel.status" placeholder="Status" v-bind:options="statusSeed" />
        <CustomSelect v-model="innerModel.priority" placeholder="Prioridade" v-bind:options="prioritySeed" />
      </div>

      <div class="modal-footer">
        <button class="modal-button" @click="cancel">Cancelar</button>
        <button class="modal-button" @click="submit">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

export default {
  name: 'SaveForm',
  props: ['isEditing', 'model'],
  components: {
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      innerModel: {
        id: this.model.id,
        title: this.model.title || '',
        description: this.model.description || '',
        status: this.model.status === undefined ? 'opened' : this.model.status,
        priority: this.model.priority || '',
      },
      prioritySeed: [
        { value: 'low', text: 'Baixa' },
        { value: 'normal', text: 'Média' },
        { value: 'high', text: 'Alta' },
      ],
      statusSeed: [
        { value: 'opened', text: 'Aberto' },
        { value: 'closed', text: 'Fechado' },
      ],
    };
  },
  methods: {
    submit() {
      this.$emit('submit', { ...this.innerModel });
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped lang='scss'>
.modal-area {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background: #00000063;

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  background: $app-background;
  width: 60%;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  bottom: 0;
  display: flex;
}

.modal-buttons {
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}
.modal-button {
  flex-grow: 1;
}
</style>
