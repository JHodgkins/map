  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log('for loop',results); // returns [2,4,6,8,10]

// Using map()
const multiplyByTwo = function(nums) {
  return nums * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log('using map', mapResults);

// Simplified w/ map()

const simplified = nums.map(function(nums){return nums * 2});
console.log('simplified way:',simplified);

// Simplfied w/ map() + arrow function
const simplifiedWithArrow = nums.map(nums => nums * 2);
console.log('arrow way:',simplifiedWithArrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.id, student.name, student.profession]);
console.log(studentsWithIds);