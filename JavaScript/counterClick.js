// Get the button and count elements by their IDs
const clickButton = document.getElementById("clickButton");
const clickCount = document.getElementById("clickCount");

let count = 0; // Initialize the count to 0

// Add a click event listener to the button
clickButton.addEventListener("click", function () {
    count++; // Increment the count
    clickCount.textContent = count; // Update the displayed count
});
