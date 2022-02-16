const _ = require('lodash');

const games = [
    {name: "Halo: Infinite", platform: "xbox", genre: "Shooter", usk: "18"},
    {name: "Forza Horizon 5", platform: "xbox", genre: "Racer", usk: "6"},
    {name: "Mario Kart 8", platform: "switch", genre: "Fun-Racer", usk: "6"},
    {name: "Grand Tourismo 7", platform: "playstation", genre: "Racer", usk: "12"},
    {name: "Ghost of Tsushima", platform: "playstation", genre: "Action-Adventure", usk: "16"},
    {name: "Age of Empires IV", platform: "pc", genre: "Strategie", usk: "12"},
]

const platform = _.groupBy(games, "platform")

console.log(platform)