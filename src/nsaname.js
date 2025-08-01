/* -*- js-indent-level: 2 -*- */

// Names derived from:
// - https://en.wikipedia.org/wiki/NSA_ANT_catalog
// - https://christopher-parsons.com/resources/the-sigint-summaries/nsa-codenames-covernames-and-suggested-use-implementation/

const first = [
  'Aardvark',
  'Absoline',
  'Acrid',
  'Adapter',
  'Adjutant',
  'After',
  'Air',
  'Altered',
  'Ambulant',
  'Amulet',
  'Anchory',
  'Ancient',
  'Angel',
  'Ant',
  'Apache',
  'Aperiodic',
  'Aperture',
  'Apex',
  'Apparition',
  'Argyle',
  'Armored',
  'Arrow',
  'Arti',
  'Asphalt',
  'Assimilator',
  'Association',
  'Athena',
  'Atomic',
  'Auntie',
  'Aurora',
  'Aztec',
  'B',
  'Back',
  'Badass',
  'Bald',
  'Baloon',
  'Banana',
  'Banyan',
  'Bar',
  'Barn',
  'Base',
  'Basic',
  'Bat',
  'Beach',
  'Bedouin',
  'Bee',
  'Beech',
  'Beef',
  'Bening',
  'Bent',
  'Berserk',
  'Big',
  'Bilbo',
  'Bill',
  'Bird',
  'Bishop',
  'Bizantine',
  'Black',
  'Blade',
  'Blarney',
  'Blind',
  'Blinker',
  'Blood',
  'Blue',
  'Bookish',
  'Bore',
  'Borger',
  'Bothan',
  'Boundless',
  'Box',
  'Brave',
  'Brick',
  'Broad',
  'Broken',
  'Brutal',
  'Bull',
  'Bull',
  'Bullet',
  'Buzz',
  'Byzantine',
  'Cactus',
  'Cadence',
  'Caffeine',
  'Camber',
  'Candy',
  'Canyon',
  'Captivated',
  'Carbon',
  'Castle',
  'Celestial',
  'Centric',
  'Cherry',
  'Chimay',
  'Chippewa',
  'Chocolate',
  'Chuk',
  'Cine',
  'Click',
  'Cliff',
  'Climbing',
  'Cloud',
  'Coal',
  'Cobalt',
  'Cobra',
  'Cocoa',
  'Cocoon',
  'Code',
  'Conga',
  'Connectify',
  'Containment',
  'Contra',
  'Cotton',
  'Couch',
  'Cow',
  'Crimson',
  'Crisp',
  'Criss',
  'Crisscross',
  'Cross',
  'Cross',
  'Crosseyed',
  'Crown',
  'Cryptic',
  'Cuck',
  'Cuddly',
  'Cult',
  'Cut',
  'Cute',
  'Cyber',
  'Cygnus',
  'Dance',
  'Dapino',
  'Defiant',
  'Deity',
  'Der',
  'Digital',
  'Doctor',
  'Dr',
  'Dreamy',
  'Drifting',
  'Drizzle',
  'Dropout',
  'Earl',
  'Express',
  'Fair',
  'Fashion',
  'Feed',
  'Felix',
  'Fight',
  'Fine',
  'Fire',
  'Flamenco',
  'Flash',
  'Flux',
  'Fly',
  'Frog',
  'Funny',
  'Galant',
  'Gopher',
  'Gourmet',
  'Grass',
  'Green',
  'Gyr',
  'Hair',
  'Halux',
  'Hammer',
  'Harpy',
  'Hat',
  'Head',
  'Hera',
  'Herc',
  'Hidden',
  'High',
  'Hop',
  'Howler',
  'Hyenas',
  'Imperial',
  'Irate',
  'Iron',
  'Jet',
  'Juke',
  'Junior',
  'Karma',
  'Key',
  'Kraken',
  'Leviticus',
  'Long',
  'Loud',
  'Lovely',
  'Maddening',
  'Maestro',
  'Magic',
  'Magical',
  'Marble',
  'Melomy',
  'Midnight',
  'Monkey',
  'Munge',
  'Mutant',
  'Night',
  'Nope',
  'Nosey',
  'Opulent',
  'Outlaw',
  'Panda',
  'Paranoid',
  'Patient',
  'Philoso',
  'Photo',
  'Poison',
  'Porcupine',
  'Quantum',
  'Quark',
  'Rage',
  'Rain',
  'Rampart',
  'Raptor',
  'Ricky',
  'Rim',
  'Rock',
  'Roid',
  'Salsa',
  'Savior',
  'Scarlet',
  'School',
  'Secret',
  'Shadows',
  'Sierra',
  'Skid',
  'Sky',
  'Slot',
  'Snow',
  'Snowy',
  'Social',
  'Somber',
  'Souffle',
  'Sparrow',
  'Spinal',
  'Spock',
  'Straw',
  'Stucco',
  'Surly',
  'Swap',
  'Tango',
  'Tawdry',
  'Tax',
  'The',
  'Time',
  'Tiny',
  'Titan',
  'Tote',
  'Tremor',
  'Trinity',
  'Turkey',
  'Turnip',
  'Twilight',
  'Valiant',
  'Water',
  'Weeping',
  'Wild',
  'Wistful',
  'XKey',
  'Yarn'
]

