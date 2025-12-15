function addTask() {
    const input = document.getElementById("taskInput");
    const priority = document.getElementById("taskPriority").value;

    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${input.value}</span>
        <div class="actions">
            <button class="complete-btn" onclick="completeTask(this)">✔</button>
            <button class="delete-btn" onclick="deleteTask(this)">✖</button>
        </div>
    `;

    if (priority === "important") {
        document.getElementById("importantList").appendChild(li);
    } else {
        document.getElementById("taskList").appendChild(li);
    }

    input.value = "";
}

function completeTask(button) {
    const task = button.closest("li");
    task.classList.toggle("completed");
}

function deleteTask(button) {
    const task = button.closest("li");
    task.remove();
}
