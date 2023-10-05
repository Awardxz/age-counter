setInterval(() => {
    const birthdate = new Date("2006-05-12");
    const currentDate = new Date();
    const oneSecond = 1000; // 1000 milliseconds in a second
    const oneMinute = 60 * oneSecond; // 60 seconds in a minute
    const oneHour = 60 * oneMinute; // 60 minutes in an hour
    const oneDay = 24 * oneHour; // 24 hours in a day

    const totalMilliseconds = currentDate - birthdate;
    const totalSeconds = Math.floor(totalMilliseconds / oneSecond);
    const totalMinutes = Math.floor(totalMilliseconds / oneMinute);
    const totalHours = Math.floor(totalMilliseconds / oneHour);
    const totalDays = Math.floor(totalMilliseconds / oneDay);

    const ageInSeconds = totalSeconds % 60;
    const ageInMinutes = totalMinutes % 60;
    const ageInHours = totalHours % 24;
    const ageInDays = totalDays;

    const agePercentage = (totalMilliseconds / (365.25 * 24 * 60 * 60 * 1000)); // Age percentage based on milliseconds

    const agePercentageWithDecimals = agePercentage

    document.getElementById('agePercentage').innerHTML = agePercentageWithDecimals.toFixed(8); // Display with eight decimal places

    console.log(`Your age is approximately ${ageInDays} days, ${ageInHours} hours, ${ageInMinutes} minutes, and ${ageInSeconds} seconds.`);
}, 1); // blud updating every millisecond
