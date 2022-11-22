// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

/////////////////// OPTIONAL /////////////////////

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

const linkFunc = function(e) {
  e.preventDefault();
  alert('Heres some info');
}

const link = document.querySelector('#more-info')
link.addEventListener('click', linkFunc)

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const dogButtonFunc = function(e) {
  alert('Bow Wow!');
  Window.stop()
}

const dogButton = document.querySelector('#dog')
dogButton.addEventListener('click', dogButtonFunc)

