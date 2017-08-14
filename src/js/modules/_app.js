/* global console, Vue */


// Gets the creation date in UK format
var creationDate = function() {
  var machineDate = new Date();
  var dateOptions = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  };
  var localDate = machineDate.toLocaleString('en-GB', dateOptions);
  return localDate;
};


// THE DATA OBJECT
var data = {
  version: '0.1.0',
  basicinfo: {
    colleague: '',
    date: creationDate(),
    platform: '',
    model: ''
  },
  customerinfo: {
    title: '',
    firstname: '',
    surname: '',
    address: '',
    telephone: ''
  },
  software: [],
  notes: ''
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
