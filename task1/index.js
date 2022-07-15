// task 1
const categories = document.querySelectorAll('.item')

console.log(`Number of categories: ${categories.length}`);

const list = document.getElementById('categories')

for (let i = 0; i < categories.length; i++) {
    let a = categories[i].childNodes[3].childNodes;
    console.log(`Category: ${categories[i].childNodes[1].innerText}`);
    console.log(`Elements: ${(a.length - 1) / 2}`);
}


