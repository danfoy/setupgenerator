var computed = {
  customerInfoComplete: function () {
      if (
        this.customerinfo.title && this.customerinfo.firstname && this.customerinfo.surname && this.customerinfo.telephone
      ) {
        return true;
      } else {
        return false;
      }
    }
};