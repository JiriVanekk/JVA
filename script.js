/**
 * This function displays the contents of a URL that changes every 30 seconds.
 * The list of URLs is stored in an array.
 */
function displayURLContents() {
  const urls = [
   
    "https://status.rondainvest.cz/",
    "https://online.rondainvest.cz/login"
  ];
  
  let index = 0;
  
  setInterval(() => {
    // Make a GET request to the current URL
    fetch(urls[index])
      .then(response => response.text())
      .then(data => {
        // Display the contents of the URL
        console.log(data);
      })
      .catch(error => {
        // Log any errors that occur
        console.error(error);
      });
    
    // Increment the index or reset it to 0 if it exceeds the length of the array
    index = (index + 1) % urls.length;
  }, 30000);
}
