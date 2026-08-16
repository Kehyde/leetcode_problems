var removeDuplicates = function (nums) {
  //following pointer
  let j = 0;

  //i is leading pointer
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      //remove element from int array.
      //decided to rewrite over array, so i didnt have to deal with splice() changing my for loop.
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};
