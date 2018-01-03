$(".form-field,.form-button").hide();

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

$("#menu1").hide();
$("#menu2").hide();
$("#menu3").hide();

function ShowTaskForUser() {
    $("#menu1").show();
}

function ShowTasksForStudent() {
    ShowTaskForUser();
    $("#menu2").show();
}

function ShowTasksForDeveloper() {
    ShowTasksForStudent();
    $("#menu3").show();
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

function validateForm(){
    var isValid = true;
    $("#form").find("input[type='text']").each(function() {
        var elementId = $(this).attr("id");
        var messageHolder = $("span[for="+ elementId +"]");
        if($(this).css("display") !== "none" && $(this).val() === "") {
            $(this).addClass("invalid-field");
            messageHolder.text("Please fill this field!");
            isValid = false;
        } else {
            $(this).removeClass("invalid-field");
            messageHolder.text("");
        }
    });
    return isValid;
}

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
    return true;
}

function newElement() {

     var valueTitle = $("div[role='tabpanel'].active .form-title").val();
     var valueStatus = $("div[role='tabpanel'].active .form-status").val();
     var valueDescription = $("div[role='tabpanel'].active .field-textarea").val();
     var valueData = $("div[role='tabpanel'].active .date").val();

     var todoList = [];
     var temp = {};
     temp.check = false;
     temp.title = valueTitle;
     temp.status = valueStatus;
     temp.description = valueDescription;
     temp.data = valueData;
     var i = todoList.length;
     todoList[i] = temp;
     console.log(todoList);
     var head = '';

     for(var key in todoList){
        head += todoList[key].title;
        head += todoList[key].status;
        head += todoList[key].description;
    }



}






