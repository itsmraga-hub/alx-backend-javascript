export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((obj) => obj.location === city).map((obj) => {
    const g = newGrades.find((item) => item.studentId === obj.id);
    // obj.id === g.studentId ? obj.grade = g.grade : obj.grade = 'N/A';

    return {
      ...obj,
      grade: g ? g.grade : 'N/A',
    };
  });
}
