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

var data = {
  version: '0.9.4',
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
  googleaccount: {
    type: '',
    address: '',
    password: ''
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
    type: '',
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