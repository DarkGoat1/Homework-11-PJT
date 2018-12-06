// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

console.log(recipes);

dishes = []
spices = []

// @TODO: YOUR CODE HERE
Object.values(recipes).forEach(value => console.log(value));

recipes.forEach((recipe) => {
  // console.log(recipe);

  // Get the entries for each object in the array

  // Object.values(recipes).forEach(value => console.log(value));
  
  Object.entries(recipe).forEach(([key, value]) => {
    // Log the key and value
    if (key === "dish") {
      dishes.push(value)
    }
    else {
      spices.push(value)
    }
  });
});

console.log(dishes)
console.log(spices)
