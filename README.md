## Passing-Thoughts
Passing-Thoughts is a simple React application that allows users to share their thoughts with others. With this app, users can quickly jot down their passing thoughts and share them with the world.

###Features
Add new thoughts to the list using the input field
Click on a thought to remove it from the list
See the total number of thoughts in the list


###Tools and Technologies
React.js
useState hook for state management
onClick and onChange event handlers for user interactions


##Getting Started
Clone the repository to your local machine using git clone.
Install dependencies using npm install.
Run the app using npm start.


###Implementation
Create the input field: Create an input field that allows the user to enter their thought. Use the useState hook to manage the thought state and the onChange event handler to update the state as the user types.

Display the thoughts list: Create a list that displays all the thoughts entered by the user. Use the useState hook to manage the thoughts list state and the map method to display each thought as a list item.

Add new thoughts: When the user submits a thought, add it to the thoughts list. Use the onClick event handler to call a function that adds the new thought to the thoughts list state.

Remove thoughts: When the user clicks on a thought in the list, remove it from the thoughts list. Use the onClick event handler to call a function that filters out the selected thought from the thoughts list state.
