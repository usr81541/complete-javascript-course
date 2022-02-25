// Coding Challenge #1-2
function Person(mass, height) {
  this.mass = mass;
  this.height = height;
  this.bmi = mass / height ** 2;
}

const mark = new Person(95, 1.88);
const john = new Person(85, 1.76);

// const markHigherBMI = mark.bmi > john.bmi;
// console.log(
//   "Mark's BMI: " + mark.bmi.toFixed(2),
//   "John's BMI: " + john.bmi.toFixed(2)
// );
if (mark.bmi > john.bmi) {
  console.log(
    `Mark's BMI (${mark.bmi.toFixed(
      1
    )}) is higher than John's (${john.bmi.toFixed(1)})!`
  );
} else {
  console.log(
    `John's BMI (${john.bmi.toFixed(
      1
    )}) is higher than Mark's (${mark.bmi.toFixed(1)})!`
  );
}
