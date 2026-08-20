//Recursion practice exercise 1.

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
