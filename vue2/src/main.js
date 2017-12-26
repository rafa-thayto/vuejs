import Vue from 'vue'
import {Time} from './time'
import 'bootstrap/dist/css/bootstrap.css'

new Vue({
  el: '#app',
  data: {
    times : [
      new Time('Time 1', require('./assets/logo.png')),
      new Time('Time 2', require('./assets/logo.png')),
      new Time('Time 3', require('./assets/logo.png')),
      new Time('Time 4', require('./assets/logo.png')),
      new Time('Time 5', require('./assets/logo.png'))
    ],
    alfabeto : {
      a : 'A',
      b : 'B',
      c : 'C',
      d : 'D',
      e : 'E',
    }
  }
});
