const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", function() {
    
    const inputText = input.value;

    input.value = ""; //Empty input after adding chapter

    const listText = document.createElement('span');
    const listItem = document.createElement('li');
    const listButton = document.createElement('button');
    
    listText.textContent = inputText;
    listButton.textContent = '❌';
    listItem.append(listText);
    listItem.appendChild(listButton);
    list.appendChild(listItem);
    listButton.addEventListener('click', function() {list.removeChild(listItem);});

    input.focus(); //Focuses on input box for user to type input again.
});