var modal = document.getElementById("workoutModal");
const saveWorkoutBtn = document.getElementById("saveWorkout");

// Get the button that opens the modal
var addWorkout = document.querySelector('.days').addEventListener("click", () => {
    modal.style.display = "block";
})

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeWorkout");

// When the user clicks on the save button, close and save the modal
saveWorkoutBtn.addEventListener('click', () => {
    modal.style.display = "none";
    getInputValue();
})

// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Reads the inputs from modal and renders them under workouts
function getInputValue() {
  let namevalue = document.getElementById("workoutname").value;
  let setsvalue = document.getElementById("workoutsets").value + ' Sets';
  let repsvalue = document.getElementById("workoutreps").value + ' Reps';

  const newWorkout = document.createElement("div");
  newWorkout.classList.add('workoutlist');
  const newWorkoutContent = document.createTextNode(namevalue + ', ' + setsvalue + ', ' + repsvalue);
  newWorkout.appendChild(newWorkoutContent);

  const current = document.getElementById("insert");
  current.parentNode.insertBefore(newWorkout, current);
}

// Removes selected workout from list
function removeWorkout() {
}
