// This code calculates percentage for 5 subjects
// Subjects: Maths, Physics, Chemistry, English, Biology
// Student Details
var StudentId = "183927";
// Total Marks
var TotalMarks = 500;
//Obtained Marks
var MathScore = 85;
var PhysicsScore = 97;
var ChemistryScore = 35;
var EnglishScore = 55;
var BiologyScore = 77;
var FinalResult = ((MathScore + PhysicsScore + ChemistryScore + EnglishScore + BiologyScore) / TotalMarks) * 100;
var ResultStatement = "Student ".concat(StudentId, " obtained this percentage ").concat(FinalResult, " %");
console.log(ResultStatement);
