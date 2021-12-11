// Defining random words for responses
const mainCharacter = ["You", "Your sister", "Your dog", "You firstborn", "Your biggest enemy"]
const verbs = ["eat", "caress", "laugh at", "console", "marry"]
const subjects = ["a monkey", "a monk", "themselves", "Harry Potter", "the cast of Selling Sunset", "The Wizard of Oz"]
const locations = ["in Hawaii", "in Chernobyl", "in your backyard", "on the moon", "on Mars", "at a movie premiere", "during a stand up"]

// return a random year in the future
const year = new Date().getFullYear() + Math.floor(Math.random() * 10) + 1

// function to build the prediction
const prediction = (main, verb, subj, loc, time) => {
    // to pick the words, randomly pick an item from each array
    main = mainCharacter[Math.floor(Math.random() * mainCharacter.length)]
    verb = verbs[Math.floor(Math.random() * verbs.length)]
    subj = subjects[Math.floor(Math.random() * subjects.length)]
    loc = locations[Math.floor(Math.random() * locations.length)]
    time = year
    //return the sentence complete
    return `${main} will ${verb} ${subj} ${loc}. This will happen in the year ${time}.`
}

console.log(prediction())