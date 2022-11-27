// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtnArr = $('button')
var today = dayjs();
var hour = dayjs().hour();

var timeBlock = document.querySelectorAll('.time-block')
// var hourBlocks = timeBlock.map (s=>s.id)
// var hourBlock9= $("#9")
// var hourBlock10= $("#10")
// var hourBlock11= $("#11")
// var hourBlock12= $("#12")
// var hourBlock13= $("#13")
// var hourBlock14= $("#14")
// var hourBlock15= $("#15")
// var hourBlock16= $("#16")
// var hourBlock17= $("#17")
// console.log(hourBlock10)
// console.log(typeof hourBlock10)
var currentHour= moment().hour;

// $(document).ready(function() {
//   $('#currentDay').text(today.format('MMM D, YYYY'));
//   //create if statement that if 'hour' class is less than current time set to past class
//   //create if statement that if 'hour'class is greater, set to future class
//   //create if statement that if 'hour class is == set to present class


// });
$(function () {
  console.log(saveBtnArr)
  console.log(timeBlock)
  console.log(hour)
  console.log(timeBlock[1])
  
  function initialTimeBlock(){
    // var blockId /*= timeBlock.attr("id");*/
    // for (i=0; i<= timeBlock.length; i++) {
    //   blockID = timeBlock[i]
    // }
    // console.log(blockId);
    if (timeBlock == currentHour) {
      $(timeBlock).addClass("present");/*css("class", "present");change to remove class past set present*/

    }
    else if (blockID <= hour) {
      $(timeBlock).addClass("past")
    }

    }
  }






  function timeUpdater() {
    setTimeout(() => {
      console.log("60 seconds have passed");
      // var blockId = timeBlock.attr("id")
      // console.log(blockId)
      if (blockId == hour /*timeString*/) {
        $(timeBlock).className="present";/*css("class", "present");change to remove class past set present*/

      }
      else if (blockID <= hour/*timeString*/) {
        $(timeBlock).css("class","past")
      }
      else if (blockID >= hour/*timeString*/) {
        $(timeBlock).css("class","future")
      }
    }, 60000);


  }


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  function handleSave() {
    var timeBlockText = localStorage.getItem("timeBlockText")
    console.log(JSON.parse(timeBlockText));

  }


  timeUpdater()
  handleSave()
  // initialTimeBlock()

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var events = $(this).parents().attr("id");
    console.log(events);
    localStorage.setItem(events, text);
    console.log(text);
    console.log(this);
  });


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
