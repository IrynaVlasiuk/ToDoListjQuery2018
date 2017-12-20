$("input.hidden-element").hide();

function ShowFormsForUser() {
    $("#fname, #lname, #button").show();
    $("#specialization, #jobTitle").hide();
}

function ShowFormsForStudent() {
    ShowFormsForUser();
    $("#specialization").show();
}

function ShowFormsForDeveloper() {
    ShowFormsForStudent();
    $("#jobTitle").show();
}

function HideAll() {
    $("#fname, #lname, #button, #specialization, #jobTitle").hide();
}

$("#selectType").change(function () {
    var type = $(this).val();

    switch (type){
        case TypeUser:
            ShowFormsForUser();
            break;
        case TypeStudent:
            ShowFormsForStudent();
            break;
        case TypeDeveloper:
            ShowFormsForDeveloper();
            break;
        default:
            HideAll();
            break;
    }
});

function CreateNewUser() {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var user = new User(fname, lname);
    console.log("user:" + user.name + ' ' + user.surname);
}

function CreateNewStudent() {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var speciality = $("#specialization").val();
    var student = new Student(fname, lname, speciality);
    console.log("Student: " + student.name + ' ' + student.surname + ' ' + student.specialization);
}

function CreateNewDeveloper() {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var speciality = $("#specialization").val();
    var jobTitle = $("#jobTitle").val();
    var developer = new Developer(fname,lname,speciality,jobTitle);
    console.log("Developer: " + developer.name + ' ' + developer.surname + ' ' + developer.specialization + ' ' + developer.jobTitle);
}

function createUser() {
    if(!validateForm()) return;
    var type = $("#selectType").val();

    switch (type){
        case TypeUser:
            CreateNewUser();
            break;
        case TypeStudent:
            CreateNewStudent();
            break;
        case TypeDeveloper:
            CreateNewDeveloper();
            break;
    }
}

function validateForm(){
    var isValid = true;
    $("#form").find("input[type='text']").each(function() {
        var elementId = $(this).attr("id");
        var messageHolder = $("span[for="+ elementId +"]");
        if($(this).css("display") != "none" && $(this).val() == "") {
            $(this).addClass("invalid-field");
            messageHolder.text("Please fill this field!");
            console.log("false");
            isValid = false;
        } else {
            $(this).removeClass("invalid-field");
            messageHolder.text("");
        }
    });
    return isValid;
}

