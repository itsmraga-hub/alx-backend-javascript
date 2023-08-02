interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}


interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}


interface StudentClassConstructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface
}


interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentClassInterface {
  _firstName: string;
  _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework = (): string => {
    return 'Currently working';
  };

  displayName = (): string => {
    return this._firstName;
  }
}

// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);

// const teacher3: Teacher = {
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London',
//   contract: false,
// };

// console.log(teacher3);