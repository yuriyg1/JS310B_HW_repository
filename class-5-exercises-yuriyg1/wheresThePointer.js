// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const table = document.querySelector('table')
const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
const ee = document.querySelector('#e')
const f = document.querySelector('#f')
const g = document.querySelector('#g')
const h = document.querySelector('#h')
const i = document.querySelector('#i')

function clearTable(){ //clears out all columns
    a.innerText = b.innerText = c.innerText = d.innerText = ee.innerText = f.innerText = g.innerText = h.innerText = i.innerText = ''
    return
}

a.addEventListener('click', e =>{
    clearTable()
    a.innerText = `${e.screenX}, ${e.screenY}\n`
})
b.addEventListener('click', e =>{
    clearTable()
    b.innerHTML = `${e.screenX}, ${e.screenY}\n`
})
c.addEventListener('click', e =>{
    clearTable()
    c.innerHTML = `${e.screenX}, ${e.screenY}\n`
})
d.addEventListener('click', e =>{
    clearTable()
    d.innerHTML = `${e.screenX}, ${e.screenY}\n`
})
ee.addEventListener('click', e =>{
    clearTable()
    ee.innerHTML = `${e.screenX}, ${e.screenY}\n`
})
f.addEventListener('click', e =>{
    clearTable()
    f.innerHTML = `${e.screenX}, ${e.screenY}\n`
})
g.addEventListener('click', e =>{
    clearTable()
    g.innerHTML = `${e.screenX}, ${e.screenY}\n`
})
h.addEventListener('click', e =>{
    clearTable()
    h.innerHTML = `${e.screenX}, ${e.screenY}\n`
})
i.addEventListener('click', e =>{
    clearTable()
    i.innerHTML = `${e.screenX}, ${e.screenY}\n`
})