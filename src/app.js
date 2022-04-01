const originDiv = document.querySelectorAll(".original-container div")          // Selects the divs within class original-container
const cloneDiv = document.querySelector(".copy-container")                      // Selects the class copy-container
const clrBtn = document.querySelector("button")                                 // Selects the only button

originDiv.forEach(iterate => iterate.addEventListener('click', (evt) => {
    const itemBeingCopied = evt.target.parentElement.outerHTML                  // We set a new object to be equivalent to the item we are copying
    cloneDiv.insertAdjacentHTML("beforeend", itemBeingCopied)                   // And then we add it into the copy-container
}))

clearArea = () => cloneDiv.innerHTML = "";                                      // Creates a function to clear the innerHTML of the cloneDiv div.
clrBtn.addEventListener('click', clearArea)                                     // When click on the clear button is registered, we execute the function clearArea.