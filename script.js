function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order

  let closestSum = Infinity; // Variable to track the closest sum
  let closestDiff = Infinity; // Variable to track the difference between the closest sum and the target

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right =arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(sum - target);

      if (diff < closestDiff) {
        closestDiff = diff;
        closestSum = sum;
      }

      if (sum === target) {
        return sum; // Found an exact match, return the sum immediately
      } else if (sum < target) {
        left++; // Increment left pointer if the sum is smaller than the target
      } else {
        right--; // Decrement right pointer if the sum is larger than the target
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
