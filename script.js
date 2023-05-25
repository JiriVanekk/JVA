// Define the URLs you want to display
var urls = [
  'https://www.example.com/page1',
  'https://www.example.com/page2',
  'https://www.example.com/page3'
];

// Get the content element
var contentElement = document.getElementById('content');

// Set the initial index
var currentIndex = 0;

// Function to fetch and display content
function fetchAndDisplayContent() {
  // Fetch the content from the current URL
  fetch(urls[currentIndex])
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      // Display the content
      contentElement.innerHTML = data;
    })
    .catch(function(error) {
      console.log('Error fetching content:', error);
    });
}

// Function to swap between URLs
function swapContent() {
  // Increment the index
  currentIndex++;

  // Reset the index if it goes beyond the number of URLs
  if (currentIndex >= urls.length) {
    currentIndex = 0;
  }

  // Fetch and display the content
  fetchAndDisplayContent();
}

// Fetch and display the initial content
fetchAndDisplayContent();

// Swap the content every 5 seconds (adjust the interval as needed)
setInterval(swapContent, 5000);
