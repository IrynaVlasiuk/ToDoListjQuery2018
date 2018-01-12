var temp = {};
var i = 1;

function getDataOfTask() {
    var valueTitle = $("div[role='tabpanel'].active .form-title").val();
    var valueStatus = $("div[role='tabpanel'].active .form-status").val();
    var valueDescription = $("div[role='tabpanel'].active .field-textarea").val();
    var valueData = $("div[role='tabpanel'].active .date").val();
    temp.title = valueTitle;
    temp.status = valueStatus;
    temp.description = valueDescription;
    temp.deadlineDate = valueData;
    $("div[role='tabpanel'].active").find("input[type='text']").each(function () {
        $(this).val('');
    })
}

function newSimpleTask() {
    if(!validateFieldsTask()) return;
    getDataOfTask();
    var div = document.createElement('div');
    var spanClose = document.createElement('span');
    spanClose.className = 'span-close';
    div.innerText = createSimpleTask(temp);
    div.className = "task";
    document.getElementById('list-tasks').appendChild(div);
    div.appendChild(spanClose);
    div.onclick = completedTask;
    spanClose.onclick = function () {
        div.remove();
    };
}

function newHomeTask() {
    if(!validateFieldsTask()) return;
    getDataOfTask();
    var div = document.createElement('div');
    var spanClose = document.createElement('span');
    spanClose.className = 'span-close';
    div.innerText = createHomeTask(temp);
    div.className = "task";
    document.getElementById('list-tasks').appendChild(div);
    div.appendChild(spanClose);
    div.onclick = completedTask;
    spanClose.onclick = function () {
        div.remove();
    }
}

function newProjectTask() {
    if(!validateFieldsTask()) return;
    getDataOfTask();
    var div = document.createElement('div');
    var spanClose = document.createElement('span');
    spanClose.className = 'span-close';
    div.innerText = createProjectTask(temp);
    div.className = "task";
    document.getElementById('list-tasks').appendChild(div);
    div.appendChild(spanClose);
    div.onclick = completedTask;
    spanClose.onclick = function () {
        div.remove();
    }
}

function createSimpleTask(obj){
    return "title: "+obj.title+'; '+"status: "+obj.status;
}

function createHomeTask(obj) {
    return "title: "+obj.title+'; '+"status: "+obj.status+'; '+"description: "+' '+obj.description;
}

function createProjectTask(obj) {
    return "title: "+obj.title+'; '+"status: "+obj.status+'; '+"description: "+obj.description+'; '+"deadline: "+obj.deadlineDate;
}

function completedTask() {
    this.className =  this.className === 'task' ? 'completed-task' : 'task';
}



