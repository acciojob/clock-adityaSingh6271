//your JS code here. If required.
 function updateTimer() {
            // Get the current date and time
            var currentDateTime = new Date();

            // Format the date and time
            var formattedDateTime = currentDateTime.toLocaleString();

            // Display the formatted date and time in the 'timer' element
            document.getElementById('timer').innerText = formattedDateTime;
        }

        // Update the timer every second
        setInterval(updateTimer, 1000);

        // Initial call to display the timer immediately
        updateTimer();
