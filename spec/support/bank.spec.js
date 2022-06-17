const Transaction = require('../../src/transaction.js')
const Balance = require ('../../src/balance.js')

describe('bank',()=>{
    beforeEach(()=>{
        balance = new Balance 
    })

    it('deposit',()=>{
        

        const result= balance.deposit(new Transaction('today', 1000, 'deposit'))
        const expected = 1000

        expect(result).toEqual(expected)

    })


    it ('withdraw',()=>{
        const result = balance.withdraw(new Transaction('today', 1000, 'withdrawal'))
        const expected = -1000

        expect(result).toEqual(expected)
    })
})