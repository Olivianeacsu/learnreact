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

let thingsTodDo = {
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