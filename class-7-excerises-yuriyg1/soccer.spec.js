describe('Test Soccer Game', () => {
    describe('Test the getTotalPoints Method', () =>{

        it('Should return correct point total', () =>{
            expect(getTotalPoints('llll')).toBe(0)
            expect(getTotalPoints('dddd')).toBe(4)
            expect(getTotalPoints('wwww')).toBe(12)
            expect(getTotalPoints('wwdl')).toBe(7)
        })
    })

    describe('Test team order', () =>{

        const first = {name: 'Sounders', results: 'wwlwdd'}
        const second = {name: 'Timbers', results: 'wwlwdl'}
        const order = orderTeams(first, second)
        const expected = `Sounders: 11
Timbers: 10`

        it('Should return correct team order', () =>{
            expect(order).toEqual(expected)
        })
    })
})

