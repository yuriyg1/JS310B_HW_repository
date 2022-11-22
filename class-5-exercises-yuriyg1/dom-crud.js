// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let aElement = document.createElement('a')
aElement.setAttribute("id", "cta")
aElement.textContent = "Buy Now!"

let p = document.querySelector('p') //hook the p tag
p.after(aElement) //place the 'Buy Now' anchor tag after p

// Access (read) the data-color attribute of the <img>,
// log to the console
let image = document.querySelector('img') 
console.log('image color: ', image.dataset.color)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let lis = document.querySelector('ul') 
third = lis.children[2]
third.setAttribute('class','highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
p.remove()
