// // script.js

// // 1. Get the heading element by its ID
// const changingTextElement = document.getElementById("title-name");

// // 2. Create an array of the texts you want to display
// const textArray = [
//   "I'm a Front-End Developer",
//   "I'm a Web Developer",
//   "I'm Shamir Khan",
// ];

// // 3. Initialize a variable to keep track of the current index
// let textIndex = 0;

// // 4. Create a function to change the text
// function changeText() {
//   // Update the text content of the h1 element
//   changingTextElement.textContent = textArray[textIndex];

//   // Increment the index for the next text
//   textIndex++;

//   // If the index exceeds the array length, reset it to 0 to loop
//   if (textIndex >= textArray.length) {
//     textIndex = 0;
//   }
// }

// // 5. Use setInterval to call the function at a regular interval
// // The time is in milliseconds (e.g., 3000ms = 3 seconds)
// setInterval(changeText, 3000);

// method two (advanced)
// script.js for typewriter effect

const changingTextElement = document.getElementById("title-name");
const textArray = [" Front-End Developer", " a Web Developer", " Shamir Khan"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = textArray[textIndex];

  if (!isDeleting) {
    // Typing out the text
    changingTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      // Wait a bit before starting to delete
      setTimeout(typeWriter, 1500);
      return;
    }
  } else {
    // Deleting the text
    changingTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      // Wait a bit before starting to type the next word
      setTimeout(typeWriter, 500);
      return;
    }
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect
document.addEventListener("DOMContentLoaded", typeWriter);
