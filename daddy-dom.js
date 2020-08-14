const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
//randomize a prompt for what the sub did, then write an argument of a number between 1-10 to rate how Dom feels about it
//Have different phrases to indicate how he feels, i.e. 5 = "Daddy is not super enthused, but you can still prove yourself"

//create array for random things the sub did.
// the user/daddy rates it from 1-10
//
// let subArr = [];
//
//
// function onFormSubmit() {
//     // let subDid = document.getElementById("userInput").value;
//     return ratedByDaddy = prompt('what does daddy rate this? 1 being the worst 10 being the bestest')
//
// }
// let daddysRatedFromHtml = onFormSubmit();
let daddysInput = process.argv[2];

// let daddysInput = process.argv[2];


function gettingSubChore() {
    let whatSubDidArr = ['Took dog for walk.',
        'Made a coffee.',
        'Made the bed.',
        'Spilled a drink.',
        'Dropped the soap.',
        'Made the room messy.',
        'Worked on the rigs.',
        'Watered the garden.',
        'Picked up the kids.',
        'Worked on code.'
    ]
    let randomItem = whatSubDidArr[Math.floor(Math.random() * whatSubDidArr.length)]
    console.log("Your sub ", randomItem);
    // for(let i = 0; i < whatSubDidArr.length; i++) {
    //     console.log(whatSubDidArr[i]);
    //     if(whatSubDidArr[i] < ) {
    //
    //     }
    // }

}

gettingSubChore();

rl.question('What does daddy rate the lil\'s activity? 10 being the best, 1 being the worst \n',
    (num) => {
        console.log(num)
        parseInt(num.trim())
        if (num < 4) {
            return "You are grounded, go put your nose in the corner young lady!"
        } else if (num > 4 && num <= 7) {
            return "You are pushing it, daddy thinks you could be better!"
        } else {
            return "You are a really good girl! Daddy is please"

        }
    })
// function daddyRate(num) {
//     parseInt(num)
//     if( num <  4) {
//        return  "You are grounded, go put your nose in the corner young lady!"
//     } else if ( num > 4 && num <= 7) {
//         return  "You are pushing it, daddy thinks you could be better!"
//     } else {
//         return "You are a really good girl! Daddy is please"
//
//     }
// }
// let rate = daddyRate(daddysInput);
// let rate = daddyRate(daddysRatedFromHtml);
// console.log(rate)
