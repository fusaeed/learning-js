var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function addListItem() {
    if (input.value.length > 0) {
        var li = document.createElement('li');
        li.setAttribute('class', 'list-group-item')
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
    }
}

function addListItemAfterKeypress(e) {
    if (input.value.length > 0 && e.keyCode === 13) {
        addListItem();
    }
}

button.addEventListener('click', addListItem)

input.addEventListener('keypress', addListItemAfterKeypress)