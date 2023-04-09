// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

// var date = dayjs().format('DD/MM/YYYY')
// var currentdayEl = $('#currentDay') 
// currentdayEl.text(date)



// / the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // var saveBtnEl = $(".saveBtn")
  // saveBtnEl.on('click', function(event) {
    
  //   var text = $(this).siblings(".description").val()
  //   var hour = $(this).parent().attr("id")
  // localStorage.setItem(hour,text)
  // })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

// $(".time-block").each(function() {
//   $(this).addClass("future"),
// })




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });



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
 
            
            // array of possible time blocks
timeBlockArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// when page loads
setInterval(function() {
    // display the current day at top of page
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY LTS"));
}, 0);


// checks every minute to update timeblock color
setInterval(function() {
    $(".time-block").each(function (index, el) {
        colorTimeBlocks(el)
    });
}, 1000 * 60);


// displaying the time blocks
var displayTimeBlocks = function() {
    // for each time block 
    for (i = 0; i < timeBlockArray.length; i++) {
        var timeBlockId = timeBlockArray[i];

        // create timeblock child div
        var timeBlockChild = $(`<div id='${timeBlockId}' class='row time-block'></div>`)
        // convert military time to display variable
        convertedTime = moment(timeBlockArray[i], "H").format("h A");
        
        // create hour div, textarea, and button elements
        var timeBlockHour = $(`<div class='hour col-md-1'>${convertedTime}</div>`);
        var timeBlockTextArea = $("<textarea class='description col-md-10'></textarea>");
        var timeBlockButton = $("<button class='saveBtn btn btn-success col-md-1 d-flex align-items-center justify-content-center'></button>")
        var timeBlockIcon = $("<i class='fas fa-save'></i>");

        // append hour div, textarea, and button elements to timeblockchild
        timeBlockChild.append(timeBlockHour);
        timeBlockChild.append(timeBlockTextArea);
        timeBlockButton.append(timeBlockIcon);
        timeBlockChild.append(timeBlockButton);

        // audit time block with color
        colorTimeBlocks(timeBlockId, timeBlockTextArea);

        // find container element
        var timeBlockContainerEl = $(".container");
        // append timeblock div to container
        timeBlockContainerEl.append(timeBlockChild);
    };
};


// compare current time to timeblock time
var colorTimeBlocks = function(timeLabel, timeBG) {   
    // convert timeblockid to momentjs time format
    var currentTime = moment().hour();
    
    // if timeblock is less than current time
    if (timeLabel < currentTime) {
        // set color to grey for past event
        timeBG.addClass("past");
        timeBG.removeClass("present");
        timeBG.removeClass("future");

    // if timeblock is equal to current time
    } else if (timeLabel == currentTime) {
        // set color to red for present event
        timeBG.addClass("present");
        timeBG.removeClass("past");
        timeBG.removeClass("future");
    
    // if timeblock is greater than current time
    } else if (timeLabel > currentTime) {
        // set color to green for future event
        timeBG.addClass("future");
        timeBG.removeClass("past");
        timeBG.removeClass("present");
    };            
};


// save input to local storage on button click
var saveInput = function() {
    // collect user input and record which timeblock it belongs to
    var userInput = $(this).siblings(".description").val();
    var timeBlockNumber = $(this).parent().attr("id");

    // save to local storage
    localStorage.setItem(timeBlockNumber, userInput);
};


// when page loads search localstorage for key-value pairs
var searchStorage = function() {
    for (i = 0; i < timeBlockArray.length; i++) {
        // search key value pairs and retrieve matching values
        userText = localStorage.getItem(timeBlockArray[i]);

        // find the corresponding timeblock and fill it with the associated value
        $(`#${timeBlockArray[i]} .description`).val(userText);
    };
};


// function calls and event listeners
displayTimeBlocks();
searchStorage();
$(".saveBtn").on("click", saveInput);
