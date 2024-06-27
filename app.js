const taskContent = document.getElementById("task_content"); // taking data from html code

const inputBox = document.getElementById("input_box");

// function of adding task
function btnClick(){
    if(inputBox.value === ""){
        alert(" Please write some task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContent.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
    inputBox.value = "";
}

// cheching and unchecking of box 

taskContent.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},false);

// saving data after reloading and closing of browser.

function saveData(){
    localStorage.setItem("data",taskContent.innerHTML);
}

function showSavedTask(){
    taskContent.innerHTML = localStorage.getItem("data");
}
showSavedTask();