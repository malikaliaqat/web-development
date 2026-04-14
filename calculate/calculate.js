// Get the form and result elements
const form = document.getElementById('form');
const resultElement = document.getElementById('result');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the length and area values from the input fields
    const length = parseFloat(document.getElementById('length').value);
    const area = parseFloat(document.getElementById('area').value);

    // Calculate the perimeter (assuming a rectangle)
    const perimeter = 2 * (length + Math.sqrt(area / length));

    // Display the result
    resultElement.textContent = `The perimeter is: ${perimeter.toFixed(2)}`;
});