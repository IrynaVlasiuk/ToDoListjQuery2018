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
            break;
        case TypeStudent:
            var student = new Student({fname:fname, surname:lname, specialization:speciality});
            console.log(student);
            break;
        case TypeDeveloper:
            var developer = new Developer({fname:fname, surname:lname, specialization:speciality,jobTitle:jobTitle});
            console.log(developer);
            break;
    }
}

// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var button = document.createElement("input");
//     var txt = document.createTextNode("\u00D7");
//     button.className = "close";
//     button.appendChild(txt);
//     myNodelist[i].appendChild(button);
// }
        function newElement() {
        var todoList = [];
        var valueTitle = $("div[role='tabpanel'].active .form-title").val();
        var valueStatus = $("div[role='tabpanel'].active .form-status").val();
        var valueDescription = $("div[role='tabpanel'].active .field-textarea").val();
        var valueData = $("div[role='tabpanel'].active .date").val();

        console.log(valueData);
        console.log(valueTitle);
        console.log(valueStatus);
        var temp = {};
        temp.title = valueTitle;
        temp.status = valueStatus;
        var i = todoList.length;
        todoList[i] = temp;
}


