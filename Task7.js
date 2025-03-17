document.getElementById("addTask").addEventListener("click", function() {
    let taskText = document.getElementById("taskInput").value.trim();
    if (!taskText) return;
    addTask(taskText);
    document.getElementById("taskInput").value = "";
});

function addTask(taskText) {
    let task = document.createElement("li");
    task.innerText = taskText;
    task.className = "task" ;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function() {
        task.remove();
    });
    
    task.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(task);
}
