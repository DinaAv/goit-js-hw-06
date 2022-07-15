const control = document.getElementById('font-size-control')
const text = document.getElementById('text')

control.addEventListener('input', () => {
    let size = control.value
    text.style.fontSize = size + 'px'
})