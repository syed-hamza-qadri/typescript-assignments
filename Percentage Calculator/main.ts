// This code calculates percentage for 5 subjects
// Subjects: Maths, Physics, Chemistry, English, Biology

// Student Details
let StudentId = "183927"

// Total Marks
let TotalMarks = 500; 

//Obtained Marks
let MathScore = 85;
let PhysicsScore = 97;
let ChemistryScore = 35;
let EnglishScore = 55;
let BiologyScore = 77;

let FinalResult = ((MathScore+PhysicsScore+ChemistryScore+EnglishScore+BiologyScore) / TotalMarks) * 100;

let ResultStatement = `Student ${StudentId} obtained this percentage ${FinalResult} %`

console.log(ResultStatement);
