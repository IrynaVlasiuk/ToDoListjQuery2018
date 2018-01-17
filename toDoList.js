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

$('#link-menu-1,#link-menu-2,#link-menu-3').hide();

function ShowTaskForUser() {
    $('#link-menu-1').show();
    $('#link-menu-2,#link-menu-3').hide();
}

function ShowTasksForStudent() {
    ShowTaskForUser();
    $('#link-menu-2').show();
}

function ShowTasksForDeveloper() {
    ShowTasksForStudent();
    $('#link-menu-3').show();
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
        if($(this).css("display") !== "none" && $(this).val() === "") {
            $(this).addClass("invalid-field");
            isValid = false;
        } else {
            $(this).removeClass("invalid-field");
        }
    });
    return isValid;
}

function validateFieldsTask() {
    var isValid = true;
    $("div[role='tabpanel'].active").find("input[type='text'],input[type='date'], textarea").each(function () {
        if($(this).css("display") !== "none" && $(this).val() === "" && $(this).attr("disabled") == undefined) {
            $(this).addClass("invalid-field");
            isValid = false;
        } else {
            $(this).removeClass("invalid-field");
        }
    });
    return isValid;
}




