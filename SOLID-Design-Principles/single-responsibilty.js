/*
    *** Signle Responsibilty Principles ***
        => The idea behind the SRP is that every class, module, or function in a programe
         should have one responsibilty / purpose in a program.(freecodebootcamp)
        => If our need additional responsibilty, we can make class per responsibilty.
*/

const fs = require("fs");

// make a journal class 
class Journal{
    constructor(){
        this.entries = {};
    }
    
    addEntry(text){
       let count = ++Journal.count
        let entry = `${text}`
        this.entries[count] = entry;
        return count
    }
    removeEntry(index){
        delete this.entries[index];
    }

    toString(){
        return Object.values(this.entries).join("\n");
    }

    // we want to work file system like file save, loading, load from url
    // save(fileName, journal){
    //     fs.writeFileSync(fileName, journal.toString())
    //  }
    //  load(fileName){
 
    //  }
    //  loadFromUrl(url){
 
    //  }

    
}

// make a class for above comment code, beacuse it is the best way to create new class for single resposibilty 
class PersistenceManager{
   // we want to work file system like file save, loading, load from url
    save(fileName, journal){
       fs.writeFileSync(fileName, journal.toString())
    }
    load(fileName){

    }
    loadFromUrl(url){

    }
} 
Journal.count = 0;

const journal = new Journal();
console.log(journal.addEntry("agdgsjgf"));
console.log(journal.addEntry("goodfor heart"));
console.log(journal.addEntry("goodfor heart"));
console.log(journal.addEntry("goodfor heart of falls"));
console.log(journal.removeEntry(Object.keys(journal.entries)[Object.keys(journal.entries).length - 1]));
// console.log(journal.toString())

const persistenceManager = new PersistenceManager();
const fileName = __dirname+"/newFile.js"
console.log(persistenceManager.save(fileName, journal))
console.log(fileName)

