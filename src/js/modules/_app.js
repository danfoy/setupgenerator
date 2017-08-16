/* global console, Vue */


// Gets the creation date in UK format
var creationDate = function () {
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
    sku: '',
    service: ''
  },
  customerinfo: {
    title: '',
    firstname: '',
    surname: '',
    address: '',
    telephone: ''
  },
  setupoptions: {
    recoverymedia: true
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
Vue.component('checkboxItem', {
  template: '<label><input type="checkbox" v-bind:true-value="{ name: value, required: true }" v-bind:false-value="{ name: value, required: false }">{{ value }}</label>',
  props: {
    checked: Boolean,
    value: String
  }
});
*/


// Root Vue.js instance
var vm = new Vue({

  el: '#app',
  data: data,
  computed: {
    customerInfoComplete: function () {
      if (this.customerinfo.title && this.customerinfo.firstname && this.customerinfo.surname && this.customerinfo.address && this.customerinfo.telephone) {
        return true;
      } else {
        return false;
      }
    }
  }

});
