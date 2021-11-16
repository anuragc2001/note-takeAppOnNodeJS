const fs = require('fs');
// const yargs = require("yargs")

const getNotes = function () {
    console.log("Your notes...")
}

const saveNotes = function (title, body) {
    const notes = loadNotes();

    const duplicate = notes.filter(note => {
        if (note.title === title) {
            return note.title === title;

        }
    })

    if (duplicate.length === 0) {
        notes.push({
            "title": title,
            "body": body
        })

        writeNotes(notes);
    } else {
        console.log("Object already exists with same title...");
    }
}

const writeNotes = function (notes) {
    const dataString = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataString);
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = JSON.parse(dataBuffer.toString());
        return dataJSON;
    } catch (e) {
        return [];
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    try {
        if (notes.length === 0) {
            console.log("List empty...")
        } else {
            const newList = notes.filter(note => note.title !== title)
            const oldList = notes.filter(note => note.title === title)
            console.log(oldList[0].title)
            writeNotes(newList);
        }
    } catch (e) {
        console.log("Title mismatch...")
    }
}

const listNotes = function () {
    const notes = loadNotes()
    let i = 1;
    notes.forEach(note => {
        console.log(i++);
        console.log("Title: ", note.title);
        console.log("Content: ", note.body);
        console.log("\n");
    });
}

const readNote = function (title) {
    const notes = loadNotes();
    let isFound = false;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].title === title) {
            console.log("\n")
            console.log("Title: ", notes[i].title)
            console.log("Content: ", notes[i].body)
            isFound = true;
            break;
        }
    }

    if (!isFound) {
        console.log("Title not found...")
    }
}
module.exports = {
    getNotes: getNotes,
    saveNotes: saveNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

// console.log(yargs.argv._);