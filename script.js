// Get references to HTML elements
const changeTextButton = document.getElementById("changeTextButton");
const changeTextFromInputButton = document.getElementById("changeTextFromInput");
const changeStyleButton = document.getElementById("changeStyleButton");
const addElementButton = document.getElementById("addElementButton");
const removeElementButton = document.getElementById("removeElementButton");
const contentSection = document.getElementById("content");
const textInput = document.getElementById("textInput");

// Predefined texts to change
const texts = [
  "This is the first predefined message!",
  "This is the second predefined message!",
  "JavaScript is awesome for DOM manipulation!"
];

// Function to change text dynamically (Predefined)
changeTextButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  contentSection.querySelector("p").textContent = texts[randomIndex];
});

// Function to change text dynamically based on user input
changeTextFromInputButton.addEventListener("click", function() {
  const userInput = textInput.value.trim();
  if (userInput) {
    contentSection.querySelector("p").textContent = userInput;
  } else {
    contentSection.querySelector("p").textContent = "Please enter some text!";
  }
  textInput.value = ""; // Clear input field
});

// Function to change style dynamically (Random color)
changeStyleButton.addEventListener("click", function() {
  const paragraph = contentSection.querySelector("p");
  
  // Random color generator
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                           ${Math.floor(Math.random() * 256)}, 
                           ${Math.floor(Math.random() * 256)})`;
  
  paragraph.style.color = randomColor;
  paragraph.style.fontSize = `${Math.floor(Math.random() * 20) + 16}px`; // Random font size between 16 and 35px
  paragraph.style.fontFamily = Math.random() > 0.5 ? 'Arial, sans-serif' : 'Courier New, monospace'; // Random font family
  paragraph.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, 
                                          ${Math.floor(Math.random() * 256)}, 
                                          ${Math.floor(Math.random() * 256)}, 0.2)`; // Light background color
});

// Function to add a new element
addElementButton.addEventListener("click", function() {
  const newElement = document.createElement("div");
  newElement.textContent = "This is a dynamically added element!";
  newElement.classList.add("new-element");
  
  document.body.appendChild(newElement);
});

// Function to remove the last added element
removeElementButton.addEventListener("click", function() {
  const lastElement = document.querySelector("div.new-element:last-of-type");
  if (lastElement) {
    document.body.removeChild(lastElement);
  }
});
