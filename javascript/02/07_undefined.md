JavaScript에서 `undefined`는 변수의 값이 정의되지 않았음을 나타내는 원시 값입니다. 변수가 선언되었으나 아직 어떠한 값도 할당되지 않았을 때, 해당 변수의 기본값은 `undefined`입니다. `undefined`는 변수의 존재는 인정하지만, 그 값은 아직 정해지지 않았음을 의미합니다. 여기에 `undefined`의 몇 가지 주요 측면을 설명합니다.

### `undefined`의 발생

1. **변수가 선언만 되고 할당되지 않은 경우**:
   ```javascript
   let variable;
   console.log(variable); // undefined
   ```

2. **함수에서 명시적인 반환값이 없을 경우**:
   ```javascript
   function testFunction() {
       // 아무런 값도 반환하지 않음
   }
   console.log(testFunction()); // undefined
   ```

3. **객체 내 존재하지 않는 속성에 접근하려 할 때**:
   ```javascript
   let obj = { a: 1, b: 2 };
   console.log(obj.c); // undefined
   ```

### `undefined`와 `null`의 차이

`undefined`와 `null` 모두 JavaScript에서 값이 '없음'을 나타내지만, 사용 목적과 의미에 차이가 있습니다.
- `undefined`는 변수가 초기화되지 않았음을 나타냅니다. 즉, 프로그래머가 명시적으로 값을 할당하지 않은 경우 JavaScript 엔진이 자동으로 할당하는 값입니다.
- `null`은 프로그래머가 명시적으로 '값이 없음'을 나타내기 위해 할당하는 값입니다. 즉, `null`은 의도적인 '값 없음'을 의미합니다.

### `undefined` 검사

`undefined`를 검사하는 일반적인 방법은 `typeof` 연산자를 사용하는 것입니다.
```javascript
if (typeof variable === "undefined") {
    // 변수가 undefined일 때 수행할 작업
}
```

또는 변수가 선언되었는지 직접 비교하는 방법도 있습니다.
```javascript
if (variable === undefined) {
    // 변수가 undefined일 때 수행할 작업
}
```

### 주의사항

- `undefined`는 전역 객체의 속성이기도 하므로, 이론적으로 다른 값으로 재할당할 수 있습니다(ES5 이전 버전에서). 그러나 이는 권장되지 않으며, 실제 프로그래밍에서는 `undefined` 값을 변경하지 않아야 합니다.
- `undefined`와 `null`을 비교할 때는 동등 연산자(`==`)를 사용하면 두 값이 동등하다고 평가됩니다. 하지만 일치 연산자(`===`)를 사용하면 두 값이 다르다고 평가됩니다.
  ```javascript
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  ```

`undefined`는 JavaScript의 중요한 개념 중 하나로, 값의 부재를 나타내는 데 사용됩니다. 이를 이해하고 올바르게 다루는 것은 안정적이고 예측 가능한 코드를 작성하는 데 중요합니다.