//randomize a prompt for what the sub did, then write an argument of a number between 1-10 to rate how Dom feels about it
//Have different phrases to indicate how he feels, i.e. 5 = "Daddy is not super enthused, but you can still prove yourself"

//create array for random things the sub did.
// the user/daddy rates it from 1-10

let subArr = [];


for(let i = 0; i< subArr.length; i ++) {
    subArr.push(subDid)
    console.log(subArr, 'arr');
}

function onFormSubmit() {
    let subDid = document.getElementById("userInput").value;
    alert(subDid);
}
