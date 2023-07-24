const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //u00d7 is code for cross icon.
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
} 
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();



// ANOTHER WAY (JAVASCRIPT)

// const inputbox = document.getElementById("input-box");
// const listcontainer = document.getElementById("list-container");

// function addTask() {
//   if (inputbox.value === "") {
//     alert("You must write something!");
//   } else {
//     let task = inputbox.value;
//     addTaskToList(task);
//     inputbox.value = "";
//     saveData();
//   }
// }

// function addTaskToList(task) {
//   let li = document.createElement("li");
//   li.innerHTML = task;
//   listcontainer.appendChild(li);
//   let span = document.createElement("span");
//   span.innerHTML = "\u00d7"; //u00d7 is the code for the cross icon.
//   li.appendChild(span);
// }

// listcontainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

// function saveData() {
//   const tasks = Array.from(listcontainer.children).map((li) => li.innerHTML);
//   localStorage.setItem("data", JSON.stringify(tasks));
// }

// function showTask() {
//   const data = localStorage.getItem("data");
//   if (data) {
//     const tasks = JSON.parse(data);
//     tasks.forEach((task) => addTaskToList(task));
//   }
// }

// // Call showTask when the DOM is loaded
// document.addEventListener("DOMContentLoaded", showTask);
