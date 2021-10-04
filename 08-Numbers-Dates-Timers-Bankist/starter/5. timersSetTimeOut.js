const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕 `),
  2000,
  ...ingredients
);
console.log('Waiting...');

ingredients.includes('spinach') && clearTimeout(pizzaTimer);
