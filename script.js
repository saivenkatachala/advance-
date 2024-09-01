// Set the target date to September 10th
const targetDate = new Date('September 1, 2024 00:00:00').getTime();
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
    'image10.jpg',
    'image91.jpg'// September 10th
];

// Function to calculate the remaining days and update the text and image
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

    console.log("Days left:", daysLeft); // Debug log

    if (daysLeft > 0) {
        countdownText.textContent = `${daysLeft} days more`;
        wishesText.textContent = "Advance Happy Birthday Deeku!";
        dailyImage.src = images[10 - daysLeft]; // Set the image for the corresponding day
    } else {
        countdownText.textContent = "It's your birthday, Deeku!";
        wishesText.textContent = "Happy Birthday Deeku!";
        dailyImage.src = images[9]; // Set the birthday image
        surpriseButton.style.display = "inline-block"; // Show the surprise button
    }
}

// Initial call and interval to update the countdown every 24 hours
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);
