// import { API_KEY } from "./api-key";
const API_KEY = 'Natqv1tOh8zlgtIvA3Hx1PRSARYj1pe0'

const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const lineBreak = document.createElement('br');
const hr = document.createElement('hr');
const node = document.createElement("li");

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;
  const subject = 'hardcover-fiction';

  const url = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`

  fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    for(let i=0;i<5;i++){
      let author = responseJson.results.books[i].author;
      let title = responseJson.results.books[i].title;
      let desc = responseJson.results.books[i].description;
      let img = responseJson.results.books[i].book_image;
      let lib = ` Author: ${author},  Title: ${title},  Description: ${desc}`
      console.log(lib);

        // Create an "li" node:
        const node = document.createElement("li");

        // Display title, author & description in order list
        const textnode = document.createTextNode(`${lib}`);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);

        // Create an "img" node:
        const pic = document.createElement("img");
        pic.src = img;
        node.appendChild(pic);
    }
  });

  //Clear form
  yearEl.value = ''
  monthEl.value = ''
  dateEl.value = ''
});
