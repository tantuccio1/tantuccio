var form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var formTxt = new FormData(form);

  var psw = formTxt.get('psw');
  var psw1 = formTxt.get('psw1');

  var hasNum = /\d/.test(psw);

  if (psw.length < 5) {
    var el = document.getElementById('notice');
    el.textContent = 'пароль должен содержать более 5 символов';
  } else if (!hasNum) {
    var el = document.getElementById('notice');
    el.textContent = 'пароль должен содержать хотя бы 1 цифру';
  } else if (psw !== psw1) {
    var el = document.getElementById('notice');
    el.textContent = 'пароли не совпадают';
  } else {
    var el = document.getElementById('notice');
    el.textContent = 'Вы успешно зарегестрировались';
  }
});


var formAuth = document.getElementById('form-auth');
formAuth.addEventListener('submit', (e) => {
  e.preventDefault();
  var formAuthTxt = new FormData(formAuth);

  var phone = formAuthTxt.get('phone');
  var password = formAuthTxt.get('password');

  var validPhone = "89991234567";
  var validPassword = "password12";

  if (phone === validPhone && password === validPassword) {
    var el = document.getElementById('notice-auth');
    el.textContent = 'Авторизация выполнена успешно';
  } else {
    var el = document.getElementById('notice-auth');
    el.textContent = 'Неверный телефон или пароль';
  }
});