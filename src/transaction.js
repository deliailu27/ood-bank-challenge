
class Transaction {
    constructor(date,amount){
        this.date = date
        this.amount = amount 
        

    }

    getTransaction(){
        return this
    }

    getTransactionAmount(){
        if (!isNaN(this.amount)){
            return this.amount
        }
        else return 'error' 
    }

    getDate(){
        return this.date
    }


}


module.exports = Transaction 