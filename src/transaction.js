

class Transaction {
    constructor(amount){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        this.date = today 
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