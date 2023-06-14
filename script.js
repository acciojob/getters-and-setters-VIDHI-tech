//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Create instances and invoke methods
const student = new Student("John", 20);
student.study();  // Output: John is studying.

const teacher = new Teacher("Jane", 35);
teacher.teach();  // Output: Jane is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
