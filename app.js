console.log('Before');
// getUser(1, getRepositories);

// function getRepositories(user) {
//   getRepositories(user.gitHubUsername, getCommits);
// }

// function getCommits(repos) {
//   getCommits(repo, displayCommits);
// }

// function displayCommits(commits) {
//   console.log(commits);
// }






// 1st demonstration===========
// const p = getUser(1);
// p.then(user => console.log(user));

// 2nd demonstration to simplify
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('Commits', commits))
  .catch(err => console.log('Error', err.message));


async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  }
  catch (err) {
    console.log('Error:', err.message);
  }
}




console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { // setTimeout() is an asynchronous (or non-blocking function).
      console.log('Reading a user from a database...');
      reject({ id: id, gitHubUsername: 'heyjames' });
    }, 1000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    console.log('Retrieving GitHub Repositories...');
    setTimeout(() => {
      resolve(['repo1', 'repo2', 'repo3']);
    }, 1000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 1000);
  });
}