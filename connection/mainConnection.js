export async function updateClass(updatedClass)  {
    const token = store.state.token;

    return new Promise((resolve, reject) => {
        const url = 'http://localhost/teachers-aid-api/View/updateLessonTime.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                //console.log(xhr.responseText);
                const responseData = xhr.responseText;
                resolve(responseData);
            } else {
                reject(new Error('Update request failed'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Update request error'));
        };


        xhr.send(JSON.stringify({ lessonTime: updatedClass }));
    });
}

export async function createClass(newClass) {
    const token = store.state.token;    

    return new Promise((resolve, reject) => {
        const url = 'http://localhost/teachers-aid-api/View/insertLessonTime.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {                
                const responseData = xhr.responseText;     
                console.log(responseData);            
                resolve(responseData);
            } else {
                reject(new Error('Create request failed'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Create request error'));
        };


        xhr.send(JSON.stringify({ lessonTime: newClass, token: token }));
    });
}

export async function deleteClass(deletedClass) {
    const token = store.state.token;    

    return new Promise((resolve, reject) => {
        const url = 'http://localhost/teachers-aid-api/View/deleteLessonTime.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {                
                const responseData = xhr.responseText;     
                console.log(responseData);            
                resolve(responseData);
            } else {
                reject(new Error('Delete request failed'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Delete request error'));
        };

        xhr.send(JSON.stringify({ idLessonTime: deletedClass.idLessonTime, token: token }));
    });
}

export async function getClassroomNames() {
    const token = store.state.token;
    return new Promise((resolve, reject) => {
        const url = 'http://localhost/teachers-aid-api/View/getClassroomNames.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {                
                resolve(xhr.responseText);
            } else {
                reject(new Error('Get Classroom Names request failed'));                
            }
        };

        xhr.onerror = function () {
            reject(new Error('Get Classroom Names request error'));            
        };


        xhr.send(JSON.stringify({ token: token }));
    });
}

export async function getLessonNames() {
    const token = store.state.token;

    return new Promise((resolve, reject) => {
        const url = 'http://localhost/teachers-aid-api/View/getLessonNames.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {            
                resolve(xhr.responseText);
            } else {
                reject(new Error('Get Lesson Names request failed'));                
            }
        };

        xhr.onerror = function () {
            reject(new Error('Get Lesson Names request error'));            
        };

        console.log(JSON.stringify({ token: token }));

        xhr.send(JSON.stringify({ token: token }));
    });
}
