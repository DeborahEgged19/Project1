let taskList = [];

const checkforData = () => {
    taskList = JSON.parse(localStorage.getItem("myData")) || [];
    createTasks();
}

const handleData = () => {
    var task = new Object();
    // task name 
    task.taskName = document.getElementById("taskName").value;
    // task date 
    task.taskDate = document.getElementById("taskDate").value;
    // task time
    task.taskTime = document.getElementById("taskTime").value;
    taskList.push(task);
    document.getElementById("myForm").reset();
    localStorage.setItem("myData", JSON.stringify(taskList));
    createTasks();
    fadeNote();
}

const createTasks = () => {
    var elTasks = document.getElementById("taskList");
    var data = "";
    taskList.forEach((item, index) => {
        data += `
        <div class="task" id="task${index}">
            <button class="btn" onclick="removeTask(${index})"><img src="img/ixs.png" width="30"></button>
            <p>${item.taskName}</p>
            <div class="timeDate">
                ${date1(item.taskDate)} <br/>
                ${item.taskTime}
            </div>
        </div>`;
    });
    elTasks.innerHTML = data;
}

const date1 = (date) => {
    const myNewDate = date.split("-");
    return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
}

function fadeNote() {
    var lastIndex = taskList.length - 1;
    var elDiv = document.getElementById(`task${lastIndex}`);
    elDiv.classList.add("fade");
}

const removeTask = (index) => {
    taskList.splice(index, 1);
    localStorage.setItem("myData", JSON.stringify(taskList));
    createTasks();
}


checkforData();




