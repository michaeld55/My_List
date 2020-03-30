document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);
    
    const deleteAllButton = document.querySelector('#delete-all')
    deleteAllButton.addEventListener('click', handleClick);
  
  });

  
  const handleClick = () => {
    const list = document.querySelector("#list");
    let child = list.lastElementChild;
    while(child) {
      list.removeChild(child);
      child = list.lastElementChild; 
    };
  };

  const handleFormSubmit = function (event) {
    event.preventDefault();
  
    const listItem = createlistItem(event.target);
    const list = document.querySelector('#list');
    list.appendChild(listItem);
  
    event.target.reset();
  }
  
  const createlistItem = function (form) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
  
    const title = document.createElement('h2');
    title.textContent = capitalLetter(form.title.value);
    listItem.appendChild(title);
  
    const publisher = document.createElement('h3');
    publisher.textContent = capitalLetter(form.publisher.value);
    listItem.appendChild(publisher);

    const developer = document.createElement('h4');
    developer.textContent = capitalLetter(form.developer.value);
    listItem.appendChild(developer);
  
    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    listItem.appendChild(genre);
  
    return listItem;
  }

  function capitalLetter(string){
  string = string.split(" ");

    for (let index = 0, length = string.length; index < length; index++) {
      string[index] = string[index][0].toUpperCase() + string[index].substr(1);
    }

    return string.join(" ");
}
