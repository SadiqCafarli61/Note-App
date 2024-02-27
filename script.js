

let notes = []
function addNote(){
    const noteInput = document.getElementById("noteInput").value.trim()

    if(noteInput !== ""){
        notes.push(noteInput)
        displayNotes()
        document.getElementById("noteInput").value=""
    } else{
        alert("Please enter a note")
    }
}
function displayNotes(){
    const noteLists = document.getElementById("noteList")
    noteLists.innerHTML = ""
    notes.forEach((note,index) => {
        let noteItem = document.createElement("div")
        noteItem.textContent = (index + 1) + "." + note
        noteItem.style.fontSize = "24px"
        noteLists.appendChild(noteItem)
        let deleteBtn = document.createElement("button")
      
   
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.textContent = "Delete Note"
        noteLists.appendChild(deleteBtn)
        deleteBtn.addEventListener("click", () => {
            noteItem .textContent = ""
            deleteBtn.textContent= "Deleted"
            deleteBtn.type = "reset"
            deleteBtn.style.opacity = "0.4"
        })
    })
    
}
