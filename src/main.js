import DefaultLayout from './layouts/Default.vue'
import './directives/unfocus-when-click'
import 'github-markdown-css'

export default function(Vue) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
