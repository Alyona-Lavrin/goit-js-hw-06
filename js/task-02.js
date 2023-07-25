const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const parent = document.querySelector("#ingredients");

function markup(elements) {
  return elements.map(item => {
    let li = document.createElement('li');
    li.textContent = item;
    parent.appendChild(li);
    li.className = "item";
})}

markup(ingredients);