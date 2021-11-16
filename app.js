
// const file = require("fs");
// file.writeFileSync("note.txt", "Hello Anurag is the biggest star in the day sky");

// const util = require("./utils.js")
// const getNotes = require("./notes.js")
// const sum = 
// console.log(util(5, 4))
// getNotes();

// const validator = require("validator");

// console.log(validator.isEmail("chak@k.com"));

const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes")

// console.log(process.argv);

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.saveNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Remove note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "Print notes",
    handler: function () {
        notes.listNotes();
    }
})

yargs.command({
    command: "read",
    describe: "read all notes",
    builder: {
        title: {
            describe: "Read note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();
// console.log(yargs.argv);