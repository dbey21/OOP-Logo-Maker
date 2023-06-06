const {Circle, Triangle, Square, } = require('./shapes.js')


describe('circle', () => {
    it('the circle should be round', () => {
        const circle = new Circle()
        circle.setColor('blue')
        const round = '<circle cx="150" cy="100" r="80" fill="blue"/>'
        const finalResult = circle.render()
        expect(finalResult).toEqual(round)
    } )
})

describe('triangle', () => {
    it('the triangle should have 3 corners', () => {
        const triangle = new Triangle()
        triangle.setColor('green')
        const sharp = '<polygon points="200,10 250,190 160,210" fill="green"/>'
        const finalResult = triangle.render()
        expect(finalResult).toEqual(sharp)
    } )
})

describe('square', () => {
    it('the square should have 4 sides', () => {
        const square = new Square()
        square.setColor('red')
        const block = '<rect width="300" height="100" fill="red"/>'
        const finalResult = square.render()
        expect(finalResult).toEqual(block)
    } )
})