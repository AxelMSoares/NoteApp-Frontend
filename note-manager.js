import { Note } from './note.js';

export class NoteManager {
    static async list() {
        const response = await fetch('http://localhost:3000/notes/');
        const data = await response.json();
        return data.map(obj => new Note(obj.id, obj.text));
    }

    static async create(note) {
        console.log('create for note: ', note);
        const response = await fetch('http://localhost:3000/notes/', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(note)
        });
    }

    static async remove (id) {
        const response = await fetch('http://localhost:3000/notes/' + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });
    }

    static async update(text, id) {
        console.log('Update for note: ', id);
        const response = await fetch('http://localhost:3000/notes/' + id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ text: text, id: id })
        });
    }
}