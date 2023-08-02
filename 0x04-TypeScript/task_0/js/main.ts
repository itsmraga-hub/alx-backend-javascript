interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: 'William',
  lastName: 'Raga',
  age: 25,
  location: 'Kiambu',
}

const student_2: Student = {
  firstName: 'William',
  lastName: 'Raga',
  age: 25,
  location: 'Kikuyu',
}

const studentsList: Array<Student> = [student_1, student_2];


export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  let output = '';
  
  for (const student of students) {
    output +=`
      <tr>
        <td>${student.firstName}</td>
	    <td>${student.location}</td>
      </tr>`;
  }
  table.innerHTML = `
    <thead>
      <tr>
        <th>FirstName</th>
	    <th>Location</th>
      </tr>
    </thead>
    <tbody>
      ${output}
    </tbody>`;
  console.log(table.innerHTML)
}


displayStudents(studentsList);
document.title = 'Task 0';
