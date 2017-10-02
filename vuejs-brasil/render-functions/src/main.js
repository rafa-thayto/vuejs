import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // render: h => h(App)

  // h é um shorthand para createElement
  render(h) {
    return h(App)
  }
  /* render(createElement) {
    // createElement recebe 3 parâmetros
    // 1: tag html; 2: propriedades; 3: array de filhos
    return createElement('div', {
      attrs: {
        id: 'Rafael'
      },
      // Quando você não tiver um array de filhos, você pode tirar o
      // dom props e colocar direto
      // domProps: {
      //   innerHTML: 'Hello World'
      // }
    }, [
      createElement('h1', 'Hello World from h1'),
      createElement('p', 'Hello from paragrapher'),
    ])
  } */
})
