console.log('Before');

getUser(1, getRepositories);

console.log('After');

getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits() {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout( function() {
    console.log('Reading a user from a database.');
    callback({ id: id, gitHubUsername: 'James' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Calling GitHub API for ${username}...`);
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}