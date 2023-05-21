var formAuth = document.getElementById('form-auth');
formAuth.addEventListener('submit', function(e) {
  e.preventDefault();
  var phoneInput = document.getElementById('phone-input');
  var passwordInput = document.getElementById('password-input');
  var phone = phoneInput.value;
  var password = passwordInput.value;
  var validPhone = "89991234567";
  var validPassword = "password12";

  if (phone === validPhone && password === validPassword) {
    var noticeAuth = document.getElementById('notice-auth');
    noticeAuth.textContent = 'Авторизация выполнена успешно';
    window.location.href = 'profile.html';
  } else {
    var noticeAuth = document.getElementById('notice-auth');
    noticeAuth.textContent = 'Неверный телефон или пароль';
  }
});
