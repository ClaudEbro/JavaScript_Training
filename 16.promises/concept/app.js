//Promise to visit a friend

// 1.I promise my friend i would visit him
const visitMyFriend = new Promise((success, fail) => {
    const timeVisit = Math.floor(Math.random()*(21-8)) + 8;
    console.log('Time : ', timeVisit);

// 2.I can only go before 4pm because i am available from 8am to 4pm.
if (timeVisit <= 16) {
    success("I am coming...");

// 3.After 4pm, if i don't come, it won't be possible.
}else {
    fail("Sorry, i can not be with you.");
}
});

visitMyFriend
    .then((value) => console.log(value))
    .catch((err) => console.log(err));



