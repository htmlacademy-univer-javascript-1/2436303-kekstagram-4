function checkStringSize(string, maxSize) {
  let length = string.length;
  if (length > maxSize) {
    return false;
  }
  else {
    return true;
  }
}

function checkPolindrom(string) {
  const str = string.toLowerCase().replace(/\s/g, '');
  const reverse = string.toLowerCase().split('').reverse().join('').replace(/\s/g, '');
  return str === reverse;
}

function getNumberFromString(string) {
  let number = Number(string.replace(/[^0-9-]/g, ''));
  return number > 0 ? number : NaN ;
}

