import Calculatrice from '../../src/Calculatrice.js';

let calculatrice;

// test
beforeEach(() => {
    calculatrice = new Calculatrice();
})

it('should be equals to 3', () => {
    expect(calculatrice.add(2, 1)).toEqual(3);
});
