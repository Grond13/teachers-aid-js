export async function login(email, password) {
  const data = {
    email: email,
    password: password
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost/teachers-aid-api/View/Login.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {      
      if (xhr.responseText.substring(0, 5) != "ERROR") {
        const token = xhr.responseText;
        store.commit('setToken', token); 
        console.log(store.state.token); 
        router.push({ name: 'main' });
      } else {        
        console.log(xhr.responseText);
        errorAlert();
      }
    }
  };

  xhr.send(JSON.stringify(data));
}

function errorAlert() {
  const alert = document.getElementById("alert");
  alert.style.visibility = "visible";
  alert.style.paddingTop = 10;
  alert.style.marginTop = 10;
}