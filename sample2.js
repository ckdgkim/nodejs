// 1. shorthand

const student = {
  name: "홍길동",
  score: 90,
  age: 20,
  school: "kosta",
  introduce: function () {
    console.log("나의 이름은 홍길동입니다.");
  },
};

console.log(student);

const score = 90;
const student2 = {
  name,
  score,
};

console.log(student2);

//2. 객체의 구조분해 할당

// const nm = student2.name;
// const sc = student.score;
// const age = student.age;
// const school = student.school;

// console.log(name, score, age, school);

const { name: studentName, introduce } = student;

console.log(studentName);
introduce();

// 3. 배열 구조분해 할당

const arr = [1, 2, 3];

const num1 = arr[0];
const num2 = arr[1];
const num3 = arr[2];

console.log(num1, num2, num3);

const [n1, n2, n3] = arr;

console.log(n1, n2, n3);

const useState = [
  "a",
  function setA() {
    console.log("a");
  },
];
const [state, setState] = useState;

console.log(state, setState);

setState();
