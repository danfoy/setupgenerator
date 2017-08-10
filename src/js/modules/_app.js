/* global console, Vue */

// Data Object

var data = {
  version: '0.1.0',
  title: '',
  firstname: '',
  surname: '',
  address: '',
  telephone: '',
  software: [
    {
      name: 'iTunes',
      licenses: 1
    },
    {
      name: "Office",
      licenses: 2
    }
  ]
};


// Components

Vue.component('lineitem', {
  template: '<tr><td class="output-line">Application: {{ line.name }}<div class="tickbox"></div></td></tr>',
  props: ['line']
});

Vue.component('checkboxItem', {
  template: '<label><input type="checkbox" v-bind:value="line" @change="onChange"><slot>{{ line }}</slot></label>',
  props: ['line'],
  methods: {
    onChange: function(event){
      this.$emit('input', event.target.checked);
    }
  }
});


// Root Vue.js instance
var vm = new Vue({

  el: '#app',
  data: data

});
