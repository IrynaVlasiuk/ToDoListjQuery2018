var User = function(obj) {
    this.fname = obj.fname;
    this.surname = obj.surname;
};

User.prototype.createSimpleTask = function (title,status) {
    console.log("Title: "+this.title);
    console.log("Status: "+this.status);
    };

var Student = function(obj) {
    this.prototype = User.call(this, obj);
    this.specialization = obj.specialization;
};

Student.prototype.createHomeTask = function (title,status,description) {
    console.log("Title: "+this.title);
    console.log("Status: "+this.status);
    console.log("Description: "+this.description);
};

var Developer = function(obj) {
    this.prototype = Student.call(this,obj);
    this.jobTitle = obj.jobTitle;
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