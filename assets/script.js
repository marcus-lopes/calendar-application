var currentDay = document.querySelector('#currentDay');
var table = document.querySelector('.table');
var textArea = document.querySelectorAll('.textArea');
//date variables
var date = new Date();
var year = date.getFullYear();
var today = date.getDate();
var currentMonth = date.getMonth() + 1;

var todos = JSON.parse(localStorage.getItem('todos')) || [];

function loadValues(){
    textArea[0].value = todos[0] || "";
    textArea[1].value = todos[1] || "";
    textArea[2].value = todos[2] || "";
    textArea[3].value = todos[3] || "";
    textArea[4].value = todos[4] || "";
    textArea[5].value = todos[5] || "";
    textArea[6].value = todos[6] || "";
    textArea[7].value = todos[7] || "";
    textArea[8].value = todos[8] || "";   
}
loadValues();

function showDate() {
    currentDay.textContent = date;
}
showDate();

table.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('button')) {
        var idBtn = $(element).attr('data-index');
        saveTodo(textArea[idBtn].value, idBtn);
    }
})

function saveTodo(todo, hour) {;
    todos[hour] = todo;
    localStorage.setItem("todos", JSON.stringify(todos));
}
