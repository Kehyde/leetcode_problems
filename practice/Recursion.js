//Recursion practice exercise 1.
//Given (start) and (end) print start's value ascending to end, then print start's value in descending order.
//Start and End can be found in index.js.

function countRange(start, end, isCountingDown) {
  if (!start || !end) {
    return console.log(
      "ERROR: Ensure 'start' and 'end' are assigned a value > 0. Current values:",
      start,
      end,
    );
  }

  if (start === end) {
    isCountingDown = true;
  }

  if (isCountingDown) {
    console.log(start);
    start--;
    return countRange(start, end, isCountingDown);
  } else {
    console.log(start);
    start++;
    return countRange(start, end, isCountingDown);
  }
}

export { countRange };
