const nameInput = document.querySelector('#input-name');
const ratingInput = document.querySelector('#input-rating');
const addButton = document.querySelector('#btn-add');
const totalCoursesList = document.querySelector('#courses-list')

addButton.addEventListener('click', () => {
    const enteredName = nameInput.value;
    const enteredRating = ratingInput.value;

    if(
        enteredName.trim().length <= 0 ||
        enteredRating.trim().length <= 0 ||
        enteredRating <=0 || enteredRating > 5
    ) {
        alert("Enter valid course name and rating (1-5)!");
        return;
    }

    const newCourse = document.createElement('ion-item');
    newCourse.textContent = enteredName + ' ' + enteredRating + '/5';
    totalCoursesList.appendChild(newCourse);
});