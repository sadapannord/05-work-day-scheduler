// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtnArr = $('button')
var today = dayjs().format("dddd, MMMM D");
var currentDay = document.querySelector("#currentDay")
console.log(today)


var timeBlock = document.querySelectorAll('.time-block')
console.log(timeBlock)
var currentHour= moment().hour();
console.log(saveBtnArr)
console.log(timeBlock)
console.log(currentHour)
console.log(timeBlock[1])

$(function () {

  var showToday = document.createElement('p');
  currentDay.appendChild(showToday);
  showToday.innerHTML="Today is " + today;

  function initialTimeBlock(){
    for (i=0; i< timeBlock.length; i++) {
      var blockID = parseInt(timeBlock[i].id)
      if (blockID < currentHour) {
        $(timeBlock[i]).addClass('past');
        $(timeBlock[i]).removeClass('present');
        $(timeBlock[i]).removeClass('future');
        console.log("past")
      } else if (blockID === currentHour) {
        $(timeBlock[i]).removeClass('past');
        $(timeBlock[i]).removeClass('future');
        $(timeBlock[i]).addClass('present');
        console.log("present")
      } else {
        $(timeBlock[i]).removeClass('past');
        $(timeBlock[i]).removeClass('present');
        $(timeBlock[i]).addClass('future');
        console.log("future")
      }

    // console.log(blockID)
    // console.log(typeof blockID)

    }
  }

  function timeUpdater() {
    setInterval(() => {
      console.log("60 seconds have passed");
      var currentHour= moment().hour();
      console.log(currentHour)

    }, 60000);


  }

  function handleSave() {
    var timeBlockText = localStorage.getItem("timeBlockText")
    console.log(JSON.parse(timeBlockText));

  }


  timeUpdater()
  handleSave()
  initialTimeBlock()

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var events = $(this).parents().attr("id");
    console.log(events);
    localStorage.setItem(events, text);
    console.log(text);
    console.log(this);
  });



$("#9").children(".description").val(localStorage.getItem("9"));
$("#10").children(".description").val(localStorage.getItem("10"));
$("#11").children(".description").val(localStorage.getItem("11"));
$("#12").children(".description").val(localStorage.getItem("12"));
$("#13").children(".description").val(localStorage.getItem("13"));
$("#14").children(".description").val(localStorage.getItem("14"));
$("#15").children(".description").val(localStorage.getItem("15"));
$("#16").children(".description").val(localStorage.getItem("16"));
$("#17").children(".description").val(localStorage.getItem("17"));
});