//set up the list for local storage 
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
//remove all classes... already removed had to add first
//load tasks on load
//read tasks from storage
//update time second every 1000ms
//on task click highligh task
//highlight unsaved tasks
//indicate changes are unsaved
//on saave update tasks in local storage
//promts to save unsaved chages before page reload
