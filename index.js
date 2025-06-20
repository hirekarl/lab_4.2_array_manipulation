// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Lab 4.2: ARRAY MANIPULATION
// ____________________________________________________________________________

// Task 1: Array Manipulation Basics
// ____________________________________________________________________________

let shoppingList = []

// function addItem(item) {
//   shoppingList.push(item)
// }

function removeLastItem() {
  shoppingList.pop()
}

function displayList() {
  for (let item of shoppingList) {
    console.log(item)
  }
}

// Task 2: Filter and Search an Array
// ____________________________________________________________________________

function addItem(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item)
  }
}

function filterItems(query) {
  return shoppingList.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  )
}

// Task 3: Render the List in the Browser
// ____________________________________________________________________________

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    let items = []

    function $(id) {
      return document.getElementById(id)
    }

    const itemInput = $("item-input")
    const addItemButton = $("add-item-button")
    const removeLastItemButton = $("remove-last-item-button")
    const itemList = $("item-list")

    function addClickListener(element, func) {
      element.addEventListener("click", func)
    }

    function renderCart() {
      itemList.innerHTML = ""
      for (let item of items) {
        let listItem = document.createElement("li")
        listItem.innerText = item
        listItem.classList.add("list-group-item")
        listItem.classList.remove("active")
        listItem.removeAttribute("aria-current")
        itemList.appendChild(listItem)
      }
      if (itemList.lastChild) {
        itemList.lastChild.classList.add("active")
        itemList.lastChild.setAttribute("aria-current", "true")
      }
    }

    addClickListener(addItemButton, function () {
      const item = itemInput.value

      if (item !== "" && !items.includes(item)) {
        items.push(item)
        renderCart()
        itemInput.value = ""
      }
    })

    addClickListener(removeLastItemButton, function () {
      items.pop()
      renderCart()
    })
  })
}

// ____________________________________________________________________________
// ----------------------------------------------------------------------------
// Demo
// ____________________________________________________________________________

demo()

import { red, yellow, green, blue } from "./utilities/colorize.js"
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

  console.log(`shoppingList: ${green(JSON.stringify(shoppingList))}`)
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

  console.log(taskHeader("Task 3: Render the List in the Browser"))

  console.log(
    `To view my solution for Task 3, open ${yellow(
      "index.html"
    )} with Live Server, or navigate to `
  )
  console.log(`${yellow("[url_goes_here]")} in the browser.`)

  console.log(goodbye())
  console.log("")
}
