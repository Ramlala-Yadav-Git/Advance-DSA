

const Person = {
    fname: "ram",
    lname: "yadav",
    print: function (city) {
        console.log(this.fname, this.lname, city);
    }
}
// Person.print()
function print(city) {
    console.log(this.fname, this.lname, city);
}
const Person2 = {

    fname: "somesh",
    lname: "yadav"
}
Person.print.call(Person2, "sidhi") //pehla argument object second one var
//ager ek se jayada var hai to   ==>> aise kar skte hai
// Person.print.call(Person2, "sidhi", "deosar", "singrauli")


// ager ek se jyada var ho to hm apply ka use krke vars ko array ke roop me pass karenge

// jab bhi dusre object ke method ko call krna ho