const second = [
  'Alamo',
  'Angel',
  'Anglo',
  'Ant',
  'Anthropoid',
  'Aquaman',
  'Archimedes',
  'Assassin',
  'Audience',
  'Auto',
  'Axe',
  'Badger',
  'Ball',
  'Ballot',
  'Bang',
  'Bank',
  'Beam',
  'Beetle',
  'Belt',
  'Bird',
  'Birds',
  'Bit',
  'Blasting',
  'Blossom',
  'Bobby',
  'Bones',
  'Boom',
  'Bootsole',
  'Bounce',
  'Box',
  'Boy',
  'Brew',
  'Broth',
  'Bulldozer',
  'Bumble',
  'Burst',
  'Cake',
  'Calendar',
  'Camel',
  'Camelus',
  'Candor',
  'Candy',
  'Cannoli',
  'Cannon',
  'Canyon',
  'Carbon',
  'Cascade',
  'Catapult',
  'Caterpillar',
  'Cave',
  'Certain',
  'Chair',
  'Chalet',
  'Chef',
  'Chiefdom',
  'Cinnamon',
  'Cleft',
  'Cliffdive',
  'Cloud',
  'Club',
  'Coat',
  'Colossus',
  'Condor',
  'Conveyance',
  'Cough',
  'Country',
  'Cowboy',
  'Crash',
  'Crasher',
  'Creek',
  'Cross',
  'Cyclone',
  'Cytolysis',
  'Dada',
  'Daiquiri',
  'Date',
  'Decision',
  'Delta',
  'Diamond',
  'Dining',
  'Dipper',
  'Direction',
  'Doghouse',
  'Dough',
  'Drill',
  'DriveIn',
  'Dud',
  'Dumbo',
  'Eagle',
  'Elsa',
  'Entourage',
  'Face',
  'Falcon',
  'Fever',
  'Fire',
  'Fireball',
  'Fist',
  'Flea',
  'Flight',
  'Flock',
  'Floor',
  'Focus',
  'Fog',
  'Foothold',
  'Framework',
  'Galleon',
  'Gamma',
  'Gasstation',
  'Genesis',
  'Ghostly',
  'Gibson',
  'Ginsu',
  'Girl',
  'Glee',
  'Globe',
  'Gold',
  'Gram',
  'Grasshopper',
  'Grey',
  'Grid',
  'Guppy',
  'Hades',
  'Hair',
  'Hammer',
  'Handler',
  'Haul',
  'Hawk',
  'Head',
  'Hill',
  'Hole',
  'Hopper',
  'Hornet',
  'Horse',
  'Hurdle',
  'Ice',
  'Improvise',
  'Informant',
  'Intolerant',
  'Jack',
  'Jeep',
  'Kangaroo',
  'King',
  'Knave',
  'Knight',
  'Knot',
  'Kraken',
  'Lane',
  'Leviatan',
  'Leviticus',
  'Liar',
  'Line',
  'Lithium',
  'Logic',
  'Maestro',
  'Maker',
  'Man',
  'Margarita',
  'Marksmen',
  'Masquerade',
  'Massacre',
  'Master',
  'Matter',
  'Me',
  'Meltdown',
  'Mesa',
  'Midnight',
  'Mini',
  'Mint',
  'Monk',
  'Monkey',
  'Montana',
  'Mountain',
  'Mouth',
  'Mute',
  'Mutt',
  'Nebula',
  'Net',
  'Nickle',
  'Noodle',
  'Nut',
  'Octave',
  'Overlord',
  'Owl',
  'Packet',
  'Packrat',
  'Pandemic',
  'Patrol',
  'Payload',
  'Pearl',
  'Peptide',
  'Perseus',
  'Philosoraptor',
  'Picasso',
  'Picker',
  'Pie',
  'Piece',
  'Pipe',
  'Plex',
  'Plow',
  'Pointe',
  'Poke',
  'Police',
  'Pony',
  'Porus',
  'Potato',
  'Powerman',
  'Prairie',
  'Prince',
  'Prism',
  'Proton',
  'Pterodactyl',
  'Punch',
  'Pup',
  'Quest',
  'Raptor',
  'Red',
  'Regent',
  'Richgear',
  'Ridge',
  'Rise',
  'Rock',
  'Rowe',
  'Royal',
  'Run',
  'Runner',
  'Salamander',
  'School',
  'Score',
  'Scotch',
  'Screamer',
  'Scribbles',
  'Sentinel',
  'Set',
  'Shield',
  'Ship',
  'Shirt',
  'Shooter',
  'Shortrun',
  'Shot',
  'Shovel',
  'Side',
  'Sight',
  'Skill',
  'Slasher',
  'Slog',
  'Sloth',
  'Smoke',
  'Smurf',
  'Snarf',
  'Sneeze',
  'Sontaran',
  'Sparrow',
  'Spawn',
  'Spy',
  'Stake',
  'Stand',
  'Starke',
  'Steal',
  'Steam',
  'Stellar',
  'Sting',
  'Stomper',
  'Strike',
  'Surf',
  'Swap',
  'Sweeper',
  'Tankertruck',
  'Tap',
  'Tempora',
  'Tender',
  'Theory',
  'Thorugh',
  'Thought',
  'Throat',
  'Tie',
  'Toll',
  'Tomb',
  'Tooth',
  'Top',
  'Trace',
  'Trans',
  'Transgression',
  'Trap',
  'Treeform',
  'Trinity',
  'Tutu',
  'Typhon',
  'Usurper',
  'Vegetable',
  'Venture',
  'View',
  'Viking',
  'Vikings',
  'Vulture',
  'Wagon',
  'Walk',
  'Ware',
  'Warrior',
  'Watch',
  'Watcher',
  'Water',
  'Wave',
  'Wayback',
  'Weave',
  'Whispers',
  'Whistle',
  'Widow',
  'Windblown',
  'Wire',
  'Witch',
  'Wood',
  'Yard',
  'Yardarm',
  'Zephyr',
  'Zero'
]

const suffixes = [
  '2.0',
  '2000',
  '3.0',
  '4000',
  '9000',
  'CC',
  'CFD',
  'CQ',
  'CSG',
  'CSL',
  'HX',
  'Hx9',
  'I',
  'II',
  'III'
]

/**
 * Returns a nice name for a secret project or tool.
 *
 * @return {string}
 */
function getNSAName (suffix, separator) {
  let nsaname = first[Math.floor(Math.random() * first.length)] +
      separator + second[Math.floor(Math.random() * second.length)]

  if (suffix) {
    nsaname += ' ' +
            suffixes[Math.floor(Math.random() * suffixes.length)]
  }
  return nsaname
}

module.exports = {
  getNSAName: getNSAName,
  wordLists: {
    first: first,
    second: second,
    suffixes: suffixes
  }
}
