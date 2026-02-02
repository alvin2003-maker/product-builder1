document.addEventListener('DOMContentLoaded', () => {
    const universityInput = document.getElementById('university');
    const gpaInput = document.getElementById('gpa');
    const addButton = document.getElementById('add-btn');
    const displayUniversity = document.getElementById('display-university');
    const displayGpa = document.getElementById('display-gpa');

    addButton.addEventListener('click', () => {
        const university = universityInput.value.trim();
        const gpa = gpaInput.value.trim();

        if (university && gpa) {
            displayUniversity.textContent = university;
            displayGpa.textContent = gpa;

            // Clear input fields
            universityInput.value = '';
            gpaInput.value = '';
        } else {
            alert('대학교와 학점을 모두 입력해주세요.');
        }
    });
});
