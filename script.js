function displayURLContents() {
  const urls = [
    "https://status.rondainvest.cz/",
    "https://online.rondainvest.cz/login"
  ];

  let index = 0;
  const contentElement = document.getElementById("content");

  setInterval(() => {
    fetch(urls[index])
      .then(response => response.text())
      .then(data => {
        // Display the contents of the URL inside the content element
        contentElement.innerHTML = data;
      })
      .catch(error => {
        // Log any errors that occur
        console.error(error);
      });

    index = (index + 1) % urls.length;
  }, 30000);
}

// Call the displayURLContents function to start displaying the URL contents
displayURLContents();
