document.addEventListener('DOMContentLoaded', function() {
  const dobInput = document.getElementById('dob');
  const registrationForm = document.getElementById('registrationForm');
  const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

  dobInput.addEventListener('change', function() {
    const dob = new Date(this.value);
    const today = new Date();
    const minAge = 18;
    const maxAge = 55;

    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < minAge || age > maxAge) {
      alert('Please enter a date of birth between 18 and 55 years ago.');
      this.value = ''; // Clear the input value
    }
  });

  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;

    // Add form values to the table
    const newRow = dataTable.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${terms ? 'Yes' : 'No'}</td>`;
    
    // Clear the form
    registrationForm.reset();
  });
});
