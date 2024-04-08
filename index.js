// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    // This function will run when the DOM content is fully loaded and ready to be manipulated
    const textElement = document.getElementById('text'); // Get the paragraph element by its id

    // Check if the element is found in the DOM
    if (textElement) {
        // Replace the text content of the paragraph element
        textElement.textContent = "This is really cool!";
    } else {
        console.error("The element with id 'text' was not found.");
    }
});
