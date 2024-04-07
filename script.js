// Array to store the reported issues
var issues = [];

// Function to submit a new issue
function submitIssue() {
  var location = document.getElementById('location').value;
  var description = document.getElementById('description').value;

  // Create a new issue object
  var issue = {
    location: location,
    description: description,
    status: 'New'
  };

  // Add the issue to the issues array
  issues.push(issue);

  // Clear the form fields
  document.getElementById('location').value = '';
  document.getElementById('description').value = '';

  // Refresh the issue list
  refreshIssueList();
}

// Function to update the status of an issue
function updateIssueStatus(index) {
  var newStatus = prompt('Enter the new status:');
  if (newStatus) {
    issues[index].status = newStatus;
    refreshIssueList();
  }
}

// Function to refresh the issue list
function refreshIssueList() {
  var issueListElement = document.getElementById('issueList');
  issueListElement.innerHTML = '';

  // Loop through the issues array and create list items for each issue
  for (var i = 0; i < issues.length; i++) {
    var issue = issues[i];
    var listItem = document.createElement('li');

    // Create the status element
    var statusElement = document.createElement('div');
    statusElement.classList.add('status');
    statusElement.textContent = 'Status: ' + issue.status;
    listItem.appendChild(statusElement);

    // Create the location element
    var locationElement = document.createElement('div');
    locationElement.textContent = 'Location: ' + issue.location;
    listItem.appendChild(locationElement);

    // Create the description element
    var descriptionElement = document.createElement('div');
    descriptionElement.textContent = 'Description: ' + issue.description;
    listItem.appendChild(descriptionElement);

    // Add an event listener to update the status when the issue is clicked
    listItem.addEventListener('click', (function(index) {
      return function() {
        updateIssueStatus(index);
      };
    })(i));

    issueListElement.appendChild(listItem);
  }
}