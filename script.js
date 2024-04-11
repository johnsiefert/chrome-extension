const btn = document.querySelector('#input-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');
const deleteBtn = document.querySelector('#delete-btn');
const saveTabBtn = document.querySelector('#save-btn');

let myLeads = [];


function inputBtn() {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  render(myLeads);
  storage();
}

function tabBtn() {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 myLeads.push(tabs[0].url);
 localStorage.setItem('myLeads', JSON.stringify(myLeads));
 render(myLeads);
})
}

function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `
<li>
<a target = '_blank' href = 'https://${leads[i]}'>
https://${leads[i]}
 </a>
 </li>`;
  }
  ulEl.innerHTML = listItems;
}

function storage() {
  const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
  }
}

function storageClear() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
}

btn.addEventListener('click', inputBtn);
deleteBtn.addEventListener('dblclick', storageClear);
saveTabBtn.addEventListener('click', tabBtn);

// function renderLead(){
//     let listItem = '<li>' + inputEl.value + '</li>';
//     ulEl.innerHTML += listItem;
// }
