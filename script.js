const form = document.getElementById('registration-form');
const registeredStudents = document.getElementById('registered-students');
let students = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const imageLink = document.getElementById('image-link').value;
    const collegeName = document.getElementById('collegeName').value;
    const rollNumber = document.getElementById('rollNumber').value;
    let gender;

    if (document.getElementById('male').checked) {
        gender = 'male';
    } else if (document.getElementById('female').checked) {
        gender = 'female';
    } else if (document.getElementById('other').checked) {
        gender = 'other';
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const student = { name, email, password, imageLink, collegeName, rollNumber, gender };
    students.push(student);

    const studentDataHTML = `
        <div class="student-data">
        <div class="student-image-container">
            <img src="${imageLink}" class="student-image" alt="Student Image">
            </div>
             <div class="student-details">
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Gender: ${gender}</p>
            <p>College Name: ${collegeName}</p>
            <p>Roll Number: ${rollNumber}</p>
        </div>
        </div>

    `;
    registeredStudents.innerHTML += studentDataHTML;

    form.reset();
});