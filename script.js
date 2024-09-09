// Set the target date to September 10th
const targetDate = new Date('September 10, 2024 00:00:00').getTime();
const countdownText = document.getElementById('countdownText');
const wishesText = document.getElementById('wishesText');
const dailyImage = document.getElementById('dailyImage');
const surpriseButton = document.getElementById('surpriseButton');

// Image sources for each day (replace with your actual image paths)
const images = [
    'image1.jpg', // September 1st
    'iamge2.jpg',  // September 2nd
    'image3.jpg',  // September 3rd
    'image4.jpg',  // September 4th
    'image5.jpg',  // September 5th
    'image61.jpg',  // September 6th
    'image7.jpg',  // September 7th
    'image81.jpg',  // September 8th
    'image11.jpg',  // September 9th
    'image10.jpg', // September 10th
];

// Function to calculate the remaining time and update the text and image
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the countdown timer
        countdownText.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Display the advance birthday wishes
        wishesText.textContent = "Advance Happy Birthday Deeku!";

        // Update the daily image
        dailyImage.src = images[10 - days]; 
    } else {
        // Show birthday message and the surprise button
        countdownText.textContent = "It's your birthday, Deeku!";
        wishesText.textContent = "Happy Birthday Deeku!";
        dailyImage.src = images[9]; // Birthday image
        surpriseButton.style.display = "inline-block"; // Show the surprise button
    }
}

// Initial call and interval to update the countdown every second
updateCountdown();
setInterval(updateCountdown, 1000); // Update every second
