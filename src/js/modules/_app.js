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

// The printing function
// Using execCommand() to get around an IE11 bug with print stylesheets




// THE DATA OBJECT
var data = {
  version: '0.1.0',
  meta: {
    printpreview: false
  },
  basicinfo: {
    colleague: '',
    date: creationDate(),
    platform: '',
    sku: ''
  },
  customerinfo: {
    title: '',
    firstname: '',
    surname: '',
    address: '',
    telephone: '',
    alttelephone: ''
  },
  setupinfo: {
    presetup: false,
    exdemo: false,
    service: ''
  },
  setupoptions: {
    recoverymedia: false,
    customusers: false,
    datatransfer: false,
    email: false,
    installsoftware: false,
    runupdates: false
  },
  appleid: {
    type: '',
    existingemail: '',
    existingpassword: '',
    newemail: '',
    newpassword: '',
    dob: '',
    recoveryquestion1: {
      question: '',
      answer: ''
    },
    recoveryquestion2: {
      question: '',
      answer: ''
    },
    recoveryquestion3: {
      question: '',
      answer: ''
    }
  },
  useraccounts: {
    count: "1",
    account1: {
      username: '',
      password: '',
      hint: '',
      admin: true
    },
    account2: {
      username: '',
      password: '',
      hint: '',
      admin: false
    },
    account3: {
      username: '',
      password: '',
      hint: '',
      admin: false
    },
    account4: {
      username: '',
      password: '',
      hint: '',
      admin: false
    }
  },
  datatransfer: {
    account1: {
      username: '',
      password: ''
    },
    source: '',
    media: '',
    notes: ''
  },
  software: [],
  customsoftware: [],
  email: {
    newemail: false,
    existingemail: false,
    existing: {
      account1: {
        address: '',
        password: ''
      }
    },
    new: {
      account1: {
        address: '',
        password: ''
      }
    }
  },
  notes: '',
  temp: {
    customsoftware: ''
  }
};


// Components

Vue.component('lineitem', {
  template: '<tr><td class="output-line">{{ line }}<div class="tickbox"><span class="tick">&#10004;</span></div></td></tr>',
  props: {
    line: String,
    prechecked: {
      type: Boolean,
      default: false
    }
  }
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
      if (
        this.customerinfo.title && this.customerinfo.firstname && this.customerinfo.surname && this.customerinfo.telephone
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    addCustomSoftware: function () {
      this.customsoftware.push(this.temp.customsoftware);
      this.temp.customsoftware = '';
    },
    resetCustomSoftware: function () {
      this.customsoftware = [];
      this.temp.customsoftware = '';
    },
    printSheet: function () {
      document.execCommand('print', false, null);
    }
  }

});
