import Vue from 'vue'
import App from './App.vue'
import MyComp from './MyComp.vue'

new Vue({
  el: '#app',
  render: h => h(MyComp)
})
