/* global console, Vue */

// Data Object

var data = {
  version: '0.1.0',
  title: '',
  firstname: '',
  surname: '',
  address: '',
  telephone: '',
  software: []
};


// Components

Vue.component('lineitem', {
  template: '<tr><td class="output-line">{{ line }}<div class="tickbox"></div></td></tr>',
  props: ['line']
});

/*
Vue.component('checkboxItem', {
  template: '<label><input type="checkbox" @change="onChange"><slot>{{ line }}</slot></label>',
  props: ['line', 'value'],
  methods: {
    onChange: function(event){
      this.$emit('change', event.target.checked);
      this.$emit('input', event.target.checked);
    }
  }
});
*/



// Root Vue.js instance
var vm = new Vue({

  el: '#app',
  data: data

});