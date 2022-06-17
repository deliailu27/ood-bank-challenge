
class Transaction {
    constructor(date,amount,type){
        this.date = date
        this.amount = amount 
        this.type =type

    }

    getDepositAmount (){
        if(this.type === 'deposit'){
            return this.amount 
        }

    }

    getWithdrawalAmount(){
        if(this.type==='withdrawal'){
            return this.amount 
        }
    }


}


module.exports = Transaction 