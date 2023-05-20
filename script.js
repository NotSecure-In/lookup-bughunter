// Get log container element
var logContainer = document.getElementById('logContainer');
// Get visitor IP element
var visitorIPElement = document.getElementById('visitorIP');

// Function to append log entry to the log container
function appendLog(logEntry) {
  var logElement = document.createElement('p');
  logElement.textContent = logEntry;
  logContainer.appendChild(logElement);
}

// Function to clear the log
function clearLog() {
  logContainer.innerHTML = '';
  localStorage.removeItem('visitorLog');
}

// Function to retrieve visitor's IP address
function getVisitorIP(callback) {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => callback(data.ip))
    .catch(() => callback('Unknown'));
}

// Get current date and time
var dateTime = new Date();

// Get the current path
var currentPath = window.location.pathname;

// Retrieve visitor's IP address
getVisitorIP(function(visitorIP) {
  // Create visitor log entry
  var logEntry = 'Visitor with IP ' + visitorIP + ' accessed ' + currentPath + ' at ' + dateTime;

  // Display the log entry on the HTML page
  appendLog(logEntry);

  // Display the visitor's IP address on the HTML page
  visitorIPElement.textContent = 'Your IP Address: ' + visitorIP;
});
