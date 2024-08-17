document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ageForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const age = parseInt(document.getElementById('age').value, 10);

        if (isNaN(age) || age < 0) {
            resultDiv.textContent = 'Please enter a valid age.';
            return;
        }

        let ageGroup;

        if (age >= 0 && age <= 12) {
            ageGroup = 'Child';
        } else if (age >= 13 && age <= 19) {
            ageGroup = 'Teenager';
        } else if (age >= 20 && age <= 64) {
            ageGroup = 'Adult';
        } else if (age >= 65) {
            ageGroup = 'Senior';
        }

        resultDiv.textContent = `Age Group: ${ageGroup}`;
    });
});
