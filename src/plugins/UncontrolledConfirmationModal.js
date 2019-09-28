// https://medium.com/@panzelva/writing-modals-for-vue-js-callable-from-anywhere-6994d180451

import ConfirmationModal from '../components/ConfirmationModal';

const UncontrolledConfirmationModal = {
  install(Vue, options) {
    this.EventBus = new Vue();

    Vue.component('uncontrolled-confirmation-modal', ConfirmationModal);
    Vue.prototype.$uncontrolledConfirmationModal = {
      show(params) {
        UncontrolledConfirmationModal.EventBus.$emit('show', params);
      },
    };
  },
};

export default UncontrolledConfirmationModal;
