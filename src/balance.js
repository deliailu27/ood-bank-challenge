
const Transaction = require ('./transaction.js')
class Balance {
    constructor(){
        this.Transactionlist=[]
        this.Balance =0

    }

    deposit(transaction){
        
        this.Transactionlist.push(transaction)
        this.Balance +=transaction.getDepositAmount()

        return this.Balance

    }

    withdraw(transaction) {
        this.Transactionlist.push(transaction)
        this.Balance -= transaction.getWithdrawalAmount()

        return this.Balance
    }

    getBalance (){
        return this.Balance
    }


}


module.exports = Balance