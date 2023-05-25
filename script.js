var urls = [
    "https://status.rondainvest.cz/",
    "https://rondainvest.cz/"
];

var currentIndex = 0;
var urlDisplay = document.getElementById("url-display");

function changeURL() {
    urlDisplay.innerHTML = urls[currentIndex];
    currentIndex = (currentIndex + 1) % urls.length;
}

// Change URL every 5 seconds
setInterval(changeURL, 5000);
