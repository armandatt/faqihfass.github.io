import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faHtml5, faInstagram, faJs, faLinkedin, faNodeJs, faTwitter, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faCaretDown, faCaretRight, faFileImage, faFolderOpen, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFile, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faNodeJs, faTwitter, faVuejs, faCodeBranch, faCaretDown, faCaretRight, faFileImage, faFolderOpen, faInfoCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
