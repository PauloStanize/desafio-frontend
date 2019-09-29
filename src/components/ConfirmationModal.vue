<template>
  <div class="modal-area" v-if="visible">
    <div class="modal-wrapper">
      <div class="modal-body">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
      </div>

      <!-- <div class="modal-footer">
        <button class="modal-button" @click="hide">Cancelar</button>
        <button class="modal-button" @click="confirm">Confirmar</button>
      </div> -->

      <div class="modal-footer">
        <CustomButton class="btn btn-danger" @click="hide">Cancelar</CustomButton>
        <CustomButton class="btn btn-primary" @click="confirm">Confirmar</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import UncontrolledConfirmationModal from '../plugins/UncontrolledConfirmationModal';
import CustomButton from './CustomButton';

export default {
  name: 'ConfirmationModal',
  components: {
    CustomButton
  },
  data() {
    return {
      title: '',
      text: '',
      onConfirm: {},
      onCancel: {},
      visible: false,
    };
  },
  methods: {
    hide() {
      this.visible = false;
    },
    confirm() {
      if (typeof this.onConfirm === 'function') {
        this.onConfirm();
        this.hide();
      } else {
        this.hide();
      }
    },
    show(params) {
      this.visible = true;
      this.title = params.title;
      this.text = params.text;
      this.onConfirm = params.onConfirm;
    },
  },
  beforeMount() {
    UncontrolledConfirmationModal.EventBus.$on('show', (params) => {
      this.show(params);
    });
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
  justify-content: flex-end;
  padding: 10px 15px;
}
</style>
