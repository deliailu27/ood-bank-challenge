
const Transaction = require ('./transaction.js')
const Statement = require ('./statement.js')
class Account {
    constructor(){
        this.transactionList=[]
        this.balance =0

    }

    transaction(amount){
        const transaction = new Transaction (amount)
        if (transaction.getTransactionAmount()==='error'){
            return 'error: invalid transaction'
        }
        this.transactionList.push(transaction)
        this.balance +=transaction.getTransactionAmount()
    }

  

    getTransactionList(){
        return this.transactionList

    }

    printStatement(){
        const statement = new Statement(this.transactionList,this.balance)
        
        return statement.printNewStatement()
        
    }

    getBalance(){
        return this.balance
    }


}





module.exports = Account 