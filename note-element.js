export class NoteElement {
    static create(note) {
        {
            const noteElem = document.createElement('li');
            // noteElem.innerText = note.text;
            noteElem.innerHTML = `${note.text} - <button data-id="${note.id}"> X </button> - <button id= "updateId-${note.id}"> Update </button>`

            return noteElem;
        }
    }
}