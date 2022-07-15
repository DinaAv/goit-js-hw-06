const form = document.querySelector('.login-form')
const inputs = form.querySelectorAll(' input');

const handleValues = () => {
    const values = {};
    inputs.forEach(input => {
        values[input.name] = input.value;
    })

    return values;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(handleValues())
    e.target.reset();
})
