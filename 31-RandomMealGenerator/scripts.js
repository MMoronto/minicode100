
const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
  .then(res => res.json())
  .then(res => {
    createMeal(res.meals[0]);
  });
});
