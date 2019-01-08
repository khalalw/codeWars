function buildFormat(val, unit) {
  if (val > 0) {
    return val + ' ' + unit + (val > 1 ? 's' : '') + ', ';
  }
  return '';
}

function formatDuration(seconds) {
  if (!seconds) return 'now';

  let secs = seconds;
  const NUM_SEC_PER_MIN = 60;
  const NUM_SEC_PER_HR = NUM_SEC_PER_MIN * 60;
  const NUM_SEC_PER_DAY = NUM_SEC_PER_HR * 24;
  const NUM_SEC_PER_YEAR = NUM_SEC_PER_DAY * 365;

  let numYears = Math.floor(secs / NUM_SEC_PER_YEAR);
  secs -= numYears * NUM_SEC_PER_YEAR;
  let numDays = Math.floor(secs / NUM_SEC_PER_DAY);
  secs -= numDays * NUM_SEC_PER_DAY;
  let numHrs = Math.floor(secs / NUM_SEC_PER_HR);
  secs -= numHrs * NUM_SEC_PER_HR;
  let numMins = Math.floor(secs / NUM_SEC_PER_MIN);
  let numSecs = secs - numMins * NUM_SEC_PER_MIN;

  let durationStr = buildFormat(numYears, 'year');
  durationStr += buildFormat(numDays, 'day');
  durationStr += buildFormat(numHrs, 'hour');
  durationStr += buildFormat(numMins, 'minute');
  durationStr += buildFormat(numSecs, 'second');

  // trim last one
  let index = durationStr.lastIndexOf(', ');
  durationStr = durationStr.substring(0, index);

  // replace the second last , with and
  index = durationStr.lastIndexOf(', ');
  if (index > 0) {
    durationStr = durationStr.substring(0, index) + ' and ' + durationStr.substring(index + 2);
  }
  return durationStr;
}