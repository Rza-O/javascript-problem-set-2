/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
    How to make age above 35 is not student
*/

const fare = 500;
const age = 65;
const isStudent = false;

if (age < 10) {
    console.log("Your fare is free");
}

else if (isStudent) {
    const discount = 500 * 50 / 100;
    const payAmount = fare - discount;
    console.log(payAmount)
}

else if (age >= 60 ) {
    const discount = 500 * 15 / 100;
    const payAmount = fare - discount;
    console.log(payAmount)
}

else{
    console.log(fare)
}