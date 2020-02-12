import DefaultLayout from './layouts/Default.vue'
import './directives/unfocus-when-click'

export default function(Vue) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
