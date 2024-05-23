// Get the elements from the HTML code
const waterInput = document.getElementById('water');
const exerciseInput = document.getElementById('exercise');
const bloodSugarInput = document.getElementById('blood-sugar');
const addButton = document.getElementById('add');
const tableBody = document.getElementById('output');

// Add event listener for the add button
addButton.addEventListener('click', () => {
  // Get the values from the input fields
  const water = waterInput.value;
  const exercise = exerciseInput.value;
  const bloodSugar = bloodSugarInput.value;

  // Create a new row for the table
  const newRow = document.createElement('tr');

  // Add the data to the row
  newRow.innerHTML = `
    <td>${water}</td>
    <td>${exercise}</td>
    <td>${bloodSugar}</td>
    <td><button class="edit">Edit</button></td>
    <td><button class="delete">Delete</button></td>
  `;

  // Add the row to the table
  tableBody.appendChild(newRow);

  // Clear the input fields
  waterInput.value = '';
  exerciseInput.value = '';
  bloodSugarInput.value = '';

  // Add event listeners for the edit and delete buttons
  const editButtons = document.getElementsByClassName('edit');
  const deleteButtons = document.getElementsByClassName('delete');

  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', () => {
      // Implement the edit functionality here
    });

    deleteButtons[i].addEventListener('click', () => {
      // Implement the delete functionality here
    });
  }
});