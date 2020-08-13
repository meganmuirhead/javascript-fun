//randomize a prompt for what the sub did, then write an argument of a number between 1-10 to rate how Dom feels about it
//Have different phrases to indicate how he feels, i.e. 5 = "Daddy is not super enthused, but you can still prove yourself"

//create array for random things the sub did.
// the user/daddy rates it from 1-10
//
// let subArr = [];
//
//
// for(let i = 0; i< subArr.length; i ++) {
//     subArr.push(subDid)
//     console.log(subArr, 'arr');
// }
//
// function onFormSubmit() {
//     let subDid = document.getElementById("userInput").value;
//     alert(subDid);
// }

let daddysInput = process.argv[2];


function gettingSubChore (question) {
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
    console.log(randomItem, 'What does daddy rate the lils activity?');
    // for(let i = 0; i < whatSubDidArr.length; i++) {
    //     console.log(whatSubDidArr[i]);
    //     if(whatSubDidArr[i] < ) {
    //
    //     }
    // }

}

gettingSubChore()
