var User = function(name,surname) {
    this.name = name;
    this.surname = surname;
};

User.prototype.createSimpleTask = function (title,status) {
    console.log("Title: "+this.title);
    console.log("Status: "+this.status);
    };

var Student = function(specialization) {
    this.prototype = User.apply(this,specialization);
    this.specialization = specialization;
};

Student.prototype.createHomeTask = function (title,status,description) {
    console.log("Title: "+this.title);
    console.log("Status: "+this.status);
    console.log("Description: "+this.description);
};

var Developer = function(jobTitle) {
    this.prototype = Student.apply(this,arguments);
    this.jobTitle = jobTitle;
};

Developer.prototype.createProjectTask = function (title,status,description,deadlineDate) {
    console.log("Title: "+this.title);
    console.log("Status: "+this.status);
    console.log("Description: "+this.description);
    console.log("DeadlineDate: "+this.deadlineDate);
};

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Developer.prototype = Object.create(Student.prototype);
Developer.prototype.constructor = Developer;