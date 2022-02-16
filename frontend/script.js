const listElem = document.querySelector(".entryList")
const inputElem = document.querySelector('.newTodo')
const data = localStorage.getItem("CraftingDani.ToDos.ToDoItems")

updateList()

function updateList()
{
    
}

function addEntry()
{
    const newEntry = document.createElement("article")
    //newEntry.innerText = inputElem.value
    newEntry.innerText = data
    inputElem.value = ""
    listElem.appendChild(newEntry)
}

function removeEntry(input)
{
    console.log(input)
}
