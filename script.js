const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];
// 1.
const map1 = superheroes.map((superheroes) => superheroes.name);
console.log(map1);
// 2.
const map2 = superheroes.filter(
  (superheroes) => Number(superheroes.weight) < 190
);
console.log(map2);
// 3.
const map3 = superheroes
  .filter((superheroes) => superheroes.weight === "200")
  .map((superheroes) => superheroes.name);
console.log(map3);
// 4.
const map4 = superheroes.map((superheroes) => superheroes.first_appearance);
console.log(map4);
// 5.
const map5 = superheroes
  .filter((superheroes) => superheroes.publisher === "DC Comics")
  .map((superheroes) => superheroes.name);
console.log(map5);
// 5.
const map6 = superheroes
  .filter((superheroes) => superheroes.publisher === "Marvel Comics")
  .map((superheroes) => superheroes.name);
console.log(map6);
// 6.Tel het gewicht van alle superhelden van DC Comics bij elkaar op.
const superheroesWeightInt = superheroes
  .filter((superheroes) => superheroes.publisher === "DC Comics")
  .map((superheroes) => parseInt(superheroes.weight));
console.log(superheroesWeightInt);

const reducedArray = (accumulator, currentValue) => accumulator + currentValue;

console.log(superheroesWeightInt.reduce(reducedArray));

// 7. door "unknown" van Silver Surfer werkt deze niet?
const superheroesMarvelWeightInt = superheroes
  .filter((superheroes) => superheroes.publisher === "Marvel Comics")
  .filter((superheroes) => superheroes.weight > 0)
  .map((superheroes) => parseInt(superheroes.weight));

console.log("superheroesMarvelWeightInt", superheroesMarvelWeightInt);

const reducedArrayMarvel = (accumulator, currentValue) =>
  accumulator + currentValue;

console.log(
  "reducedArrayMarvel",
  superheroesMarvelWeightInt.reduce(reducedArrayMarvel)
);

// 8. Zoek de zwaarste superheld.

function weightHeavyest(superArray) {
  const map8 = superArray
    .filter((x) => x.weight > 0)
    .map((y) => parseInt(y.weight));
    return Math.max(...map8);
}

console.log("heavyest super", weightHeavyest(superheroes));

// function heavyestWeight(superArray) {
//   const weights = superArray
//     .filter((person) => person.weight > 0)
//     .map((person) => parseInt(person.weight));
//   return Math.max(...weights);
// }

// function heavyestWeight(superArray) {
//   const weights = superArray
//     .filter( function (person) { return person.weight > 0 } )
//     .map( function (person) { return parseInt(person.weight) });
//   return Math.max(...weights);
// }
