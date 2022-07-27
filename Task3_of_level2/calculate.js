var addToDoButton = document.getElementById('addtask');
var toDoContainer = document.getElementById('toDoContainer');
var inputdata = document.getElementById('inputdata');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputdata.value;
    toDoContainer.appendChild(paragraph);
    inputdata.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})


