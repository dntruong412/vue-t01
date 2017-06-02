export default {
    list: [],

    findById: function(id) {
        for (let item of this.list) {
            if(item.id == id) {
                return item;
            }
        }
        return null;
    }

}