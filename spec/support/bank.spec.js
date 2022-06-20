const Transaction = require('../../src/transaction.js')
const Account = require ('../../src/balance.js')

describe('bank',()=>{
    beforeEach(()=>{
        account = new Account
    })


    it ('return error if not a number',()=>{
        const test = new Transaction('fish')
        const expected = 'error'
        const result = test.getTransactionAmount()
        expect(result).toEqual(expected)
    })

    it ('invalid transaction',()=>{
        const expected = 'error: invalid transaction'
        const result = account.transaction('fish')
        expect(result).toEqual(expected)
    })

    it('deposit',()=>{
    
        account.transaction( 1000.99)
        const result= account.Balance
        const expected = 1000.99

        expect(result).toEqual(expected)

    })


    it ('withdraw',()=>{
        
        account.transaction(-1000)
        const expected = -1000
        const result = account.Balance

        expect(result).toEqual(expected)
    })

    it ('get balance',()=>{
        account.transaction(1000)
        account.transaction(2000)
        account.transaction(-1000)

        const result= account.getBalance()
        const expected = 2000

        expect(result).toEqual(expected)
    })
})