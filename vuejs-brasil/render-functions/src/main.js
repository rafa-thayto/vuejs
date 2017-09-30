// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* FORMAS DE RENDERIZAR */
  // render: h => h(App)
  
  // template: '<App/>',
  // components: { App }

  // Bem mais interessante dessa forma
  render (h) {
    return h(App)
  }

/* 
  render (createElement) {
    // o createElement recebe 3 parâmetros
    // 1 = tag html; 2 = options; 3 = array de filhos
    // NÃO É RECOMENDÁVEL
    return createElement('h1', {
      attrs: {
        id: 'rafael'
      }
      // Quando não tiver nenhum array de filhos você pode tirar o
      // domProps e inserir ele diretamente
      // domProps: {
      //   innerHTML: 'Hello World'
      // }
    }, [
      createElement('h1', 'Hello from h1'),
      createElement('p', 'Hello from paragraphy')
    ])
  }
 */
  /* O "h" é um shorthand para $createElement*/
})
