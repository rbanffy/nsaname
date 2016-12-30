#! /usr/bin/env node

/* eslint no-console: ["error", { allow: ["log"] }] */

const getUsage = require('command-line-usage');
const commandLineArgs = require('command-line-args');

const first = [
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

const second = [
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

const suffixes = ["HX", "I", "II", "III", "4000", "Hx9", "2.0"];

const helpSections = [
    {
        header: 'NSA Name',
        content: 'Like petname, but for naming secret projects and tools.'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'help',
                description: 'Print this usage guide.'
            }
        ]
    }
];

const usage = getUsage(helpSections);

const commandLineOptionDefinitions = [
    {
        name: 'help',
        alias: 'h',
        type: Boolean,
        defaultOption: false
    }
];

const options = commandLineArgs(commandLineOptionDefinitions);

if (options.help) {
    console.log(usage);
} else {
    var nsaname = first[Math.floor(Math.random() * first.length)] +
        second[Math.floor(Math.random() * second.length)];

    if (Math.random() > .7) {
        nsaname += " " +
            suffixes[Math.floor(Math.random() * suffixes.length)];
    }
    console.log(nsaname);
}
