function calculateGrade() {
  let subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
  let subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
  let subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
  let subject4 = parseFloat(prompt("Enter marks for Subject 4:"));
  let subject5 = parseFloat(prompt("Enter marks for Subject 5:"));

  let total = subject1 + subject2 + subject3 + subject4 + subject5;
  let average = total / 5;

  let grade;
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  alert(
    "Total Marks: " + total +
    "\nAverage Marks: " + average.toFixed(2) +
    "\nGrade: " + grade
  );
}
