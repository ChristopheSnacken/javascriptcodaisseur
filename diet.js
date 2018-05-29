var age = prompt ("Enter your age in years:")
var gender = prompt ("Please enter m or f")
var height = prompt ("Height in cm:")
var weight = prompt ("Weight in kg:")
var exerciceLevel = prompt ("please enter a number between 1 and 5")
var heightInCM = height / 100
var bodyWeightSquared = Math.pow(heightInCM, 2)
var bmi = weight / bodyWeightSquared
var idealBMI = 22.5
var idealWeight = idealBMI * bodyWeightSquared
var bmr = 10.0 * weight + 6.25 * height - 5.0 * age;
if (gender === 'm') {
  bmr += 5;
}
if (gender === 'f') {
  bmr -= 161;
}
var caloriesPerDay

switch (exerciseLevel) {
case '1':
  caloriesPerDay = bmr * 1.2
  break
case '2':
  caloriesPerDay = bmr * 1.375
  break
case '3':
  caloriesPerDay = bmr * 1.55
  break
case '4':
  caloriesPerDay = bmr * 1.725
  break
case '5':
  caloriesPerDay = bmr * 1.9
  break
default:
  caloriesPerDay = bmr * 1.2
  break
}
if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500
  dietWeeks = (weight - idealWeight) / 0.5
} else {
  dietCaloriesPerDay = caloriesPerDay + 500
  dietWeeks = (idealWeight - weight) / 0.5
}
console.log('19th century diet:')
console.log(`Eat ${Math.round(dietCaloriesPerDay)} calories per day for ${Math.round(dietWeeks)} weeks`)
console.log(`While maintaining your current exercise level: ${exerciseLevel}`)
