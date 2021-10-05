// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yan should be 0.0066 pounds", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYanToPound(2)

    // if 1 yan are 0.0090 dollars, then 3 yan should be (3 * 0.027)
    const expected = 2 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYanToPound(2)).toBe(1.6); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 110.92 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(5)

    // if 1 yan are 0.0090 dollars, then 3 yan should be (3 * 0.027)
    const expected = 5 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(5)).toBe(639.5); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})