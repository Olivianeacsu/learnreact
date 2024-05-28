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
/*
var name = "Everest";
var height = 8848;
var output = function(){
    console.log(`Mt. ${this.name} is ${this.height} meter tall`);
}

var adventureClimbing = {name, height, output};
adventureClimbing.output();


// Spread operator - on arrays
var mountains = ['Everest', 'Carpathians', 'Himmalaya', 'Andes'];
var mountainsFromJapan =  ['Fuji', 'Alps', 'Hakusan'];

var allMountains = [...mountains, ...mountainsFromJapan];
console.log(allMountains);

// Spread operator - on objects
var day = { breakfast: 'toast', lunch: 'rice'}  ;
var night = { dinner: 'pasta', desert: 'cake'};

var picnic = {...day, ...night};
console.log(picnic);

//rest operator
var rivers =  ['Nile', 'Amazon', 'Yangtze', 'Mississippi'];

var [first, ...rest] = rivers;
console.log(rest);

 */

// Classes
class Holiday {
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        console.log(`${this.destination} will take ${this.days} days`);
    }
}

const trip = new Holiday('Nairobi', 7);
console.log(trip.info());

// subclasses
class Expedition extends Holiday {
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }

    info(){
        super.info();
        console.log(`Bring your ${this.gear.join(' and your ')}`);
    }
}

const tripWithGear = new Expedition('Egypt', 14, ['sunglasses', 'camera']);
tripWithGear.info();