const marvel_heroes = ["Ironman", "Thor", "Hulk", "Captain America"];
console.log(marvel_heroes);

const dc_heroes = ["Superman", "Batman", "Wonder Woman"];
console.log(dc_heroes);

// Using concat method
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);
console.log('typeof all_heroes:', typeof all_heroes);

// Using spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);
console.log('typeof all_new_heroes:', typeof all_new_heroes);



