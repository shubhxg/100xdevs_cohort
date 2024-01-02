let age;

while (true) {
    age = prompt("Enter your age");
        // Check if the input is a valid number
        if (!isNaN(age)) {
            alert(`Hello ${age} years old visitor! Greetings`);
            break; // Exit the loop if a valid number is entered
        } else {
            alert("Please enter a valid number!");
        }
}

