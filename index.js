// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Lab 4.2: ARRAY MANIPULATION
// ____________________________________________________________________________

// Task 1: Array Manipulation Basics
// ____________________________________________________________________________

let shoppingList = []

function addItem(item) {
  shoppingList.push(item)
}

function removeLastItem() {
  shoppingList.pop()
}

function displayList() {
  for (let item of shoppingList) {
    console.log(item)
  }
}

// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Demo
// ____________________________________________________________________________

demo()

import { red, yellow, green } from "./utilities/colorize.js"
import { welcome, taskHeader, goodbye } from "./utilities/decorations.js"

function demo() {
  function demoDisplayListArray() {
    const tempShoppingList = JSON.stringify([...shoppingList])
    return `${green(tempShoppingList)}`
  }
  function demoAddItem(item) {
    addItem(item)
    item = JSON.stringify(item)
    return `addItem(${yellow(item)})\n  ${red("→")} ${green(
      demoDisplayListArray()
    )}`
  }
  function demoRemoveLastItem() {
    removeLastItem()
    return `removeLastItem()\n  ${red("→")} ${green(demoDisplayListArray())}`
  }

  console.log(welcome("Tishana & Bryan"))

  console.log(taskHeader("Task 1: Array Manipulation Basics"))

  console.log(demoAddItem("bread"))
  console.log(demoAddItem("milk"))
  console.log(demoAddItem("eggs"))
  console.log(demoAddItem("quaaludes"))
  console.log(demoRemoveLastItem())

  console.log(goodbye())
  console.log("")
}
