$(document).ready(function(){
// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const linkFunc = function(e) {
  e.preventDefault();
  alert('Heres some info');
}

$('#more-info').on('click', function(){
  linkFunc(event)
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

const dogButtonFunc = function(e) {
  alert('Bow Wow!');
  e.stopPropagation()
}

$('#dog').on('click', function(){
  dogButtonFunc(event)
})

});