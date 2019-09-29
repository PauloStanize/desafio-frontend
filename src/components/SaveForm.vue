<template>
  <div class="modal-area">
    <div class="modal-wrapper">
      <div class="modal-header">
        <div v-if="innerModel.id">Editar tarefa</div>
        <div v-else>Cadastrar tarefa</div>
      </div>
      <div class="modal-body">
        <CustomInput v-model="innerModel.title" placeholder="Título" />
        <CustomInput v-model="innerModel.description" placeholder="Descrição" />
        <CustomSelect v-model="innerModel.status" placeholder="Status" :options="statuses" />
        <CustomSelect v-model="innerModel.priority" placeholder="Prioridade" :options="priorities" />
      </div>

      <div class="modal-footer">
        <CustomButton class="btn btn-danger" @click="cancel">Cancelar</CustomButton>
        <CustomButton class="btn btn-primary" @click="submit">Salvar</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import CustomButton from './CustomButton';
import { prioritySeed, statusSeed } from '@/assets/optionsSeed';

export default {
  name: 'SaveForm',
  props: ['model'],
  components: {
    CustomInput,
    CustomSelect,
    CustomButton,
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
      priorities: prioritySeed,
      statuses: statusSeed,
    };
  },
  methods: {
    submit(e) {
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

.modal-header {
  font-size: 30px;
  padding: 25px 20px 0 20px;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
}
</style>
