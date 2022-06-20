
const Transaction = require ('./transaction.js')
class Account {
    constructor(){
        this.Transactionlist=[]
        this.Balance =0

    }

    transaction(amount){
        const transaction = new Transaction (amount)
        if (transaction.getTransactionAmount()==='error'){
            return 'error: invalid transaction'
        }
        this.Transactionlist.push(transaction)
        this.Balance +=transaction.getTransactionAmount()
    }

    getBalance (){
        return this.Balance
    }

    gettransactionList(){
        return this.Transactionlist

    }


}


module.exports = Account 