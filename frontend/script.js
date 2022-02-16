const listElem = document.querySelector(".entryList")
listElem.innerHTML = localStorage.getItem("CraftingDani.ToDo-App.list")
const nameInputElem = document.querySelector('.newEntry-name')
const deadlineInputElem = document.querySelector('.newEntry-datetime')
let removeEntryButtons
update()

document.addEventListener("keydown", function(e)
{
    if(e.key == "Enter") addEntry()
})

function addEntry()
{
    if(nameInputElem.value == "" || null || undefined) return

    const newEntryElem = document.createElement("article")
    const newNameElem = document.createElement("p")
    const newDeadlineElem = document.createElement("p")
    const newRemoveButtonElem = document.createElement("button")

    newNameElem.innerText = nameInputElem.value
    newDeadlineElem.innerText = deadlineInputElem.value
    newRemoveButtonElem.innerHTML = "&times;"
    nameInputElem.value = ""

    newDeadlineElem.classList.add("entryDeadline")
    newRemoveButtonElem.classList.add("removeEntry")

    newEntryElem.appendChild(newNameElem)
    newEntryElem.appendChild(newDeadlineElem)
    newEntryElem.appendChild(newRemoveButtonElem)
    listElem.appendChild(newEntryElem)

    update()
}

function removeEntry(input)
{
    input.parentElement.remove()
    update()
}

function update()
{
    localStorage.setItem("CraftingDani.ToDo-App.list", listElem.innerHTML)

    removeEntryButtons = document.querySelectorAll(".removeEntry")
    
    removeEntryButtons.forEach(function(i)
    {
        i.addEventListener("click", function(e)
        {
            console.log("click")
            removeEntry(e.target)
        })
    })
}
