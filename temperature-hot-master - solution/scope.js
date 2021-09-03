function patrichai(age, earning){
	console.log(age, earning);
	var truAge = age + 7;
	function canMarry(expense){
		const remaining = earning -  expense;
		if(remaining > 1000){
			return true;
		}
		return false;
	}
}
console.log(patrichai(50,1000));
