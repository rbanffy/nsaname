#! /usr/bin/env node

const FIRST = [
    "Candy",
    "Cotton",
    "Cross",
    "Deity",
    "Dropout",
    "Feed",
    "Fire",
    "Gopher",
    "Gourmet",
    "Halux",
    "Head",
    "Howler",
    "Irate",
    "Iron",
    "Jet",
    "Junior",
    "Loud",
    "Maestro",
    "Monkey",
    "Night",
    "Photo",
    "Rage",
    "School",
    "Sierra",
    "Somber",
    "Souffle",
    "Stucco",
    "Surly",
    "Swap",
    "Tawdry",
    "Tote",
    "Trinity",
    "Water",
    "Wistful"
];

const SECOND = [
    " CTX",
    " EBSR",
    "Anglo",
    "Auto",
    "Beam",
    "Bounce",
    "Calendar",
    "Chef",
    "Cyclone",
    "Entourage",
    "Genesis",
    "Ghostly",
    "Ginsu",
    "Gram",
    "Jeep",
    "Knave",
    "Maestro",
    "Master",
    "Mint",
    "Monk",
    "Monkey",
    "Montana",
    "Mouth",
    "Nebula",
    "Picasso",
    "Plow",
    "Set",
    "Sparrow",
    "Spawn",
    "Stand",
    "Swap",
    "Thorugh",
    "Toll",
    "Trinity",
    "Typhon",
    "Walk",
    "Watch",
    "Water",
    "Witch",
    "Yard"
];

const SUFFIXES = ["HX", "I", "II", "III", "4000", "Hx9", "2.0"];

var nsaname = FIRST[Math.floor(Math.random() * FIRST.length)] +
    SECOND[Math.floor(Math.random() * SECOND.length)];

if (Math.random() > .7) {
    nsaname += " " +
        SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
}

console.log(nsaname);
