// When a user clicks the + element, the count should increase by 1 on screen.
let plus = document.querySelector('#plus')
let i=0
plus.addEventListener('click', function(){
    document.querySelector('#disp').value = ++i;
})

// When a user clicks the – element, the count should decrease by 1 on screen.
let minus = document.querySelector('#minus')

minus.addEventListener('click', function(){
    document.querySelector('#disp').value = --i;
})