
const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
  .then(res => res.json())
  .then(res => {
    createMeal(res.meals[0]);
  });
});

const createMeal = (meal) => {
  const ingredients = []
  // Get all ingredients from the object. Up to 20
  for(let i=1; i<=20; i++) {
    if(meal[`strIngredient${i}`]) {
        ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
    } else {
        // Stop if no more ingredients
        break;
    }
  }

  const newInnerHTML = `
      <div class="row">
          <div class="columns fibve">
              <img src="${meal.strMealThumb}" alt="Meal Image">
              ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
              ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
              ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
              <h5>Ingredients:</h5>
              <ul>
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
              </ul>
          </div>
          <div class="colums seven">
          <h4>${meal.strMeal}</h4>
          <p>${meal.strInstructions}</p>
          </div>
      </div>
      ${meal.strYoutube ? `
        <div class="row">
            <h5>Video Recipe</h5>
            <div class="videoWrapper">
              <iframe width="420" height="315"
              src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
              </iframe>
            </div>
        </div>` : ''}

      `;
      meal_container.newInnerHTML = newInnerHTML;
}




// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible')
});
