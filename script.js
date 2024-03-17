const firstName = document.getElementById('first-name');
const middleName = document.getElementById('middle-name');
const lastName = document.getElementById('last-name');



const table = document.getElementById('table');
const tbody = document.getElementById('tbody');
const testBtn = document.getElementById('test-btn');
const studentsCounter = document.getElementById('students-counter');
let studCountValue = 4;
studentsCounter.innerText = studCountValue.toString();

testBtn.addEventListener('click', insertEntry);

function insertEntry() {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdGender = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdProgram = document.createElement('td');
    const tdLastColumn = document.createElement('td');

    tdName.innerText = 'Cabradella, Cherry A.';
    tdGender.innerText = 'FEMALE';
    tdEmail.innerText = 'cherry@gmail.com';
    tdProgram.innerText = 'BSIT';
    tdLastColumn.innerText = 'Yes';

    tdLastColumn.classList.add('yes-icon');

    tbody.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdGender);
    tr.appendChild(tdEmail);
    tr.appendChild(tdProgram);
    tr.appendChild(tdLastColumn);

    studCountValue++;
    studentsCounter.innerText = studCountValue.toString();
}