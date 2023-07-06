document.addEventListener('DOMContentLoaded', function() {
  var formWrapper = document.getElementById('form-wrapper');

  loadForm('login');

  function loadForm(formType) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          formWrapper.innerHTML = xhr.responseText;

          document.addEventListener('click', function(e) {
            var target = e.target;
            if (target.id === 'login-link') {
              e.preventDefault();
              console.log('Login clicked');
              loadForm('login');
            } else if (target.id === 'register-link') {
              e.preventDefault();
              console.log('Registration clicked');
              loadForm('registration');
            }
          });
        } else {
          console.log('Error loading form:', xhr.status);
        }
      }
    };
    xhr.open('GET', './templates/' + formType + '.html', true);
    xhr.send();
  }
});
