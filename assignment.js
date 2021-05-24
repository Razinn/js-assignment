
//kilometer to meter;
function kilometerToMeter(kilo){
    meter = 1000 * kilo;
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);

//budgetCalculator
function budgetCalculator(watch,phone,laptop){
    watchPrice = 50 * watch;
    phonePrice = 100 * phone;
    laptopPrice = 500 * laptop;

    total = watchPrice + phonePrice + laptopPrice;
    return total;
}
var totalPrice = budgetCalculator(3,4,3);
console.log(totalPrice);

//hotelCost
function hotelCost(day){
    var totalVara = 0;
    if(day <= 10){
        totalVara = 100 * day;
    }
    else if(day <= 20){
        var firstPart = 100 * 10;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        totalVara = firstPart + secondPart;
    }
    else{
        var firstPart = 100 * 10;
        var secondPart = 80 * 10;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        totalVara = firstPart + secondPart + thirdPart;
    }
    return totalVara;
}

var hotelVara = hotelCost(25)
console.log(hotelVara);