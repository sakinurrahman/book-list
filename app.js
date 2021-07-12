const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');
const form = document.querySelector('form');


//Create table row and data.
let createElements = () => {

  if(title.value == '' && author.value == '' && year.value == '' ){
    alert('Please input your information.')
  } else {

  let newRow = document.createElement('tr');
  let newTitle = document.createElement('td');
  let newAuthor = document.createElement('td');
  let newYear = document.createElement('td');

    //Create Title
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);
    title.value = '';
    //Create author
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);
    author.value = '';
    //Create year
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);
    year.value = '';
    bookList.appendChild(newRow);
  }

}

//Add even listener
let formSubmit = (e) => {
  e.preventDefault();
  createElements();
}


//Submit the form
form.addEventListener('submit', formSubmit);