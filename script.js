const btn = document.querySelector("#input-btn");
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

let myLeads = [];


function saveBtn(){
myLeads.push(inputEl.value)
inputEl.value = '';
renderLeads()
storage()
}

function storage(){
    const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    if(leadsFromLocalStorage){
           myLeads = leadsFromLocalStorage
           renderLeads()
    }
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

function storageClear(){
    localStorage.clear()
    myLeads = []
    renderLeads()

}

btn.addEventListener('click', saveBtn)
deleteBtn.addEventListener('dblclick', storageClear);