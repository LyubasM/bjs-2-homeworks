function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
}

peter = new Student('Peter', 'male', 22);

Student.prototype.setSubject = function (subjectName) {
  return this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!this.hasOwnProperty('marks')) {
    return 0;
  }
  this.marks.push(...marks);
  return this.marks;
}

Student.prototype.getAverage = function () {
  if (this.marks === [] || !this.hasOwnProperty('marks')) {
    return 0;
  }
  return this.marks.reduce((acc, mark, i, marks) => { return i === this.marks.length - 1 ? (acc + mark) / this.marks.length : acc + mark}, 0);
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
