function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
 
function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
}

Student.prototype.name = function(){
  return firstName + " " + lastName;
}

Student.prototype.courses = function() {
  return this.courseList;
}

Student.prototype.enroll = function(course) {
  this.courseList = this.courseList || [];
  this.courseList.push(course);
  course.addStudent(this);
}

Student.prototype.courseLoad = function() {
  var load = {};
  
  this.courseList.forEach(function(course){
    load[course.department] = load[course.department] || 0;
    load[course.department] += course.credits;
  })
  
  return load;
}

Course.prototype.students = function() {
  return this.studentList;
}

Course.prototype.addStudent = function(student) {
  this.studentList = this.studentList || [];
  this.studentList.push(student);
}

var john = new Student("John", "Smith");
var bob = new Student("Bob", "Boberts");
var algebra = new Course("Algebra", "Math", 4);
var amlit = new Course("American Literature", "English", 4);
john.enroll(algebra);
john.enroll(amlit);