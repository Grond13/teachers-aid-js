export async function register(name, surname, email, password) {
    const data = {
        name: name,
        surname: surname,
        email: email,
        password: password
    };
    //console.log(data);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/teachers-aid-api/View/InsertTeacher.php", true); 
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.send(JSON.stringify(data));
}