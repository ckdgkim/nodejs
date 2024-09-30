var a1 = "a1";
let b = "b"; //지역변수, 값이 재할당 되는 변수
const c = { name: "홍길동" }; // 동적으로 타입이 할당, 상수는 호이스팅 대상이 아니다.
//값이 재할당되지 않음 (함수가 상수에 할당되는 경우에는 호이스팅 대상이 되지않음)
const f = () => console.log("함수입니다.");
const f1 = (n1, n2) => {
  return n1 + n2;
};
/* 
const f = function print() { 
console.log("함수입니다.");
}
*/
console.log(a); //  선언(호이스팅 가능), 초기화 까지는 안됨
console.log(a1);
console.log(b);
console.log(c);
console.log(add(1, 1));
f();
console.log(f1(2, 2));

console.log(1 + 1);
var a = "a"; //전역변수, 값이 재할당 되는 변수, 호이스팅가능(아래에서 선언했으나 위에서 호출가능)
function add(n1, n2) {
  // 상수, 호이스팅가능, 값이 재할당되지 않음(함수가 할당)
  return n1 + n2;
}
const name = "홍길동";
