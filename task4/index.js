let counter = document.getElementById('value')
let plus = document.querySelector('[data-action="increment"]')
let minus = document.querySelector('[data-action="decrement"]')

let counterValue = 0

plus.addEventListener('click', () => {
    counterValue++
    counter.innerHTML = counterValue
})

minus.addEventListener('click', () => {
    counterValue--
    counter.innerHTML = counterValue
})




