// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

var date = dayjs().format('DD/MM/YYYY')
var currentdayEl = $('#currentDay') 
currentdayEl.text(date)



// / the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var saveBtnEl = $(".saveBtn")
  saveBtnEl.on('click', function(event) {
    
    var text = $(this).siblings(".description").val()
    var hour = $(this).parent().attr("id")
  localStorage.setItem(hour,text)
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

$(".time-block").each(function() {
  $(this).addClass("future"),
})




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



// a whole day (9am - 5pm) = 9 rows/3 col in each (look at bootstrap)
            // first column: time
            // second : description = text area
            // 3rd: button -> saves to local storage 
    // create HTML for time blocks
    // event listener for each

// get current time

// 3rd button to save to storage
    // event listener (for the buttons on each row)
    // saves text to local storage 
    // load any saved data from local storage (getItem)
            // look at html text area for the description 
    

    
// current date is coming from Day.js library --- will need the CDN
    // paste just above the js link at the bottom of html
    // read the documentation to figure out how to manipulate it
        // can be used to update the hours

// background color needs to change based on past/present/future
    // if currentHour > timeBlock (set class to past = grey background)
            // else if currentHour < timeBlock (set class to future = green) background
             