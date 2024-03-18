const form = document.getElementById('form');
const tableBtn = document.getElementById('new-student-btn');
const firstName = document.getElementById('first-name');
const middleName = document.getElementById('middle-name');
const lastName = document.getElementById('last-name');
const gender = document.getElementById('sex');
const email = document.getElementById('email');
const program = document.getElementById('programs');

const table = document.getElementById('table');
const tbody = document.getElementById('tbody');
const testBtn = document.getElementById('test-btn');
const studentsCounter = document.getElementById('students-counter');
let studCountValue = 6;
studentsCounter.innerText = studCountValue.toString();


function insertEntry(e) {
    e.preventDefault();
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdGender = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdProgram = document.createElement('td');
    const tdLastColumn = document.createElement('td');

    tdName.innerText = `${lastName.value}, ${firstName.value} ${middleName.value.charAt(0)}.`;

    tdGender.innerText = gender.value;
    tdEmail.innerText = email.value;
    tdProgram.innerText = program.value;
    tdLastColumn.innerHTML = `
                  <div class="enroll-entry-group">
                    <div class="yes-icon"></div>
                    <p class="yes-text">Yes</p>
                    <div class="dots-icon"></div>
                  </div>`;

    tdLastColumn.classList.add('yes-icon');

    tr.appendChild(tdName);
    tr.appendChild(tdGender);
    tr.appendChild(tdEmail);
    tr.appendChild(tdProgram);
    tr.appendChild(tdLastColumn);
    tbody.appendChild(tr);

    studCountValue++;
    studentsCounter.innerText = studCountValue.toString();
    form.reset();
}


form.addEventListener('submit', insertEntry);