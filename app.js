const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar) {
let valueInEuro = dollar / oneEuroIs.USD
let valueInYen = valueInEuro * oneEuroIs.JPY
return valueInYen
}

function fromEuroToDollar(euro) {
let valueInDollar = euro * oneEuroIs.USD
return valueInDollar
}

function fromYenToPound(Yen){
let valueInEuro = Yen / oneEuroIs.JPY 
let valueInPound = valueInEuro * oneEuroIs.GBP
return valueInPound
}


console.log(fromYenToPound(1))
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };