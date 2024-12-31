let interval;

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function startTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startOfYear = new Date(currentYear, 0, 1); // Start of the current year
    const endOfYear = new Date(currentYear + 1, 0, 1); // Start of the next year

    const millisecondsInYear = endOfYear - startOfYear; // Total milliseconds in the current year
    const elapsedMilliseconds = currentDate - startOfYear; // Time passed since the start of the year

    const yearFraction = elapsedMilliseconds / millisecondsInYear; // Fractional part of the current year
    const yearWithFraction = currentYear + yearFraction; // Current year with the fraction

    document.getElementById("agePercentage").innerHTML = yearWithFraction.toFixed(10); // Display with four decimal places
  }, 1); // updating every second
}

startTimer(); // Start the timer when the page loads
