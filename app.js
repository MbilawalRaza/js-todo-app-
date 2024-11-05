
var input = document.getElementById("inp");
var parent = document.getElementById('parent');
var data = [];
let oldVal = '';
var currentIndex = null;

function addTodo() {
  if (!input.value) {
    showAlert("Required field is missing");
    return;
  }
  var currentDate = new Date();

  var dateTimeString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
  data.push({ userval: input.value, date: dateTimeString });
  renderList();
  console.log(data);
  input.value = '';
}

function renderList() {
  parent.innerHTML = `
    <ul>
    ${data.map((item, index) => `
        <li style="list-style: none;" >
        </br>
            <span id="todotxt">${item.userval}</span>
            <li id="dateli">date:<span>${item.date}</span></li>
            <div class="d-flex gap-4">
                <button class="btn btn-info" onclick="editItem(${index}), getindex(${index})">Edit Todo</button>
                <button class="btn btn-danger" onclick="deleteitem(${index})">Delete Todo</button>
            </div>
        </li>
    `).join('')}
    </ul>
    `;
}

function deleteitem(index) {
  data.splice(index, 1);
  renderList();
}

function deleteAll() {
  data.splice(0, data.length);
  renderList();
  todoadd.style.display = 'block';
  todoupdate.style.display = 'none';
}

function getindex(index) {
  oldVal = data[index].userval;
  currentIndex = index;
}

function editItem(index) {
  todoadd.style.display = 'none';
  todoupdate.style.display = 'block';
  input.value = oldVal;
  input.value = data[index].userval;
}

function updatedvalreal() {
  const newval = input.value;
  if (newval && currentIndex !== null) {
    data[currentIndex].userval = newval;
    renderList();
    input.value = '';
    todoadd.style.display = 'block';
    todoupdate.style.display = 'none';
    currentIndex = null;
  }
}

function showAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

