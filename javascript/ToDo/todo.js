var taskName = document.getElementById('taskName');
var addBuutton = document.getElementById('addBtn');
var incompleteTask = document.getElementById('incompleteTask');
var staticIncompleteTaskTextBox = document.getElementById('staticIncompleteTaskTextBox');
var staticIncompleteTaskLabel = document.getElementById('staticIncompleteTaskLabel');
var staticIncompleteTaskEditButton = document.getElementById('EditTask');
var staticIncompleteTaskEditCompleteButton = document.getElementById('EditComplete');
var staticIncompleteTaskCheckBox = document.getElementById('staticIncompleteCheckbox');
var staticIncompleteTaskList = document.getElementById('editMode');
var completedTasksUl = document.getElementById('completedTasks');
function addTask() {
    var taskItem = document.createElement('li');
    var checkBox = document.createElement('input');
    var textBox = document.createElement('input');
    var label = document.createElement('label');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');

    label.innerText = taskName.value;
    checkBox.setAttribute('type', 'checkbox');
    textBox.setAttribute('type', 'text');
    editButton.innerText = "Edit";
    deleteButton.innerText = "Delete";
    textBox.style.display = "none";

    var array = [checkBox, textBox, label, editButton, deleteButton];
    array.map(function(element){
        taskItem.appendChild(element);
    });
    incompleteTask.appendChild(taskItem);
}

function editStaticTask(){
    staticIncompleteTaskTextBox.style.display = "inline";
    staticIncompleteTaskLabel.style.display = "none";
    staticIncompleteTaskTextBox.value = staticIncompleteTaskLabel.textContent;
    staticIncompleteTaskEditCompleteButton.style.display = "inline";
    staticIncompleteTaskEditButton.style.display = "none";
}

function EditComplete(){
    staticIncompleteTaskTextBox.style.display = "none";
    staticIncompleteTaskLabel.style.display = "inline";
    staticIncompleteTaskLabel.innerText = staticIncompleteTaskTextBox.value;
    staticIncompleteTaskEditCompleteButton.style.display = "none";
    staticIncompleteTaskEditButton.style.display = "inline";
}

function moveToComplete(){
    completedTasksUl.appendChild(staticIncompleteTaskList);
    staticIncompleteTaskTextBox.style.display = "none";
    staticIncompleteTaskCheckBox.style.display = "none";

}