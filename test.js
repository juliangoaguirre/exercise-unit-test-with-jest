const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("4 dollars should be equivalent to 585.04 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(4);
    console.log("These are the yens",yens)
    const expected = (4 / 1.07) * 156.5; 
    console.log("These are the expected yens",expected)
    // This is the comparison for the unit test
     expect(yens).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

    test("One yen should be equivalent to 0.0055591054313099035", function() {
        // Import the function from app.js
        const { fromYenToPound } = require('./app.js');

        // Use the function like its supposed to be used
        const pound = fromYenToPound(1);

        // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
        const expected = (1 / 156.5) * 0.87; 
        
        // This is the comparison for the unit test
        expect(pound).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
    })