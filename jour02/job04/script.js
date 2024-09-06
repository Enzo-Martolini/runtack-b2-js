let fullname = document.getElementById('student-fullname')
let email = document.getElementById('student-email')
let gender = document.getElementById('student-gender')
let grade = document.getElementById('student-grade')
let birthdate = document.getElementById('student-birthdate')
let button = document.getElementById("submit-btn")


function my_insert_student(event) {

    event.preventDefault()

    var data = {
        fullname: fullname.value,
        email: email.value,
        gender: gender.value,
        grade: grade.value,
        birthdate: birthdate.value
    };

    fetch('http://localhost:8000/jour02/job04/request.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => console.log("reponse du serveur : " + data))
    .catch((error) => console.error('Error:', error));

    }

button.addEventListener("click", my_insert_student)