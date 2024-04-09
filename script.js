const btn = document.querySelector("#input-btn");
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector("#ul-el");
let myLeads = [];


function saveBtn(){
myLeads.push(inputEl.value)

for (let i = 0; i < myLeads.length; i++) {
  let li = document.createElement('li');
  li.textContent = myLeads[i];
  ulEl.appendChild(li);
}

}
btn.addEventListener('click', saveBtn)