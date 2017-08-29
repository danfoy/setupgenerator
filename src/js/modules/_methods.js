/*global document */

/* 

printSheet uses document.execCommand() to resolve a bug where IE11 disregards '@media print' media queries.

*/

var methods = {
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
};