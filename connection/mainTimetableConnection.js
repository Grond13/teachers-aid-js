export async function GetTimetable() {
  //const token = store.state.token;
  //console.log("sending token: " + token);

  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost/teachers-aid-api-js/temp/getTimetable.php', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          //console.log(xhr.responseText);
          resolve(xhr.responseText);
        } else {
          reject(new Error(`HTTP error: ${xhr.status}`));
        }
      }
    };

    //const requestData = JSON.stringify({ token: token }); 

    xhr.send();
  });
}
