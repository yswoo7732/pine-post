export function valueTotalRatio(value, min, max) {
  return ((value - min) / (max - min)).toFixed(2);
}

export function getLinearGradientCSS(ratio, leftColor, rightColor) {
  return [
    '-webkit-gradient(',
    'linear, ',
    'left top, ',
    'right top, ',
    'color-stop(' + ratio + ', ' + leftColor + '), ',
    'color-stop(' + ratio + ', ' + rightColor + ')',
    ')',
  ].join('');
}

export function numberToKorean(number) {
  if (number === 0) {
    return '0';
  }

  var inputNumber = number < 0 ? false : number;
  var unitWords = ['', '만', '억', '조', '경'];
  var splitUnit = 10000;
  var splitCount = unitWords.length;
  var resultArray = [];
  var resultString = '';

  for (let i = 0; i < splitCount; i++) {
    var unitResult =
      (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString =
      resultArray[i].toLocaleString(window.navigator.language, {
        minimumFractionDigits: 0,
      }) +
      unitWords[i] +
      ' ' +
      resultString;
  }

  return resultString.trim();
}

export function compoundInterest(amount, r, n) {
  //적립식 복리계산 원금, 이자율, 년
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += amount * Math.pow(1 + r / 100, i);
  }

  return Math.round(sum);
}

// 가격 셋째자리 콤마 표시
export function inputPriceFormat(str) {
  return str.toLocaleString('ko-KR');
}

// 가격 콤마표시 제거 후 정수 반환
export function inputPriceFormatToNum(str) {
  return str ? parseInt(str.replace(/\$\s?|(,*)/g, '')) : 0;
}

// 소수점 셋째자리수 버림
export function removeDecimalPlace(num) {
  return num ? Math.floor(num * 1000) / 1000 : num;
}

// 모바일 체크
export function isMobile() {
  if (
    window.navigator.userAgent.match(
      /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/
    )
  ) {
    return true;
  }
  return false;
}

// PINE 앱 체크
export function isPine() {
  if (typeof window !== 'undefined') {
    if (window.navigator.userAgent.match(/PINE/)) {
      return true;
    }
  }
  return false;
}

// 이메일 유효성체크
export function validateEmail(email) {
  var re =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

// 객체에 각 요소가 'id' 값을 키로 하고 해당 요소 객체를 값으로 가지는 형태
export function keyBy(arr, key) {
  const result = {};
  for (const item of arr) {
    result[item[key]] = item;
  }
  return result;
}
