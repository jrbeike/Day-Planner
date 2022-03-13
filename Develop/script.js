//display current d/m/y at top of the page
var currentDay = moment(new Date()).format("MM/DD/YYYY");
$("#currentDay").text(currentDay);
//set time and color for tasks based on time stamp
function timeBlockColor(){
    var hour = moment().hours();

    $(".time-block").each(function(){
    //color for time block by id
        var currentHour =parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour){
            $(this).addClass("present");
        } else{
            $(this).addClass("past");
        }
    })
};

//call function
timeBlockColor();
//set up the list for local storage 
//read tasks from storage
var saveBtn = $(".saveBtn");

saveBtn.on("click", function(){
    var time = $(this).siblings(".hour").text();
    var todo = $(this).siblings(".todo").val();

    localStorage.setItem(time, todo);
});

//display text 
function saveTodo() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentTodo = localStorage.getItem(currentHour);

        if(currentTodo !== null) {
            $(this).siblings(".todo").val(currentTodo);
        }
    });
}

//call function
saveTodo();
