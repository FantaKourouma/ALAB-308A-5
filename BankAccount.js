// BankAccount.js
class BankAccount {
    constructor(type, money, backupAccount = null) {
        this.type = type;
        this.money = money;
        this.transactionHistory = [];
        this.backupAccount = backupAccount;
    }

    withdraw(amount) {
        const previousBalance = this.money;
        this.money -= amount;

        this.transactionHistory.push({
            previousBalance: previousBalance,
            transactionType: 'withdrawal',
            transactionAmount: amount,
            endingBalance: this.money
        });

        if (this.money < 0 && this.backupAccount) {
            const overdrawnAmount = -this.money;
            this.backupAccount.withdraw(overdrawnAmount);
            this.deposit(overdrawnAmount);
            console.log('overdraft');
        }
    }

    deposit(depo) {
        const previousBalance = this.money;
        this.money += depo;

        this.transactionHistory.push({
            previousBalance: previousBalance,
            transactionType: 'deposit',
            transactionAmount: depo,
            endingBalance: this.money
        });
    }

    showBalance() {
        return this.money;
    }
}

export default BankAccount;
