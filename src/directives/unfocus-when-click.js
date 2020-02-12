// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue'

Vue.directive('unfocus-when-click', {
  inserted: el => {
    el.addEventListener('click', e => {
      e.currentTarget.blur()
    })
  }
})
