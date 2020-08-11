
let usersInput = process.argv[2];



let generateAnagrams = (word, anagram = '', anagrams = []) => {
    if(!word) {
        anagrams.push(anagram);
        return;
    }
    for( let i = 0; i < word.length; i++) {

        anagram += word[i];
        generateAnagrams(word.slice(0, i), word.slice(i + 1), anagram, anagrams);
        anagram = anagram.slice(0, anagram.length - 1);
    }
    return [... new Set(anagrams)];
}

console.log(generateAnagrams(usersInput));
