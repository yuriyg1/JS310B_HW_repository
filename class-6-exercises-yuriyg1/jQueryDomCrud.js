$(document).ready(function(){
const $li = $('li')
const $ul = $('ul')

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
$('p').after("<a id='cta'>Buy Now!</a>")

// Access (read) the data-color attribute of the <img>,
// log to the console
const $image = $('img')
const imageColor = $image.data('color')
console.log(imageColor)

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
$($li[2]).attr('class', 'highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$('p').remove()

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$('a').click( ()=>{
    $('a').after('<p>Added to cart</p')
    $('a').remove()
})
});