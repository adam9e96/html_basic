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

console.log(now); // 2024-04-05T16:26:36.532Z

/**
 *
 * 특정 날짜와 시간으로 Date 객체 생성하기:
 * 날짜 문자열을 인수로 전달하여 특정 날짜/시간의 Date 객체를 생성할 수 있습니다.
 */
let specificDate = new Date('2024-01-01T00:00:00'); // YYYY-MM-DDTHH:mm:ss 형식
console.log(specificDate); // 2023-12-31T15:00:00.000Z

/**
 *
 * 개별적인 날짜와 시간 요소로 Date 객체 생성하기:
 *
 * 년, 월(0부터 시작), 일, 시, 분, 초, 밀리초를 개별적으로 지정할 수 있다.
 */
let dateComponents = new Date(2024, 0, 1, 12, 30, 0); // 2024년 1월 1일 오후 12시 30분

console.log(dateComponents); // 2024-01-01T03:30:00.000Z

// 2. Date 객체 사용하기
/**
 * getFullYear()
 *
 * 연도 가져오기 (4자리 숫자)
 */
let year = now.getFullYear();
console.log(year); // 2024

/**
 * getMonth()
 *
 * 월 가져오기 (시작:0, 0은 1월)
 */
let month = now.getMonth() + 1;
console.log(month); // 4 // 0은 1월이니 현재 월을 표시하려면 +1해야됨

/**
 * getDate()
 *
 * 일자 가져오기 (1~31)
 */
let dayOfMonth = now.getDate();
console.log(dayOfMonth); // 6

/**
 * getDay()
 *
 * 요일 가져오기 (0부터 시작, 0 = 일요일)
 */
let dayOfWeek = now.getDay();
console.log(dayOfWeek); // 6

/**
 * getHours(), getMinutes(), getSeconds(), getMilliseconds()
 *
 * 시, 분, 초, 밀리초 가져오기
 */
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();

console.log(hours); // 1
console.log(minutes); // 35
console.log(seconds); // 59
console.log(milliseconds); // 178

/**
 * getTime()
 *
 * 1970년 1월 1일 00:00:00 UTC부터 경과된 밀리초 가져오기
 */
let timestamp = now.getTime();
console.log(timestamp); // 1712335006148

/**
 * toDateString(), toTimeString()
 *
 * 날짜 및 시간을 문자열로 변환하기
 */
let dateString = now.toDateString(); // "Wed Apr 05 2024"
let timeString = now.toTimeString(); // "12:00:00 GMT+0900 (KST)"
console.log(dateString); // Sat Apr 06 20

console.log(timeString); // 01:37:25 GMT+0900 (대한민국 표준시)
