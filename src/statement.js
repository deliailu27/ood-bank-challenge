const Transaction = require('./transaction.js')
const Account= require ('./account.js')


class Statement {

    constructor(transactions, balance){
        this.header = 'date       ||credit  ||debit  ||balance'
        //keep a record of current transactions and balance 
        this.transactions = transactions
        this.balance=balance
    }

    getHeader(){
        return this.header 
    }

    getSingleTransaction(){
        for (let i = 0; i < this.transactions.length; i++) {
            return `${this.transactions[i].date}|| ${this.transactions[i].amount}||       ||${this.balance}`
            
        }

        
    
    }

    



    printNewStatement(){

        return `${this.header} \n ${this.getSingleTransaction()}`
    }

    
}





module.exports = Statement