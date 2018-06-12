// A "Promise" holds the eventual result of an asynchronous operation.
// Initially, it's in the "Pending" state.
// It kicks off an async operation.
// Success? then Pending goes to Resolved/Fulfilled
// Fails? state of Promise goes from Pending to Rejected

// INTRO====================================================================
// RE-DO THE TUTORIAL HERE BELOW
// const p = new Promise(function(resolve, reject) {

// });
// This constructor function takes an argument.
// This argument is a function that takes 2 parameters.


// This is how we CREATE a promise==========================================
const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // access database, start a web server, or start a timer...
  // when async completes, you will have a value or error
  // if there is a value, you want to return it to the consumers of this Promise (the "const p" part). To return it, we use the 
  // resolve or reject parameters; these parameters are actually functions.
  setTimeout(() => {
    // resolve(1); // result of async
    reject(new Error('message')); // Good practice to send an Error object instead of a string (reject('error'))
  }, 2000);
});


// This is how we CONSUME a promise==========================================
p
.then(result => console.log('Result', result)) // ".catch" catches any errors and ".then" for getting the result of our async operation.
.catch(err => console.log('Error', err.message)); // An error object from "new Error('message')" has a message property. So the string is actually stored in a property called message on the error property.
