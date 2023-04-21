/* Given an array of strings, print only the strings that have exactly 4 characters. */

/* I am going to name and make an array of strings and write code that prints the elements
that have exactly 4 characters.
I need to make an array, a for statement, a conditional and look up a method to count
characters in
order to include in my print code. */

var objects = [ "car", "phone", "tree", "wire", "sofa", "mirror"]
for (var i = 0; i < objects.length; i++) {
    if (objects[i].length === 4){
        console.log(objects[i])
    }
}