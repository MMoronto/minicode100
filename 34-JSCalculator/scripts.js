/*
TODO:
  Limit number input
  Disallow . from being entered multiple times
  Clean up structure
*/

(function() {
  "use strict";

  // Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID ...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };
  // Variables
  var viewer = el("#viewer"), // Calculator screen where result is displayed
    equals = el("#equals"), // Equal button
    nums = el(".num"), // List of numbers
    ops = el(".ops"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator; // Batman

    // When: Number is clicked. Get the current number selected
    var setNum = function() {};

    // When: Operator is clicked. Pass number to oldNum and save operator
    var displayNum = function() {};

    // When: Equals is clicked. Calculate result
    var displayNum = function() {};

    //When: Clear button is pressed. Clear everything
    var clearAll = function() {};

    /* The click events */

    // Add click event to numbers
    for (var i = 0, l = nums.length; i < l; i++) {
      nums[i].onclick = setNum;
    }

    // Add click event to operators
    for (var i = 0, l = ops.length; i < l; i++) {
      ops[i].onclick = moveNum;
    }

    // Add click event to equal sign
    equals.onclick = displayNum;

    // Add click event to clear button
    el("#clear").onclick = clearAll;

    // Add click event to reset button
    el("#reset").onclick = function() {
      window.location = window.location;
    };
    
}());
