document.addEventListener('DOMContentLoaded', function() {
    var loginLink = document.querySelector('a[href="#form-login"]');
    var registrationLink = document.querySelector('a[href="#form-registration"]');
    var formLogin = document.getElementById('form-login');
    var formRegistration = document.getElementById('form-registration');
  
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      formLogin.style.display = 'block';
      formRegistration.style.display = 'none';
    });
  
    registrationLink.addEventListener('click', function(event) {
      event.preventDefault();
      formLogin.style.display = 'none';
      formRegistration.style.display = 'block';      
    });
  });
  