class SortedList {
    constructor(items, length) {
        this.items = [];
        this.length = this.items.length;
    }

    add(item) {
        this.items.push(item);
        this.length = this.items.length;
        this.items.sort((a, b) => a - b);
    }

    get(pos) {
        if (pos > this.items.length) {
            throw new Error('OutOfBounds');
        }
        return this.items[pos];
    }

    max() {
        if(this.items.length===0) {
            throw new Error('EmptySortedList');
        }
        return Math.max(...this.items);
    }

    min() {
        if(this.items.length===0) {
            throw new Error('EmptySortedList');
        }
        return Math.min(...this.items);
    }

    sum() {
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i];
        }
        return sum;
    }

    avg() {
        if(this.items.length===0) {
            throw new Error('EmptySortedList');
        }
        return this.sum() / this.length;
    }
}

module.exports = SortedList;