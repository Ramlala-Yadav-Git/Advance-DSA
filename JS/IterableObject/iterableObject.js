/*

By default, plain object iterable nhi hote hai but unko iterable bnaya
ja sakta hai symbol.iterator property lagakar
*/

const collection = {
    one: 1,
    two: 2,
    three: 3,
    [Symbol.iterator]() {
        const values = Object.keys(this);
        let i = 0;;
        return {
            next: () => {
                return {
                    value: this[values[i++]],
                    done: i > values.length
                }
            }
        }
    }
}

const iterator = collection[Symbol.iterator]();
console.log('iterator', iterator.next())

const collection2 = {
    one: 1,
    two: 2,
    three: 3,
    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield this[key];
        }
    }
};

function* myGenFunc() {
    yield 1;
    yield 2;
    yield 3;
}
const genObj = myGenFunc();
console.log('genObj', genObj)
let arr = ['a', 'b', 'c'];

// arr.newProp = 'newVlue';

// key are the property keys
for (let key in arr) {
    console.log(key);
}

// value are the property values
for (let value of arr) {
    console.log(value);
}
