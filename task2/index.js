// task2
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
    ];

    const list = document.getElementById('ingredients')
    

    ingredients.forEach(item => {
        let li = document.createElement('li')
        list.appendChild(li)
        li.innerHTML += item
    })