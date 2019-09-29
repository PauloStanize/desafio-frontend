<template>
  <div>
    <div class="row">
      <div>Lista de tarefas</div>
      <CustomButton class="btn btn-primary" @click="$emit('showSaveForm', {})">Criar tarefa</CustomButton>
    </div>

    <div class="row">
      <div class="search-input">
        <CustomInput @input="$emit('search', { title: $event })" placeholder="Pesquisa" />
      </div>

      <div class="search-input">
        <CustomSelect @input="$emit('search', { status: $event })" placeholder="Status" :options="statuses" />
      </div>

      <div class="search-input">
        <CustomSelect @input="$emit('search', { priority: $event })" placeholder="Prioridade" :options="priorities" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { prioritySeed, statusSeed } from '@/assets/optionsSeed';

export default {
  name: "Header",
  components: {
    CustomButton,
    CustomInput,
    CustomSelect,
  },
  props: ["showSaveForm"],
  data() {
    return {
      value: "",
      priorities: [ { value: "all", text: "Todos" }, ...prioritySeed ],
      statuses: [ { value: "all", text: "Todos" }, ...statusSeed ],
    };
  }
};
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  align-items: center;
  margin-bottom: 10px;
}

.row div {
  font-size: 20px;
}

.row .search-input {
  flex-grow: 1;
  margin: 0 20px;
}
</style>