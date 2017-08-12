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

TODO: Make checkbox item to simplify entering label>textbox elements in the template.

Vue.component('checkboxItem', {
  template: '<label><input type="checkbox" :v-model="category" :value="line" @change="onChange">{{ line }}</label>',
  props: ['line', 'category'],
  methods: {
    onChange: function(event){
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