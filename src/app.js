
// CLONE
const originDiv = document.querySelectorAll(".original-container div")            // Selects the divs within class original-container
const cloneDiv = document.querySelector(".copy-container")                        // Selects the class copy-container

originDiv.forEach(lookThrough => lookThrough.addEventListener('click', (evt) => { // When we register a click on any of the items within the original-container, we perform the following...
    const itemBeingCopied = evt.target.parentElement.outerHTML                    // We set a new object to be equivalent to the item we are copying
    cloneDiv.insertAdjacentHTML("beforeend", itemBeingCopied)                     // And then we add it into the copy-container
}))

// DELETE
const clrBtn = document.querySelector("button")                                   // Selects the only button

clearArea = () => cloneDiv.innerHTML = "";                                        // Creates a function to clear the innerHTML of the cloneDiv div.
clrBtn.addEventListener('click', clearArea)                                       // When click on the clear button is registered, we execute the function clearArea.