// Get references
let task = document.querySelector("#task");
let time = document.querySelector("#time"); // NEW: time input
let add = document.querySelector("#add");
let taskTable = document.querySelector("#taskTable tbody");

// Add task
add.addEventListener("click", () => {
    let taskValue = task.value.trim();
    let timeValue = time.value; // NEW: get time

    if (taskValue && timeValue) {
        let row = taskTable.insertRow();

        // Create cells
        let cell1 = row.insertCell(0); // NO
        let cell2 = row.insertCell(1); // Task
        let cell3 = row.insertCell(2); // Time
        let cell4 = row.insertCell(3); // Action

        // Fill in values
        cell1.textContent = taskTable.rows.length; // auto-number
        cell2.textContent = taskValue;
        cell3.textContent = timeValue;

        // Add delete icon
        let deleteImg = document.createElement("img");
        deleteImg.src = "OIP.jpg"; // use your actual trash icon
        deleteImg.alt = "Delete Task";
        deleteImg.style.width = "40px";
        deleteImg.style.height = "40px";
        deleteImg.style.cursor = "pointer";
        deleteImg.onclick = function () {
            removeTask(this);
        };
        cell4.appendChild(deleteImg);

        // Clear input fields
        task.value = "";
        time.value = "";
    } else {
        alert("Please enter both a task and time.");
    }
});

// Delete row and re-number remaining
function removeTask(element) {
    let row = element.parentElement.parentElement;
    row.remove();
    renumberTasks(); // Renumber tasks after deletion
}

// Update NO column
function renumberTasks() {
    const rows = taskTable.querySelectorAll("tr");
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
}
