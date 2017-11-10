function checkjs () {
  var appel = document.getElementById('app');
  var checkjsmsg = document.getElementById('checkjsmsg');
  checkjsmsg.style.display = 'none';
  appel.classList.remove('nojs');
}

checkjs();
