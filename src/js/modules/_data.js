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
    version: '0.9.10',
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
    notes: '',
    temp: {
        customsoftware: ''
    }
};
