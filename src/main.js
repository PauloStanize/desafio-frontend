import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faSquare, faEdit, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import UncontrolledConfirmationModal from './plugins/UncontrolledConfirmationModal'
import store from './store'

library.add(faCheckSquare, faSquare, faEdit, faMinusSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(UncontrolledConfirmationModal)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
