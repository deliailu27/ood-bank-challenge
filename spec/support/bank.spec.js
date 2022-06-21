const Transaction = require('../../src/transaction.js')
const Account = require ('../../src/account.js')

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
        const result= account.getBalance()
        const expected = 1000.99

        expect(result).toEqual(expected)

    })


    it ('withdraw',()=>{
        
        account.transaction(-1000.00)
        const expected = -1000.00
        const result = account.getBalance()

        expect(result).toEqual(expected)
    })

    it ('get balance',()=>{
        account.transaction(1000.00)
        account.transaction(2000.00)
        account.transaction(-1000.00)

        const result= account.getBalance()
        const expected = 2000.00

        expect(result).toEqual(expected)
    })

    it ('get statement',()=>{
        const result= account.printStatement()
        const expected = `TODO:add statement`

        expect(result).toEqual(expected)
    })
})