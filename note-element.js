export class NoteElement {
    static create(note) {
        {
            const noteElem = document.createElement('li');
            // noteElem.innerText = note.text;
            noteElem.innerHTML = `${note.text} - <button delete-id="${note.id}"> X </button> - <button update-id="${note.id}"> Update </button>`;

            return noteElem;
        }
    }
}