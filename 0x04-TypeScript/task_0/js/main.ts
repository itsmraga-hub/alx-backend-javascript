interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: 'William';
  lastName: 'Raga';
  age: 25;
  location: 'Kiambu';
}

const student_2: Student = {
  firstName: 'William';
  lastName: 'Raga';
  age: 25;
  location: 'Kikuyu';
}

const studentsList: Array<Student> = [student_1, student_2];


export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  let output = '';
  for (const student of students) {
    output += `
      <tr>
        <td>${student.firstName}</td>
	<td>${student.location}</td>
      </tr>
    `;
  }
  table.innerHTML = `
    <thead>
      <th>
        <td>FirstName</td>
	<td>Location</td>
      </th>
    </thead>
    <tbody>
      ${output}
    </tbody>
  `;
}


displayStudents(studentsList);
document.title = 'Task 0';
