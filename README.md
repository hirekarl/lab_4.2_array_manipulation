# Lab 4.2: Array Manipulation

[Karl Johnson](https://github.com/hirekarl)  
2025-RTT-30  
<date datetime="2025-06-19">2025-06-19</date>  

![Preview image of Task 3 output.](./images/preview.png)

## Overview
### Viewer Instructions
To view demos for **Task 1** and **Task 2** in the terminal, run\*:

```bash
node index
```

To view solution for **Task 3** in the browser, open [`./index.html`](./index.html) with Live Server or navigate to [effulgent-pudding-ae02a8.netlify.app](https://effulgent-pudding-ae02a8.netlify.app/). **Task 1** and **Task 2** demos will also appear in the browser console (implementation intended for Chrome).

*\*Note that custom text colors (implemented with ANSI escape sequences) may not render properly in Visual Studio Code's default Output pane with Run Code. Instead, run from the Terminal pane with `node index`.*


### Solution Source
- **Task 1**, **Task 2**: [`./index.js`](./index.js).
- **Task 3**: [`./index.js`](./index.js), [`./index.html`](./index.html)

### Scenario
You have been assigned to work on a feature that handles large sets of data in the form of arrays. You need to build efficient functionality to add, remove, and filter data from arrays based on user interactions. In this assignment, you will practice manipulating arrays with JavaScript methods and writing code that dynamically handles user inputs.

### Lab Instructions
#### Task 1: Array Manipulation Basics
1. Create an empty array called `shoppingList`.
2. Write a function called `addItem` that takes an item as a parameter and adds it to the `shoppingList` array.
3. Write a function called `removeLastItem` that removes the last item from the `shoppingList` array.
4. Write a function called `displayList` that logs all items in the `shoppingList` array to the console.

#### Task 2: Filter and Search an Array
1. Modify the `addItem` function to only add the item if it is not already in the `shoppingList` array.
2. Write a function called `filterItems` that takes a search term as a parameter and returns all items in the `shoppingList` that contain that search term (case-insensitive).

#### Task 3: Render the List in the Browser
1. Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
2. Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
3. Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.

### Reflection
After completing this lab, reflect on the following questions:

1. How did array methods like `push()` and `filter()` help you manipulate data in this activity?

> `.push()` was useful for adding items to `shoppingList` in **Task 1** and **Task 2** and the list of items in **Task 3**. `.filter()` came in handy when implementing `filterItems()`; initially, I looped over the items of `shoppingList` with a `for...of`, but realized I could use `.filter()` to do it more gracefully (and probably more efficiently?).

2. What challenges did you face when trying to filter and search for items in the array?

> It was just the syntax for me. I'm familiar with lambda functions and arrow syntax, but I had to look at the documentation to get it right. Also, I initially thought that the string method `.toLowerCase()` was called `.toLower()`, which prompted a doc check.

3. How would you modify this code to make it more efficient or user-friendly?

> `displayList()` isn't super useful as it is. It simply loops over each item in `shoppingList` and prints each item on a new line, with no context, no styling, and no return value. In preparing the demo functions for this lab, `demoDisplayList()` doesn't actually make reference to `displayList()` and serves as an alternate implementation.
>
> Right now, users have to manually click on the "Add Item" button to add&mdash;it would be cool to implement functionality so they could press `[Enter]` to add an item to the list, too. I implemented `aria-current="true"` to the most recently added list item (and removed it from all other list items), but there may be additional opportunities for accessibility features.
