const calculateCalories = (sugarAmount) => {
  // Define the caloric content per gram of sugar
  const caloriesPerGram = 4;

  // Calculate the total calories
  const totalCalories = sugarAmount * caloriesPerGram;

  return totalCalories;
};

module.exports = calculateCalories;
