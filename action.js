// joining method:

const dailyRoutine=["wake up","eat","sleep"]

let routine=dailyRoutine.join("'s ")

console.log(routine);

// split method:

let fullName="anbu selvan"

const name=fullName.split(" ")

console.log(name);


// joining and splitting method

let postTitle="this is my post".toUpperCase()

let postSlug=postTitle.split(" ")

console.log(postSlug);

let finalSlug=postSlug.join("-")

console.log(finalSlug);
