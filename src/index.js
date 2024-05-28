/*
let createBlog = (title, body) => {
    if (!title || !body) {
        throw new Error('A blog must have a title and body')
    }
    return alert(`${title} - ${body}`);
}

createBlog('Blog title', 'Blog body');

 */

// Destructuring object
/*
var thingsTodDo = {
    morning: 'Exercise',
    afternoon: 'Work',
    evening: 'Code',
    night: ['Sleep', 'Dream']
}

let {morning, afternoon} = thingsTodDo;

console.log(morning, ' - ', afternoon);

// Destructuring array
let [, firstMountain] = ['Everest', 'Carpathians', 'Himmalaya', 'Andes']

console.log(firstMountain);
*/

// Restructuring object

var name = "Everest";
var height = 8848;
var output = function(){
    console.log(`Mt. ${this.name} is ${this.height} meter tall`);
}

var adventureClimbing = {name, height, output};
adventureClimbing.output();