const btn = document.querySelector("#input-btn");
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector("#ul-el");

let myLeads = [];

function saveBtn(){
myLeads.push(inputEl.value)
inputEl.value = '';
renderLeads()

}

// function renderLead(){
//     let listItem = '<li>' + inputEl.value + '</li>';
//     ulEl.innerHTML += listItem;
// }


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
listItems += `
<li>
<a target = '_blank' href = 'https://${myLeads[i]}'>
https://${myLeads[i]}
 </a>
 </li>`;
  }
    ulEl.innerHTML = listItems
}
btn.addEventListener('click', saveBtn)