// const bank = owner => {
// 	balance = 0;
// 	return amount => {
// 		balance = balance + amount;
// 		return balance;
// 	}
// }

// const mofijerbank = bank('Mofij');
// console.log(mofijerbank(500));
// console.log(mofijerbank.balance);
// console.log(mofijerbank(100));

const bank = owner => {
	balance = 0;
	return {
		deposit: amount => {
			balance = balance + amount;
			return balance;
		},
		withdraw:amount =>{
				balance = balance - amount;
				return balance;
		}
	}
}
const mofijerbank = bank('Mofij');
console.log(mofijerbank.deposit(500));
console.log(mofijerbank.balance);
console.log(mofijerbank.deposit(500));
console.log(mofijerbank.withdraw(50));