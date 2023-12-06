function checkStringSize(string, maxSize) {
  const length = string.length;
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
  const number = Number(string.replace(/[^0-9-]/g, ''));
  return number > 0 ? number : NaN ;
}

function isMeetingWithinWorkingHours(startTime, endTime, meetingStart, meetingDuration) {
  // Преобразуем время начала и конца рабочего дня в минуты
  const workingStart = convertToMinutes(startTime);
  const workingEnd = convertToMinutes(endTime);

  // Преобразуем время старта и продолжительность встречи в минуты
  const meetingTime = convertToMinutes(meetingStart);
  const meetingEnd = meetingTime + meetingDuration;

  // Проверяем, что время старта встречи и время окончания встречи
  // находятся в пределах рабочего дня
  if (meetingTime >= workingStart && meetingEnd <= workingEnd) {
    return true;
  } else {
    return false;
  }
}

// Функция для преобразования времени в минуты
function convertToMinutes(time) {
  const timeParts = time.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  return hours * 60 + minutes;
}


export {checkStringSize, checkPolindrom, getNumberFromString, isMeetingWithinWorkingHours};
