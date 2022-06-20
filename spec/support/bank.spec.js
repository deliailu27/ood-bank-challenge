const Transaction = require('../../src/transaction.js')
const Account = require ('../../src/balance.js')

describe('bank',()=>{
    beforeEach(()=>{
        account = new Account
    })


    it ('return error if not a number',()=>{
        const test = new Transaction('today','fish')
        const expected = 'error'
        const result = test.getTransactionAmount()
        expect(result).toEqual(expected)
    })

    it ('invalid transaction',()=>{
        const expected = 'error: invalid transaction'
        const result = account.transaction('today','fish')
        expect(result).toEqual(expected)
    })

    it('deposit',()=>{
    
        account.transaction('today', 1000.99)
        const result= account.Balance
        const expected = 1000.99

        expect(result).toEqual(expected)

    })


    it ('withdraw',()=>{
        
        account.transaction('today', -1000)
        const expected = -1000
        const result = account.Balance

        expect(result).toEqual(expected)
    })

    it ('get balance',()=>{
        account.transaction('today',1000)
        account.transaction('today',2000)
        account.transaction('today',-1000)

        const result= account.getBalance()
        const expected = 2000

        expect(result).toEqual(expected)
    })
})