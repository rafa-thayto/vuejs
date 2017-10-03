import Vue from 'vue'
import App from './App.vue'

// Primeiro parâmetro é o nome do filtro
// O segundo é uma função
// E como parâmetro você recebe o valor passado pelo filtro
Vue.filter('reverse', (value, parametro) => {
  console.log(value);
  console.log(parametro);
  return value.split('').reverse().join('');
});

new Vue({
  el: '#app',
  render: h => h(App)
})
 
