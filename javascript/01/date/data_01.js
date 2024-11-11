// 1. Date 객체 생성
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

/**
 * 1. Date 객체 생성
 *
 * 현재 날짜와 시간으로 Date 객체 생성하기:
 */
let now = new Date();
console.log(now); // 현재 날짜와 시간 출력

/**
 * 특정 날짜와 시간으로 Date 객체 생성하기:
 * 날짜 문자열을 인수로 전달하여 특정 날짜/시간의 Date 객체를 생성할 수 있습니다.
 */
let specificDate = new Date('2024-01-01T00:00:00'); // YYYY-MM-DDTHH:mm:ss 형식
console.log(specificDate); // 특정 날짜와 시간 출력

/**
 * 개별적인 날짜와 시간 요소로 Date 객체 생성하기:
 *
 * 년, 월(0부터 시작), 일, 시, 분, 초, 밀리초를 개별적으로 지정할 수 있다.
 */
let dateComponents = new Date(2024, 0, 1, 12, 30, 0); // 2024년 1월 1일 오후 12시 30분
console.log(dateComponents); // 특정 날짜와 시간 출력

// 2. Date 객체 사용하기

/**
 * getFullYear()
 *
 * 연도 가져오기 (4자리 숫자)
 */
let year = now.getFullYear();
console.log(year); // 현재 연도 출력

/**
 * getMonth()
 *
 * 월 가져오기 (시작:0, 0은 1월)
 */
let month = now.getMonth() + 1; // 0은 1월이니 현재 월을 표시하려면 +1해야됨
console.log(month); // 현재 월 출력

/**
 * getDate()
 *
 * 일자 가져오기 (1~31)
 */
let dayOfMonth = now.getDate();
console.log(dayOfMonth); // 현재 일자 출력

/**
 * getDay()
 *
 * 요일 가져오기 (0부터 시작, 0 = 일요일)
 */
let dayOfWeek = now.getDay();
console.log(dayOfWeek); // 현재 요일 출력

/**
 * getHours(), getMinutes(), getSeconds(), getMilliseconds()
 *
 * 시, 분, 초, 밀리초 가져오기
 */
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();

console.log(hours); // 현재 시 출력
console.log(minutes); // 현재 분 출력
console.log(seconds); // 현재 초 출력
console.log(milliseconds); // 현재 밀리초 출력

/**
 * getTime()
 *
 * 1970년 1월 1일 00:00:00 UTC부터 경과된 밀리초 가져오기
 */
let timestamp = now.getTime();
console.log(timestamp); // 타임스탬프 출력

/**
 * toDateString(), toTimeString()
 *
 * 날짜 및 시간을 문자열로 변환하기
 */
let dateString = now.toDateString(); // "Wed Apr 05 2024"
let timeString = now.toTimeString(); // "12:00:00 GMT+0900 (KST)"
console.log(dateString); // 날짜 문자열 출력
console.log(timeString); // 시간 문자열 출력
