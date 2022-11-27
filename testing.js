 /* saveBtnArr.on("click", function () {
    console.log(this);
    console.log($(this).parents("#hour-*"))
    handleSave()
 });*/

 var hourBlock9= $("#9");


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
var currentHour= moment().hour();


if (blockID == currentHour) {
   $(timeBlock).addClass("present");/*css("class", "present");change to remove class past set present*/

 }
 else if (blockID <= currentHour) {
   $(timeBlock).addClass("past")
 }


 if (blockId == hour /*timeString*/) {
   $(timeBlock).className="present";/*css("class", "present");change to remove class past set present*/

 }
 else if (blockID <= hour/*timeString*/) {
   $(timeBlock).css("class","past")
 }
 else if (blockID >= hour/*timeString*/) {
   $(timeBlock).css("class","future")
 }



 function hourUpdater() {
   // get current number of hours
   var currentHour = moment().hours();

   // loop over time blocks
   $('.time-block').each(function() {
     
     // check if we've moved past this time
   });

 }

 hourUpdater();
