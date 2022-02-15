const listElem = document.querySelector(".entryList")
const inputElem = document.querySelector('.newTodo')

updateList()

function updateList()
{
    console.log(localStorage.getItem("CraftingDani.ToDos.ToDoItems"))
}

function addEntry()
{
    const newEntry = document.createElement("article")
    newEntry.innerText = inputElem.value
    inputElem.value = ""
    listElem.appendChild(newEntry)
}

function removeEntry(input)
{
    console.log(input)
}
