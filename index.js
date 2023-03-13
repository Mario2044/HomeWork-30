function generateList(array) {
    const ul = document.createElement("ul");
    array.forEach(item => {
        const li = document.createElement("li");
        if (Array.isArray(item)) {
            li.appendChild(generateList(item));
        } else {
            li.textContent = item;
        }
        ul.appendChild(li);
    });
   return ul;
}

const array1 = [1, 2, 3]
const array2 = [1, [1.1, 2.2, 3.3], 2, 3]

const ul1 = generateList(array1);
document.body.appendChild(ul1);

const ul2 = generateList(array2);
document.body.appendChild(ul2);