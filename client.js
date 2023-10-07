const inputDate = document.getElementById('date');
let ageUpdateInterval; // Declare the interval variable outside the event listener

inputDate.addEventListener('input', () => {
    clearInterval(ageUpdateInterval);

   
    const birthdateString = inputDate.value;
    const birthdate = new Date(birthdateString);

    function updateAge() {
        const currentDate = new Date();

        const totalMilliseconds = currentDate - birthdate;
    
        const agePercentage = (totalMilliseconds / (365.25 * 24 * 60 * 60 * 1000) ); // Age percentage based on milliseconds
    
        const agePercentageWithDecimals = agePercentage
    
        document.getElementById('agePercentage').innerHTML = agePercentageWithDecimals.toFixed(8); // Display with eight decimal places
    
        console.log(`Your age is approximately ${agePercentageWithDecimals}`);
    }

    // Initially update age
    updateAge();

    // Start updating every 1 second
    ageUpdateInterval = setInterval(updateAge, 1); // Assign the interval to the variable
});
