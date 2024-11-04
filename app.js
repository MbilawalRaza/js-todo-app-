

var input = document.getElementById("inp")
var parent = document.getElementById('parent')
var data = [];
let  oldVal='';
var currentIndex = null 
function addTodo(){
  data.push({userval:input.value})
  renderList()
  input.value=''
}


function renderList(){

  parent.innerHTML = `
  <ul>
  ${data.map ( (item,index) =>`
    
    <li style=" list-style: none;">
    <span> ${item.userval}</span>
    <div  class="d-flex gap-4">
    <button class="btn btn-info" onclick="editItem (${index}),getindex(${index})">edit todo</button>
    <button class="btn btn-danger" onclick="deleteitem(${index})"> delete todo </button>
    
</div>
</br>
    
    
    </li>
    `).join('')}
  </ul>
  `
}

function deleteitem(index){
  data.splice(index,1)
  renderList()
}
function deleteAll(){
  data.splice(0,data.length)
  renderList()
 }

function getindex(index){
  var oldValgetFun = data[index].userval;
  oldVal = oldValgetFun;
  currentIndex= index
}

function  editItem(index) {
  todoadd.style.display = 'none'
  todoupdate.style.display = 'block'
  input.value = oldVal;
  input.value=data[index].userval
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
