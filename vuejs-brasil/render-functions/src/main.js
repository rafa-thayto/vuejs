import Vue from 'vue'
import App from './App.vue'

/*
 * Há 3 tipos de render function
 * - Template
 * - Hyperscript
 * - JSX
 */
new Vue({
  el: '#app',
  // render: h => h(App)

  // h é um shorthand para createElement
  // render(h) {
  //   return h(App)
  // }

  methods: {
    hello() {
      alert('Hello')
    }
  },
  
  render(h) {
    // no jsx você vai retornar O HTML 
    return (
      <div>
        <h1 on-click={this.hello}>Hello From JSX</h1>
      </div>
    )
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
