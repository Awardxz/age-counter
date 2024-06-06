const input = document.querySelector(".dateInput");
console.log(input.value);
let interval;
input.addEventListener("input", () => {
  startTimer(input.value);
});

function startTimer(timer) {
  clearInterval(interval);
  interval = setInterval(() => {
    const birthdate = new Date(timer);
    const currentDate = new Date();
    const totalMilliseconds = currentDate - birthdate - 1;
    const agePercentage = totalMilliseconds / (365.25 * 24 * 60 * 60 * 1000); // Age percentage based on milliseconds
    const agePercentageWithDecimals = agePercentage;
    document.getElementById("agePercentage").innerHTML =
      agePercentageWithDecimals.toFixed(9); // Display with eight decimal places
  }, 1); // blud updating every millisecond
}
