const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const recipeURL =
      'https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886';
    const res = await fetch(recipeURL);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${data.status})`);

    let { recipe } = data.data;

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      image: recipe.image,
      servings: recipe.servings,
      cookingTime: recipe.cookingTime,
      ingredients: recipe.ingredients,
    };

    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};

showRecipe();