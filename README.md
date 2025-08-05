# 💻 JavaScript Functions

A collection of useful JavaScript functions designed to solve a variety of common programming tasks, from financial calculations and data validation to array manipulation and object comparison. Each function is robust, including type and format validation to ensure reliability.

---

### ✨ Function Descriptions

-   **`cashOut(money)`**: 💸 Calculates the cash-out fee for a given amount. It includes validation to ensure the input is a positive number. The function returns a fee of 1.75% of the input amount or an `"Invalid"` string for incorrect input.
-   **`validEmail(email)`**: 📧 A simple email validator that checks for common formatting issues. It verifies if the input is a string, contains a `@` symbol, doesn't have spaces, and ends with `.com`.
-   **`electionResult(votes)`**: 🗳️ Determines the winner of a simple two-candidate election. It takes an array of votes (`"mango"` or `"banana"`) and returns the winner or `"Draw"` if the votes are equal. It handles invalid non-array inputs gracefully.
-   **`isBestFriend(f1, f2)`**: 🤝 Checks if two objects represent best friends. It validates that both inputs are objects and confirms that the `bestFriend` property of each object points to the `roll` of the other.
-   **`calculateWatchTime(times)`**: ⏱️ Calculates the total watch time from an array of seconds. It sums up all the numeric values in the array and converts the total seconds into an object containing hours, minutes, and seconds. It returns `"Invalid"` for non-numeric array inputs.

---

### 🚀 Technologies & Learning

This collection of functions is a great way to demonstrate fundamental JavaScript skills, including:

-   **Data Type Validation**: 🔒 Using `typeof` and `Array.isArray()` to ensure function inputs are of the expected type, preventing runtime errors.
-   **Conditional Logic**: 🚦 Extensive use of `if/else` statements to handle different scenarios and edge cases, such as invalid input or specific conditions like a tied election.
-   **Array Methods**: 🧩 The `electionResult` function effectively uses `Array.prototype.filter()` to count specific items in an array, while `calculateWatchTime` uses `Array.prototype.every()` to validate all array elements.
-   **Object Manipulation**: 📦 The `isBestFriend` and `calculateWatchTime` functions demonstrate how to access properties of objects and construct new ones, respectively.
-   **Mathematical Operations**: 🧮 The `cashOut` and `calculateWatchTime` functions use basic arithmetic and `Math` methods to perform calculations and convert units.
