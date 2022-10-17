

var rootEl = $('#root');


//ONE--------------------------------------------------------------------------
var addButtononeEl = $('#add-btn1');
var deleteButtononeEl = $('#delete-btn1');

$(document).ready(function(){
  $(".add-rowone").click(function(){
      var taskone = $("#tasksone").val();
      $("table tbody").append(markup);
    });
  // Find and remove selected table rows
  $(".delete-row1").click(function(){
      $("table tbody").find('input[task="record"]').each(function(){
          $(this).parents("tr").remove();
      });
  });
});    

//example of input from lessons
var taskForm1El = $('#task-formone');
var taskList1El = $('#task-listone');

function handleFormSubmit1(event1) {
    event1.preventDefault();
    var taskItem1 = $('input[name="task-input1"]').val();
    if (!taskItem1) {
      event1.preventDefault();
      return;
    }
  // var lstorage
  var textone = $('input[name="task-input1"]').val();
  localStorage.setItem('input[name="task-input1"]', textone);
  console.log('sent 1 to local storage')

  // var taskList
  var taskListItem1El = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  taskListItem1El.text(taskItem1);
  taskListItem1El.append(
    '<button class="btn-small delete-btn1">clear</button>'
  );
  taskList1El.append(taskListItem1El);
  $('input[name="task-input1"]').val('');
}

function handleRemoveItem1(event1) {
  var btnClicked1 = $(event1.target);
  btnClicked1.parent('li').remove();
  console.log('task 1 removed!');
}

taskList1El.on('click', '.delete-btn1', handleRemoveItem1);
taskForm1El.on('submit', handleFormSubmit1);

addButtononeEl.on('click', function () {
  console.log("clicked add 1");
  });