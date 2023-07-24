const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let parent = document.getElementById('ingredients');

ingredients.forEach(element => {
	let li = document.createElement('li');
	li.textContent = element;
	parent.appendChild(li);
  li.className = "item";
})
