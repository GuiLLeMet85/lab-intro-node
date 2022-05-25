class SortedList {
    constructor(items, length) {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        this.items.push(item);
        this.items.sort((a, b) => a - b);
        return this.items;
    }

    get(pos) {
        if (pos > this.items.length) {
            throw new Error('OutOfBounds');
        }
        return this.items[pos];
    }

    max() {}

    min() {}

    sum() {}

    avg() {}
}

module.exports = SortedList;