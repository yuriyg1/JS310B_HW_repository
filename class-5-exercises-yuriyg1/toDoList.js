const ul = document.querySelector('.today-list')
// If an li element is clicked, toggle the class "done" on the <li>
// const liEl = document.querySelector('li')
const liEls = document.querySelectorAll('li')

liEls.forEach(i => {
  i.parentElement.onclick = function(){
    this.classList.toggle('done')
  }
})

// If a delete link is clicked, delete the li element / remove from the DOM
const dellete = document.querySelectorAll('.delete')

dellete.forEach(item => {
  item.addEventListener('click', e => {
    e.target.parentElement.remove()
  })
})
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  console.log('Input1: ', input)

  let li = document.createElement('li')

  let span = document.createElement('span')
  span.textContent = text
  li.appendChild(span)

  let a = document.createElement('a')
  a.textContent = 'Delete'
  a.classList.add('delete')
  li.appendChild(a)
  ul.appendChild(li)

  let up = document.createElement('a')
  up.textContent = '↑'
  up.classList.add('up')
  li.appendChild(up)
  ul.appendChild(li)

  let down = document.createElement('a')
  down.textContent = '↓'
  down.classList.add('down')
  li.appendChild(down)
  ul.appendChild(li)

  input.value = '' //clear the textBox

};

const pushh = document.querySelector('.add-item')
pushh.addEventListener('click', addListItem)

//bubble up
ul.addEventListener('click', e =>{
  if(e.target.tagName === 'SPAN'){
    e.target.parentElement.classList.toggle('done')
  }
  if (e.target.className === 'delete'){
    e.target.parentElement.remove()
  }

  if (e.target.className === 'up'){
    previousNode = e.target.parentElement.previousElementSibling
    currentNode = e.target.parentElement

    const afterNode = currentNode.nextElementSibling;
    const parent = currentNode.parentNode;
    previousNode.replaceWith(currentNode);
    parent.insertBefore(previousNode, afterNode);

  }

  if (e.target.className === 'down'){
    nextNode = e.target.parentElement.nextElementSibling
    currentNode = e.target.parentElement

    const afterNode = nextNode.nextElementSibling;
    const parent = nextNode.parentNode;
    currentNode.replaceWith(nextNode);
    parent.insertBefore(currentNode, afterNode);

  }
})