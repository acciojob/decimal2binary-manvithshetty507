function threeSum(n) {
	let ans = "";
	
	while(n !== 0){
		
		let dig = parseInt(n%2);
		ans += dig;
		n = parseInt(n/2);
	}
	return ans;
}

module.exports = threeSum;
