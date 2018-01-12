function createUser() {
    if(!validateForm()) return;

    var type = $("#selectType").val();
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var speciality = $("#specialization").val();
    var jobTitle = $("#jobTitle").val();

    switch (type){
        case TypeUser:
            var user = new User({fname:fname, surname:lname});
            console.log(user);
            ShowTaskForUser();
            break;
        case TypeStudent:
            var student = new Student({fname:fname, surname:lname, specialization:speciality});
            console.log(student);
            ShowTasksForStudent();
            break;
        case TypeDeveloper:
            var developer = new Developer({fname:fname, surname:lname, specialization:speciality,jobTitle:jobTitle});
            console.log(developer);
            ShowTasksForDeveloper();
            break;
    }

    $("#form").trigger('reset');
    return true;
}