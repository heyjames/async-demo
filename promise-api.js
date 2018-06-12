// const p = Promise.reject(new Error('reason for rejection...'));
// p.catch(error => console.log(error));

// When rejecting promises, always use error object 
// so you get the full call stack during the error.

// Create a Promise that is already resolved
// const p = Promise.resolve({ id: 1 });
// p.then(result => console.log(result));

// Create a Promise that is already rejected
// const p = Promise.reject(new Error('reason for rejection'));
// p.catch(error => console.log(error.message));

// using "error.message" only shows the error message.
// using "error" shows the error message with the call stack.


// const p = Promise.reject('reason for rejection'); // Better to use native error object because it will include the native call stack
// p.catch(error => console.log(error));

const p1 = new Promise((resolve) => {
  console.log('Async operation 1...');
  resolve(1);
});

const p2 = new Promise((resolve) => {
  console.log('Async operation 2...');
  resolve(2);
});

Promise.all([p1, p2]) // or Promise.race
  .then(result => console.log(result));