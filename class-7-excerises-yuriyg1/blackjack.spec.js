describe('Blackjack', () => {
    const ace = { val: 11, displayVal: 'Ace', suit: 'hearts'}
    const two = { val: 2, displayVal: '2', suit: 'hearts'}
    const three = { val: 3, displayVal: '3', suit: 'hearts'}
    const five = { val: 5, displayVal: '5', suit: 'hearts'}
    const six = { val: 6, displayVal: '6', suit: 'hearts'}
    const eight = { val: 8, displayVal: '8', suit: 'hearts'}
    const nine = { val: 9, displayVal: '9', suit: 'hearts'}
    const ten = { val: 10, displayVal: '10', suit: 'hearts'}

    describe('dealerShouldDraw test', () => {
        it('Dealer should stand on 19', () =>{
            expect(dealerShouldDraw([nine,ten])).toEqual(false)
        })

        it('Dealer should draw on 14', () =>{
            expect(dealerShouldDraw([six,eight])).toEqual(true)
        })

        it('Dealer should stand on 18', () =>{
            expect(dealerShouldDraw([eight,ten])).toEqual(false)
        })

        it('Dealer should stand on 19', () =>{
            expect(dealerShouldDraw([eight,ace,ten])).toEqual(false)
        })

    })

    describe('calcPoints function', function() {
        it('No aces should calculate correctly', () => {
            const expected = {
                total: 18,
                isSoft: false
            }
            expect(calcPoints([two, six, ten])).toEqual(expected)
        })    

        it('No aces should calculate correctly', () => {
            const expected = {
                total: 19,
                isSoft: false
            }
            expect(calcPoints([ten, nine])).toEqual(expected)
        })

        it('Aces & softhand should calculate correctly', () => {
            const expected = {
                total: 19,
                isSoft: true
            }
            expect(calcPoints([ace, eight])).toEqual(expected)
        })    

        it('Aces & noSoftHand should calculate correctly', () => {
            const expected = {
                total: 18,
                isSoft: false
            }
            expect(calcPoints([ace, two, nine, six])).toEqual(expected)
        })  
    })

})