window.addEventListener("DOMContentLoaded",domLoaded());

function domLoaded(){
    document.getElementById("taskBtn").addEventListener("click",addBtnClick);
    document.getElementById("taskBox").addEventListener("keyup",function(e){if(e.key==="Enter"){addBtnClick();}});
}


function addBtnClick(e){
    e.preventDefault();
    let task = document.getElementById("taskBox").value;
    if(task!==""){addTask(task);}
    document.getElementById("taskBox").value="";
    document.getElementById("taskBox").focus();
}

function addTask(task){
    let newTask = document.getElementById("taskList").appendChild(document.createElement("li"));
    newTask.innerHTML='<span class="task-text">'+task+'<button class="done-btn">&#10006;</button></span>';
    let btnArray = document.querySelectorAll(".done-btn");
    btnArray[btnArray.length-1].addEventListener("click",removeTask);
}

function removeTask(e){
    let listSpan = e.target.parentNode.parentNode;
    listSpan.parentNode.removeChild(listSpan);
}