const table = document.getElementById('table');
const tbody = document.getElementById('tbody');
const testBtn = document.getElementById('test-btn');
const studentsCounter = document.getElementById('students-counter');
let studCountValue = 0;

testBtn.addEventListener('click', insertEntry);

function insertEntry() {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdGender = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdProgram = document.createElement('td');
    const tdLastColumn = document.createElement('td');

    const txtName = document.createTextNode('Mark Janlee Corpuz D.');
    const txtGender = document.createTextNode('Male');
    const txtEmail = document.createTextNode('example@gmail.com');
    const txtProgram = document.createTextNode('BSIT');
    const txtLastColumn = document.createTextNode('Yes');

    tdName.appendChild(txtName);
    tdGender.appendChild(txtGender);
    tdEmail.appendChild(txtEmail);
    tdProgram.appendChild(txtProgram);
    tdLastColumn.appendChild(txtLastColumn);


    tdLastColumn.classList.add('yes-icon');

    tbody.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdGender);
    tr.appendChild(tdEmail);
    tr.appendChild(tdProgram);
    tr.appendChild(tdLastColumn);

    studCountValue++;
    studentsCounter.textContent = studCountValue.toString();
}