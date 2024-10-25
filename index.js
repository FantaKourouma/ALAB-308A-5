// index.js
import BankAccount from './BankAccount.js';

const savingsAccount = new BankAccount('savings', 1000);
const checkingAccount = new BankAccount('checking', 1000, savingsAccount);

console.log(savingsAccount);
console.log(checkingAccount);

checkingAccount.withdraw(1100);
console.log(checkingAccount.showBalance());
