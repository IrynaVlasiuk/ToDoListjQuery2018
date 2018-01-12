var User = function(obj) {
    this.fname = obj.fname;
    this.surname = obj.surname;
};

var Student = function(obj) {
    this.prototype = User.call(this, obj);
    this.specialization = obj.specialization;
};

var Developer = function(obj) {
    this.prototype = Student.call(this,obj);
    this.jobTitle = obj.jobTitle;
};

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Developer.prototype = Object.create(Student.prototype);
Developer.prototype.constructor = Developer;