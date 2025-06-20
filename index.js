// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Lab 4.2: ARRAY MANIPULATION
// ____________________________________________________________________________

// Task 2: Filter and Search an Array
// ____________________________________________________________________________

let shoppingList = []

function addItem(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item)
  }
}

function removeLastItem() {
  shoppingList.pop()
}

function displayList() {
  for (let item of shoppingList) {
    console.log(item)
  }
}

function filterItems(query) {
  let matches = []
  for (let item of shoppingList) {
    if (item.toLowerCase().includes(query.toLowerCase())) {
      matches.push(item)
    }
  }
  return matches
}

// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Demo
// ____________________________________________________________________________

demo()

import { red, yellow, green } from "./utilities/colorize.js"
import { welcome, taskHeader, goodbye } from "./utilities/decorations.js"

function demo() {
  function demoDisplayList() {
    const tempShoppingList = JSON.stringify([...shoppingList])
    return `shoppingList: ${green(tempShoppingList)}`
  }
  function demoAddItem(item) {
    addItem(item)
    let tempItem = JSON.stringify(item)
    return `addItem(${yellow(tempItem)})\n  ${red("→")} ${demoDisplayList()}`
  }
  function demoRemoveLastItem() {
    removeLastItem()
    return `removeLastItem()\n  ${red("→")} ${demoDisplayList()}`
  }
  function demoFilterItems(query) {
    let tempQuery = JSON.stringify(query)
    let result = JSON.stringify(filterItems(query))
    return `filterItems(${yellow(tempQuery)})\n  ${red("→")} ${green(result)}`
  }

  console.log(welcome("Tishana & Bryan"))

  console.log(taskHeader("Task 1: Array Manipulation Basics"))

  console.log(`shoppingList: ${green("[]")}`)
  console.log("")

  console.log(demoAddItem("bread"))
  console.log(demoAddItem("milk"))
  console.log(demoAddItem("eggs"))
  console.log(demoAddItem("quaaludes"))
  console.log(demoRemoveLastItem())

  console.log(taskHeader("Task 2: Filter and Search an Array"))

  console.log(demoAddItem("organic cheese"))
  console.log(demoAddItem("organic avocados"))
  console.log(demoFilterItems("OrGaNiC"))

  console.log(goodbye())
  console.log("")
}
