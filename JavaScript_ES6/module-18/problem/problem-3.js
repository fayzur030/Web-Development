const getGrade = (mark) => {
  return typeof mark != 'number'
    ? 'Invalid'
    : mark >= 90
      ? 'A+'
      : mark >= 80
        ? 'A'
        : mark >= 60
          ? 'B+'
          : 'Fail'
}
console.log(getGrade(90))
console.log(getGrade(82))
console.log(getGrade(30))