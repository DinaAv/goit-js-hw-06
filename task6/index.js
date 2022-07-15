const input = document.querySelector('#validation-input')
const value = +input.dataset.length
console.log(value);

input.addEventListener('blur', () => {
    if (input.value.length > value) {
        input.classList.add('invalid')
    } else {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
})

