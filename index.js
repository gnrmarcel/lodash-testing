const _ = require('lodash');
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const games = [
    {name: "Halo: Infinite", platform: "xbox", genre: "Shooter", usk: "18"},
    {name: "Forza Horizon 5", platform: "xbox", genre: "Racer", usk: "6"},
    {name: "Mario Kart 8", platform: "switch", genre: "Fun-Racer", usk: "6"},
    {name: "Grand Tourismo 7", platform: "playstation", genre: "Racer", usk: "12"},
    {name: "Ghost of Tsushima", platform: "playstation", genre: "Action-Adventure", usk: "16"},
    {name: "Age of Empires IV", platform: "pc", genre: "Strategie", usk: "12"},
]

// const platform = _.groupBy(games, "platform");
// const genre = _.groupBy(games, "genre");

// const xboxPlatform = platform["xbox"];
// const genreShooter = genre["Racer"];

// console.log(xboxPlatform);
// console.log(genreShooter);


let alter = rl.question("Welches Alter möchtest Du filtern? ", function (antwort) {
    console.log(`Das sind die Spiel ab ${antwort} Jahren!`);
    console.log("Closing the interface");
    rl.close();
});

// lodash Filter nach Bedingung X
const search = _.filter(games, function(game) {
    return game.usk >= "12";
});
    


console.log("---------------------");
console.log(search);