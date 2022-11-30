$(document).ready(function(){
/**
 * Toggles "done" class on <li> element
 */
$('li').on('click', function(){
  $(this).toggleClass("done")
})
/**
 * Delete element when delete link clicked
 */
 $('.delete').on('click', function(){
  // $(this).parent().remove()
  $(this).parent().fadeOut()
})
/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  $('ul').append(`<li>
  <span id="newLi">${text}</span>
  <a class="delete">Delete</a>
  </li>`)

};
// add listener for add
$('.add-item').on('click', function(){
  addListItem(event)
})

$('ul').on('click', function(e) {
  if($(e.target).attr('class') === 'delete'){
    $(e.target).parent().fadeOut()
  }

  if($(e.target).attr('id') === 'newLi'){
    $(e.target).parent().toggleClass("done")
  }
});

});