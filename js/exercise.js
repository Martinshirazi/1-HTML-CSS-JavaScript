const guestArray = ['Jack', 'Aravind', 'Samira', 'Haley', 'Lydia', 'Adrian'];

for (let i = 0; i < guestArray.length; i++) {
    console.log('welcome to the party ' + guestArray[i] + "!");
}

for (let guest of guestArray) {
    guest = guest.toUpperCase(); //optional , it makes all the names if the result capitalized.
    console.log('welcome to the party ' + guest + "!")


} //you get exactly the same result from both of these. for, of loop is much cleaner tho
