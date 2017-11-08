var creationDate = function () {
    var machineDate = new Date();
    var dateOptions = {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
    };
    var localDate = machineDate.toLocaleDateString('en-GB', dateOptions);
    return localDate;
};
var creationTime = function () {
    var machineDate = new Date();
    var dateOptions = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
    };
    var localTime = machineDate.toLocaleTimeString('en-GB', dateOptions);
    return localTime;
};

var data = {
    version: '0.10.1',
    meta: {
        printpreview: false
    },
    basicinfo: {
        colleague: '',
        date: creationDate(),
        time: creationTime(),
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
        service: '',
        onorder: false
    },
    setupoptions: {
        recoverymedia: true,
        customusers: false,
        datatransfer: false,
        email: false,
        installsoftware: false,
        runupdates: false
    },
    appleid: {
        type: '',
        existing: {
            email: '',
            password: ''
        },
        new: {
            email: '',
            password: '',
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
        }
    },
    googleaccount: {
        type: '',
        new: {
            address: '',
            password: '',
            dob: ''
        },
        existing: {
            address: '',
            password: ''
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
        account1: {
            address: '',
            password: ''
        }
    },
    microsoftaccount: {
        type: '',
        existing: {
            address: '',
            password: ''
        },
        new: {
            address: '',
            password: ''
        }
    },
    tutorial: {
      booked: '',
      date: '',
      time: ''
    },
    notes: '',
    temp: {
        customsoftware: ''
    }
};
