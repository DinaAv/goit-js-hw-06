let input = document.getElementById('name-input')
let output = document.getElementById('name-output')


input.addEventListener('keyup', () => {
    let value = input.value;
    if (value.length > 0) {
        output.innerText = value
    } else {
        output.innerText = 'Anonymous'
    }
})