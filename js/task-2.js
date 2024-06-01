class Storage {
    #items;
    constructor (items) {
        this.#items = items;
    }
    getItems () {
        return this.#items;
    }
    addItem(newItem) {
        if(this.#items.includes(newItem)) {
            console.log('Ви вже маєте такий товар у списку');
        } else {
            this.#items.push(newItem);
        }
    }

    removeItem(newItem) {
        const index = this.#items.indexOf(newItem);
        if(index !== -1) {
            this.#items.splice(index, 1);
        } 
    }
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
