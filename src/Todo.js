'use strict';

export default class Todo {

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    static find(list, id) {
        for (let item of list) {
            if(item.id == id) {
                return item;
            }
        }
        return null;
    }

}
