// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtnArr = $('button')
var today = dayjs();
var hour = dayjs().hour();

var timeBlock = $('.time-block')


// $(document).ready(function() {
//   $('#currentDay').text(today.format('MMM D, YYYY'));
//   //create if statement that if 'hour' class is less than current time set to past class
//   //create if statement that if 'hour'class is greater, set to future class
//   //create if statement that if 'hour class is == set to present class



//   saveBtn= document.addEventListener('click',function(){
//     localStorage.setItem('savedEvent', today)
//   })


// });
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  console.log(saveBtnArr)
  console.log(timeBlock)
  console.log(hour)
  
  function initialTimeBlock(){
    var blockId /*= timeBlock.attr("id");*/
    for (i=0; i<= timeBlock.length;i++) {
      blockID=timeBlock[i].attr("id");
    }
    console.log(blockId);
    if (blockId == hour) {
      $(timeBlock).className="future";/*css("class", "present");change to remove class past set present*/

    }
    else if (blockID <= hour) {
      $(timeBlock).css("class","past")
    }
    else if (blockID >= hour) {
      $(timeBlock).css("class","future")
    }
  }






  function timeUpdater() {
    //var timeString = $('#currentDay').text(today.format('MMM D, YYYY'));
    //console.log(typeof timeString, timeString)
    setTimeout(() => {
      console.log("60 seconds have passed");
      var blockId = timeBlock.attr("id")
      console.log(blockId)
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



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

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
