require 'json'

# pulld from https://raw.githubusercontent.com/Deathmax/bravefrontier_data/master/evo_list.json

unit_json = '{
    "10011": {
        "amount": 2500,
        "evo_name": "Burning Vargas",
        "evo_rarity": 3,
        "mats": [
            "Fire Nymph"
        ],
        "name": "Fencer Vargas",
        "rarity": 2
    },
    "10012": {
        "amount": 100000,
        "evo_name": "Fire King Vargas",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Spirit"
        ],
        "name": "Burning Vargas",
        "rarity": 3
    },
    "10013": {
        "amount": 200000,
        "evo_name": "Fire God Vargas",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Spirit",
            "Fire Nymph",
            "Fire Nymph"
        ],
        "name": "Fire King Vargas",
        "rarity": 4
    },
    "10014": {
        "amount": 500000,
        "evo_name": "Holy Flame Vargas",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Fire Idol",
            "Fire Spirit",
            "Fire Nymph"
        ],
        "name": "Fire God Vargas",
        "rarity": 5
    },
    "10021": {
        "amount": 50000,
        "evo_name": "Rage Beast Zegar",
        "evo_rarity": 3,
        "mats": [
            "Fire Nymph",
            "Fire Nymph",
            "Fire Spirit"
        ],
        "name": "Beast Zegar",
        "rarity": 2
    },
    "10022": {
        "amount": 100000,
        "evo_name": "Fire Beast Zegar",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Spirit",
            "Fire Nymph",
            "Fire Nymph"
        ],
        "name": "Rage Beast Zegar",
        "rarity": 3
    },
    "10023": {
        "amount": 200000,
        "evo_name": "Beast King Zegar",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Pot",
            "Fire Idol",
            "Fire Idol",
            "Fire Nymph"
        ],
        "name": "Fire Beast Zegar",
        "rarity": 4
    },
    "10030": {
        "amount": 1000,
        "evo_name": "King Burny",
        "evo_rarity": 2,
        "mats": [
            "Fire Nymph"
        ],
        "name": "Burny",
        "rarity": 1
    },
    "10040": {
        "amount": 5000,
        "evo_name": "Warlock Liza",
        "evo_rarity": 2,
        "mats": [
            "Fire Nymph"
        ],
        "name": "Witch Liza",
        "rarity": 1
    },
    "10041": {
        "amount": 50000,
        "evo_name": "Pyromancer Liza",
        "evo_rarity": 3,
        "mats": [
            "Fire Spirit",
            "Fire Nymph"
        ],
        "name": "Warlock Liza",
        "rarity": 2
    },
    "10050": {
        "amount": 2500,
        "evo_name": "Redcap",
        "evo_rarity": 2,
        "mats": [
            "Mimic"
        ],
        "name": "Goblin",
        "rarity": 1
    },
    "10051": {
        "amount": 50000,
        "evo_name": "Hobgoblin",
        "evo_rarity": 3,
        "mats": [
            "Fire Spirit",
            "Mimic",
            "Mimic"
        ],
        "name": "Redcap",
        "rarity": 2
    },
    "10061": {
        "amount": 50000,
        "evo_name": "Head Thief Leon",
        "evo_rarity": 3,
        "mats": [
            "Fire Nymph",
            "Fire Nymph",
            "Fire Spirit"
        ],
        "name": "Thief Leon",
        "rarity": 2
    },
    "10062": {
        "amount": 100000,
        "evo_name": "Great Thief Leon",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Head Thief Leon",
        "rarity": 3
    },
    "10071": {
        "amount": 50000,
        "evo_name": "Cerberus",
        "evo_rarity": 3,
        "mats": [
            "Fire Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Orthos",
        "rarity": 2
    },
    "10081": {
        "amount": 50000,
        "evo_name": "Ifrit",
        "evo_rarity": 3,
        "mats": [
            "Fire Nymph",
            "Fire Spirit",
            "Mimic"
        ],
        "name": "Salamander",
        "rarity": 2
    },
    "10082": {
        "amount": 100000,
        "evo_name": "Malvan",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Spirit",
            "Fire Nymph",
            "Mimic"
        ],
        "name": "Ifrit",
        "rarity": 3
    },
    "10092": {
        "amount": 100000,
        "evo_name": "Dragon Graven",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Fire Spirit",
            "Fire Spirit",
            "Fire Spirit"
        ],
        "name": "Firedrake",
        "rarity": 3
    },
    "10093": {
        "amount": 200000,
        "evo_name": "Dalimaone",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Spirit",
            "Fire Nymph",
            "Bat Mimic"
        ],
        "name": "Dragon Graven",
        "rarity": 4
    },
    "10102": {
        "amount": 100000,
        "evo_name": "Fire Knight Agni",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Fire Idol",
            "Fire Spirit"
        ],
        "name": "Knight Agni",
        "rarity": 3
    },
    "10103": {
        "amount": 200000,
        "evo_name": "Magma Knight Agni",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Pot",
            "Fire Idol",
            "Fire Nymph",
            "Fire Nymph"
        ],
        "name": "Fire Knight Agni",
        "rarity": 4
    },
    "10112": {
        "amount": 100000,
        "evo_name": "Lava Phoenix",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Fire Idol"
        ],
        "name": "Phoenix",
        "rarity": 3
    },
    "10113": {
        "amount": 200000,
        "evo_name": "God Phoenix",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Bat Mimic",
            "Mimic",
            "Fire Spirit",
            "Fire Nymph"
        ],
        "name": "Lava Phoenix",
        "rarity": 4
    },
    "10114": {
        "amount": 500000,
        "evo_name": "Phoenix Reborn",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Dragon Mimic",
            "Fire Spirit",
            "Fire Nymph"
        ],
        "name": "God Phoenix",
        "rarity": 5
    },
    "10122": {
        "amount": 100000,
        "evo_name": "Fire Knight Lava",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Spirit",
            "Fire Spirit",
            "Fire Spirit"
        ],
        "name": "Lava",
        "rarity": 3
    },
    "10123": {
        "amount": 200000,
        "evo_name": "Fire God Lava",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Bat Mimic",
            "Fire Nymph",
            "Fire Nymph"
        ],
        "name": "Fire Knight Lava",
        "rarity": 4
    },
    "10124": {
        "amount": 500000,
        "evo_name": "Sacred Flame Lava",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Dragon Mimic",
            "Fire Idol",
            "Fire Pot"
        ],
        "name": "Fire God Lava",
        "rarity": 5
    },
    "10141": {
        "amount": 50000,
        "evo_name": "Bruiser Galant",
        "evo_rarity": 3,
        "mats": [
            "Fire Spirit",
            "Fire Nymph",
            "Fire Nymph",
            "Fire Nymph",
            "Mimic"
        ],
        "name": "Blacksmith Galant",
        "rarity": 2
    },
    "10142": {
        "amount": 100000,
        "evo_name": "God Arm Galant",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Bat Mimic",
            "Fire Spirit",
            "Fire Nymph",
            "Fire Nymph"
        ],
        "name": "Bruiser Galant",
        "rarity": 3
    },
    "10143": {
        "amount": 200000,
        "evo_name": "Smith Lord Galant",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Pot",
            "Bat Mimic",
            "Fire Spirit",
            "Fire Nymph"
        ],
        "name": "God Arm Galant",
        "rarity": 4
    },
    "10152": {
        "amount": 100000,
        "evo_name": "Hot Chef Lancia",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Nymph",
            "Fire Nymph",
            "Mimic"
        ],
        "name": "Lancia",
        "rarity": 3
    },
    "10153": {
        "amount": 200000,
        "evo_name": "Head Chef Lancia",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Nymph",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Hot Chef Lancia",
        "rarity": 4
    },
    "10154": {
        "amount": 500000,
        "evo_name": "Ace Chef Lancia",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Dragon Mimic",
            "Bat Mimic",
            "Fire Pot"
        ],
        "name": "Head Chef Lancia",
        "rarity": 5
    },
    "10162": {
        "amount": 100000,
        "evo_name": "Professor Lorand",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Nymph",
            "Fire Nymph",
            "Fire Nymph"
        ],
        "name": "Lorand",
        "rarity": 3
    },
    "10163": {
        "amount": 200000,
        "evo_name": "Master Lorand",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Professor Lorand",
        "rarity": 4
    },
    "10164": {
        "amount": 500000,
        "evo_name": "Taskmaster Lorand",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Dragon Mimic",
            "Dragon Mimic",
            "Fire Idol"
        ],
        "name": "Master Lorand",
        "rarity": 5
    },
    "10171": {
        "amount": 50000,
        "evo_name": "Ogre",
        "evo_rarity": 3,
        "mats": [
            "Fire Spirit",
            "Mimic"
        ],
        "name": "Orc",
        "rarity": 2
    },
    "10181": {
        "amount": 50000,
        "evo_name": "Mountaineer Talos",
        "evo_rarity": 3,
        "mats": [
            "Fire Spirit",
            "Fire Nymph"
        ],
        "name": "Hermit Talos",
        "rarity": 2
    },
    "10202": {
        "amount": 1000,
        "evo_name": "Fire King",
        "evo_rarity": 4,
        "mats": [
            "Water Ghost",
            "Earth Ghost",
            "Thunder Ghost",
            "Light Ghost",
            "Metal Ghost"
        ],
        "name": "Fire Ghost",
        "rarity": 3
    },
    "10212": {
        "amount": 100000,
        "evo_name": "Drake Lord Aisha",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Spirit",
            "Fire Spirit",
            "Fire Nymph"
        ],
        "name": "Drake Chief Aisha",
        "rarity": 3
    },
    "10213": {
        "amount": 200000,
        "evo_name": "Drake Queen Aisha",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Drake Lord Aisha",
        "rarity": 4
    },
    "10214": {
        "amount": 500000,
        "evo_name": "Drake Angel Aisha",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Fire Totem",
            "Fire Idol",
            "Dragon Mimic"
        ],
        "name": "Drake Queen Aisha",
        "rarity": 5
    },
    "10222": {
        "amount": 100000,
        "evo_name": "Flame King Goltovah",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Idol",
            "Fire Spirit",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Goltovah",
        "rarity": 3
    },
    "10233": {
        "amount": 200000,
        "evo_name": "Blade God Seria",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Fire Pot",
            "Fire Pot"
        ],
        "name": "Swordswoman Seria",
        "rarity": 4
    },
    "10243": {
        "amount": 200000,
        "evo_name": "Blaze Sibyl Freya",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Spirit",
            "Fire Pot",
            "Light Pot"
        ],
        "name": "Freya",
        "rarity": 4
    },
    "10253": {
        "amount": 200000,
        "evo_name": "Lotus Axe Michele",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Fire Pot",
            "Bat Mimic"
        ],
        "name": "Red Axe Michele",
        "rarity": 4
    },
    "10254": {
        "amount": 500000,
        "evo_name": "Goddess Axe Michele",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Fire Totem",
            "Fire Pot",
            "Dragon Mimic"
        ],
        "name": "Lotus Axe Michele",
        "rarity": 5
    },
    "10273": {
        "amount": 200000,
        "evo_name": "Kagutsuchi",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Fire Pot",
            "Fire Pot"
        ],
        "name": "Homusubi",
        "rarity": 4
    },
    "10274": {
        "amount": 500000,
        "evo_name": "Bordebegia",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Metal Mimic",
            "Fire Idol",
            "Fire Pot"
        ],
        "name": "Kagutsuchi",
        "rarity": 5
    },
    "10283": {
        "amount": 200000,
        "evo_name": "Rakshasa Vishra",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Pot",
            "Fire Spirit",
            "Fire Nymph"
        ],
        "name": "War Demon Vishra",
        "rarity": 4
    },
    "10284": {
        "amount": 500000,
        "evo_name": "Rakshasa Lord Vishra",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Metal Mimic"
        ],
        "name": "Rakshasa Vishra",
        "rarity": 5
    },
    "10333": {
        "amount": 200000,
        "evo_name": "Red Blade Farlon",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Fire Pot",
            "Fire Pot"
        ],
        "name": "Red Slash Farlon",
        "rarity": 4
    },
    "10334": {
        "amount": 500000,
        "evo_name": "Red Swordsman Farlon",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Fire Pot",
            "Fire Pot",
            "Metal Mimic"
        ],
        "name": "Red Blade Farlon",
        "rarity": 5
    },
    "10363": {
        "amount": 200000,
        "evo_name": "Fire Dance Ramna",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Fire Pot",
            "Fire Pot"
        ],
        "name": "Fire Step Ramna",
        "rarity": 4
    },
    "10364": {
        "amount": 500000,
        "evo_name": "Fire Samba Ramna",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Fire Totem",
            "Fire Pot",
            "Fire Pot",
            "Metal Mimic"
        ],
        "name": "Fire Dance Ramna",
        "rarity": 5
    },
    "10373": {
        "amount": 200000,
        "evo_name": "Dark Princess Dia",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Pot",
            "Fire Idol",
            "Fire Idol",
            "Bat Mimic"
        ],
        "name": "Dark Arts Dia",
        "rarity": 4
    },
    "10443": {
        "amount": 200000,
        "evo_name": "Defiant Luther",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Pot",
            "Fire Pot",
            "Fire Idol",
            "Dragon Mimic"
        ],
        "name": "Luther",
        "rarity": 4
    },
    "10463": {
        "amount": 200000,
        "evo_name": "Protector Darvanshel",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Pot",
            "Fire Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Bodyguard Darvanshel",
        "rarity": 4
    },
    "10493": {
        "amount": 200000,
        "evo_name": "Divine Emperor Orwen",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Pot",
            "Fire Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Emperor Orwen",
        "rarity": 4
    },
    "20011": {
        "amount": 2500,
        "evo_name": "Ice Selena",
        "evo_rarity": 3,
        "mats": [
            "Water Nymph"
        ],
        "name": "Selena",
        "rarity": 2
    },
    "20012": {
        "amount": 100000,
        "evo_name": "Ice Queen Selena",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Spirit"
        ],
        "name": "Ice Selena",
        "rarity": 3
    },
    "20013": {
        "amount": 200000,
        "evo_name": "Ice Goddess Selena",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Spirit",
            "Water Nymph",
            "Water Nymph"
        ],
        "name": "Ice Queen Selena",
        "rarity": 4
    },
    "20014": {
        "amount": 500000,
        "evo_name": "Holy Ice Selena",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Water Idol",
            "Water Spirit",
            "Water Nymph"
        ],
        "name": "Ice Goddess Selena",
        "rarity": 5
    },
    "20021": {
        "amount": 50000,
        "evo_name": "Knight Zephu",
        "evo_rarity": 3,
        "mats": [
            "Water Nymph",
            "Water Nymph",
            "Water Spirit"
        ],
        "name": "Zephu",
        "rarity": 2
    },
    "20022": {
        "amount": 100000,
        "evo_name": "Dragoon Zephu",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Spirit",
            "Water Nymph",
            "Water Nymph"
        ],
        "name": "Knight Zephu",
        "rarity": 3
    },
    "20023": {
        "amount": 200000,
        "evo_name": "Dragon Hero Zephu",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Pot",
            "Water Idol",
            "Water Idol",
            "Water Nymph"
        ],
        "name": "Dragoon Zephu",
        "rarity": 4
    },
    "20030": {
        "amount": 1000,
        "evo_name": "King Squirty",
        "evo_rarity": 2,
        "mats": [
            "Water Nymph"
        ],
        "name": "Squirty",
        "rarity": 1
    },
    "20040": {
        "amount": 5000,
        "evo_name": "Healer Merith",
        "evo_rarity": 2,
        "mats": [
            "Water Nymph"
        ],
        "name": "Priest Merith",
        "rarity": 1
    },
    "20041": {
        "amount": 50000,
        "evo_name": "Bishop Merith",
        "evo_rarity": 3,
        "mats": [
            "Water Spirit",
            "Water Nymph"
        ],
        "name": "Healer Merith",
        "rarity": 2
    },
    "20050": {
        "amount": 2500,
        "evo_name": "Sahuagin",
        "evo_rarity": 2,
        "mats": [
            "Mimic"
        ],
        "name": "Merman",
        "rarity": 1
    },
    "20051": {
        "amount": 50000,
        "evo_name": "Lizard Man",
        "evo_rarity": 3,
        "mats": [
            "Water Spirit",
            "Mimic",
            "Mimic"
        ],
        "name": "Sahuagin",
        "rarity": 2
    },
    "20061": {
        "amount": 50000,
        "evo_name": "Plunderer Verica",
        "evo_rarity": 3,
        "mats": [
            "Water Nymph",
            "Water Nymph",
            "Water Spirit"
        ],
        "name": "Pirate Verica",
        "rarity": 2
    },
    "20062": {
        "amount": 100000,
        "evo_name": "Sea Prince Verica",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Plunderer Verica",
        "rarity": 3
    },
    "20071": {
        "amount": 50000,
        "evo_name": "Scylla",
        "evo_rarity": 3,
        "mats": [
            "Water Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Ramia",
        "rarity": 2
    },
    "20081": {
        "amount": 50000,
        "evo_name": "Legtos",
        "evo_rarity": 3,
        "mats": [
            "Water Nymph",
            "Water Spirit",
            "Mimic"
        ],
        "name": "Rantoul",
        "rarity": 2
    },
    "20082": {
        "amount": 100000,
        "evo_name": "Legnaura",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Spirit",
            "Water Spirit",
            "Mimic"
        ],
        "name": "Legtos",
        "rarity": 3
    },
    "20092": {
        "amount": 100000,
        "evo_name": "Siren",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Water Spirit",
            "Water Spirit",
            "Water Spirit"
        ],
        "name": "Undine",
        "rarity": 3
    },
    "20093": {
        "amount": 200000,
        "evo_name": "Meltia",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Spirit",
            "Water Spirit",
            "Bat Mimic"
        ],
        "name": "Siren",
        "rarity": 4
    },
    "20102": {
        "amount": 100000,
        "evo_name": "Ice Ruler Sergio",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Water Idol",
            "Water Spirit"
        ],
        "name": "Knight Sergio",
        "rarity": 3
    },
    "20103": {
        "amount": 200000,
        "evo_name": "Ice Knight Sergio",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Pot",
            "Water Idol",
            "Water Nymph",
            "Water Nymph"
        ],
        "name": "Ice Ruler Sergio",
        "rarity": 4
    },
    "20112": {
        "amount": 100000,
        "evo_name": "Loch Ness",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Water Idol"
        ],
        "name": "Leviathan",
        "rarity": 3
    },
    "20113": {
        "amount": 200000,
        "evo_name": "Malnaplis",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Bat Mimic",
            "Mimic",
            "Water Spirit",
            "Water Nymph"
        ],
        "name": "Loch Ness",
        "rarity": 4
    },
    "20114": {
        "amount": 500000,
        "evo_name": "Felneus",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Dragon Mimic",
            "Water Spirit",
            "Water Nymph"
        ],
        "name": "Malnaplis",
        "rarity": 5
    },
    "20122": {
        "amount": 100000,
        "evo_name": "War Captain Mega",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Spirit",
            "Water Spirit",
            "Water Spirit"
        ],
        "name": "Captain Mega",
        "rarity": 3
    },
    "20123": {
        "amount": 200000,
        "evo_name": "Commander Mega",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Bat Mimic",
            "Water Nymph",
            "Water Nymph"
        ],
        "name": "War Captain Mega",
        "rarity": 4
    },
    "20124": {
        "amount": 500000,
        "evo_name": "Sea King Mega",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Dragon Mimic",
            "Water Idol",
            "Water Pot"
        ],
        "name": "Commander Mega",
        "rarity": 5
    },
    "20141": {
        "amount": 50000,
        "evo_name": "Snow Blade Stya",
        "evo_rarity": 3,
        "mats": [
            "Water Spirit",
            "Water Nymph",
            "Water Nymph",
            "Water Nymph",
            "Mimic"
        ],
        "name": "Stya",
        "rarity": 2
    },
    "20142": {
        "amount": 100000,
        "evo_name": "Frost Queen Stya",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Bat Mimic",
            "Water Spirit",
            "Water Nymph",
            "Water Nymph"
        ],
        "name": "Snow Blade Stya",
        "rarity": 3
    },
    "20143": {
        "amount": 200000,
        "evo_name": "Mother Snow Stya",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Pot",
            "Bat Mimic",
            "Water Spirit",
            "Water Nymph"
        ],
        "name": "Frost Queen Stya",
        "rarity": 4
    },
    "20152": {
        "amount": 100000,
        "evo_name": "Royal Elimo",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Nymph",
            "Water Nymph",
            "Mimic"
        ],
        "name": "Elimo",
        "rarity": 3
    },
    "20153": {
        "amount": 200000,
        "evo_name": "Genius Elimo",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Nymph",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Royal Elimo",
        "rarity": 4
    },
    "20154": {
        "amount": 500000,
        "evo_name": "Wise Mage Elimo",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Dragon Mimic",
            "Bat Mimic",
            "Water Pot"
        ],
        "name": "Genius Elimo",
        "rarity": 5
    },
    "20162": {
        "amount": 100000,
        "evo_name": "Ice Mage Dean",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Nymph",
            "Water Nymph",
            "Water Nymph"
        ],
        "name": "Dean",
        "rarity": 3
    },
    "20163": {
        "amount": 200000,
        "evo_name": "Ice Wizard Dean",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Ice Mage Dean",
        "rarity": 4
    },
    "20164": {
        "amount": 500000,
        "evo_name": "Ice Master Dean",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Dragon Mimic",
            "Dragon Mimic",
            "Water Idol"
        ],
        "name": "Ice Wizard Dean",
        "rarity": 5
    },
    "20171": {
        "amount": 50000,
        "evo_name": "Hrungnir",
        "evo_rarity": 3,
        "mats": [
            "Water Spirit",
            "Mimic"
        ],
        "name": "Wendigo",
        "rarity": 2
    },
    "20181": {
        "amount": 50000,
        "evo_name": "Frozen Rose Elize",
        "evo_rarity": 3,
        "mats": [
            "Water Spirit",
            "Water Nymph"
        ],
        "name": "Black Rose Elize",
        "rarity": 2
    },
    "20202": {
        "amount": 1000,
        "evo_name": "Water King",
        "evo_rarity": 4,
        "mats": [
            "Fire Ghost",
            "Earth Ghost",
            "Thunder Ghost",
            "Light Ghost",
            "Metal Ghost"
        ],
        "name": "Water Ghost",
        "rarity": 3
    },
    "20212": {
        "amount": 100000,
        "evo_name": "Twin Flash Rickel",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Spirit",
            "Water Spirit",
            "Water Nymph"
        ],
        "name": "Twin Gem Rickel",
        "rarity": 3
    },
    "20213": {
        "amount": 200000,
        "evo_name": "Twin Shot Rickel",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Twin Flash Rickel",
        "rarity": 4
    },
    "20214": {
        "amount": 500000,
        "evo_name": "Twin Arms Rickel",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Water Totem",
            "Water Idol",
            "Dragon Mimic"
        ],
        "name": "Twin Shot Rickel",
        "rarity": 5
    },
    "20222": {
        "amount": 100000,
        "evo_name": "Ice King Jaegar",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Idol",
            "Water Spirit",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Jaegar",
        "rarity": 3
    },
    "20233": {
        "amount": 200000,
        "evo_name": "Ice Warrior Karl",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Water Pot",
            "Water Pot"
        ],
        "name": "Brave Knight Karl",
        "rarity": 4
    },
    "20243": {
        "amount": 200000,
        "evo_name": "Snow Sibyl Eliza",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Spirit",
            "Water Pot",
            "Dark Pot"
        ],
        "name": "Eliza",
        "rarity": 4
    },
    "20253": {
        "amount": 200000,
        "evo_name": "Ice Apostle Tiara",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Water Pot",
            "Bat Mimic"
        ],
        "name": "Polar Angel Tiara",
        "rarity": 4
    },
    "20254": {
        "amount": 500000,
        "evo_name": "Final Apostle Tiara",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Water Totem",
            "Water Pot",
            "Dragon Mimic"
        ],
        "name": "Ice Apostle Tiara",
        "rarity": 5
    },
    "20273": {
        "amount": 200000,
        "evo_name": "Ice Tower Tesla",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Water Pot",
            "Water Pot"
        ],
        "name": "Ice Keep Copra",
        "rarity": 4
    },
    "20274": {
        "amount": 500000,
        "evo_name": "Ice Fortress Oulu",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Metal Mimic",
            "Water Idol",
            "Water Pot"
        ],
        "name": "Ice Tower Tesla",
        "rarity": 5
    },
    "20283": {
        "amount": 200000,
        "evo_name": "Hail Mech Reeze",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Pot",
            "Water Spirit",
            "Water Nymph"
        ],
        "name": "Hail Bot Reeze",
        "rarity": 4
    },
    "20284": {
        "amount": 500000,
        "evo_name": "Hail Gigantron Reeze",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Metal Mimic"
        ],
        "name": "Hail Mech Reeze",
        "rarity": 5
    },
    "20323": {
        "amount": 200000,
        "evo_name": "Snow Lion Signas",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Water Pot",
            "Water Pot"
        ],
        "name": "Snow Cub Signas",
        "rarity": 4
    },
    "20324": {
        "amount": 500000,
        "evo_name": "Snow Queen Signas",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Water Pot",
            "Water Pot",
            "Metal Mimic"
        ],
        "name": "Snow Lion Signas",
        "rarity": 5
    },
    "20353": {
        "amount": 200000,
        "evo_name": "Spear Arms Raydn",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Water Pot",
            "Water Pot"
        ],
        "name": "Spear Fist Raydn",
        "rarity": 4
    },
    "20354": {
        "amount": 500000,
        "evo_name": "Spear King Raydn",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Water Totem",
            "Water Pot",
            "Water Pot",
            "Metal Mimic"
        ],
        "name": "Spear Arms Raydn",
        "rarity": 5
    },
    "20363": {
        "amount": 200000,
        "evo_name": "Azure Warrior Lucina",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Pot",
            "Water Idol",
            "Water Idol",
            "Bat Mimic"
        ],
        "name": "Azure Blade Lucina",
        "rarity": 4
    },
    "20433": {
        "amount": 200000,
        "evo_name": "Tyrant Phee",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Pot",
            "Water Pot",
            "Water Idol",
            "Dragon Mimic"
        ],
        "name": "Phee",
        "rarity": 4
    },
    "20453": {
        "amount": 200000,
        "evo_name": "Axe King Mariudeth",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Pot",
            "Water Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Dark Axe Mariudeth",
        "rarity": 4
    },
    "20473": {
        "amount": 200000,
        "evo_name": "Divine Prince Arius",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Pot",
            "Water Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Prince Arius",
        "rarity": 4
    },
    "30011": {
        "amount": 2500,
        "evo_name": "Vine Pike Lance",
        "evo_rarity": 3,
        "mats": [
            "Earth Nymph"
        ],
        "name": "Pikeman Lance",
        "rarity": 2
    },
    "30012": {
        "amount": 100000,
        "evo_name": "Earth Pike Lance",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Spirit"
        ],
        "name": "Vine Pike Lance",
        "rarity": 3
    },
    "30013": {
        "amount": 200000,
        "evo_name": "Nature God Lance",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Spirit",
            "Earth Nymph",
            "Earth Nymph"
        ],
        "name": "Earth Pike Lance",
        "rarity": 4
    },
    "30014": {
        "amount": 500000,
        "evo_name": "Holy Earth Lance",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Earth Idol",
            "Earth Spirit",
            "Earth Nymph"
        ],
        "name": "Nature God Lance",
        "rarity": 5
    },
    "30021": {
        "amount": 50000,
        "evo_name": "Marksman Lario",
        "evo_rarity": 3,
        "mats": [
            "Earth Nymph",
            "Earth Nymph",
            "Earth Spirit"
        ],
        "name": "Archer Lario",
        "rarity": 2
    },
    "30022": {
        "amount": 100000,
        "evo_name": "Hawkeye Lario",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Spirit",
            "Earth Nymph",
            "Earth Nymph"
        ],
        "name": "Marksman Lario",
        "rarity": 3
    },
    "30023": {
        "amount": 200000,
        "evo_name": "Bow God Lario",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Pot",
            "Earth Idol",
            "Earth Idol",
            "Earth Nymph"
        ],
        "name": "Hawkeye Lario",
        "rarity": 4
    },
    "30030": {
        "amount": 1000,
        "evo_name": "King Mossy",
        "evo_rarity": 2,
        "mats": [
            "Earth Nymph"
        ],
        "name": "Mossy",
        "rarity": 1
    },
    "30040": {
        "amount": 5000,
        "evo_name": "Time Mage Claris",
        "evo_rarity": 2,
        "mats": [
            "Earth Nymph"
        ],
        "name": "Geomancer Claris",
        "rarity": 1
    },
    "30041": {
        "amount": 50000,
        "evo_name": "Time Lord Claris",
        "evo_rarity": 3,
        "mats": [
            "Earth Spirit",
            "Earth Nymph"
        ],
        "name": "Time Mage Claris",
        "rarity": 2
    },
    "30050": {
        "amount": 2500,
        "evo_name": "Polevik",
        "evo_rarity": 2,
        "mats": [
            "Mimic"
        ],
        "name": "Mandragora",
        "rarity": 1
    },
    "30051": {
        "amount": 50000,
        "evo_name": "Leshy",
        "evo_rarity": 3,
        "mats": [
            "Earth Spirit",
            "Mimic",
            "Mimic"
        ],
        "name": "Polevik",
        "rarity": 2
    },
    "30061": {
        "amount": 50000,
        "evo_name": "Head Bandit Zaza",
        "evo_rarity": 3,
        "mats": [
            "Earth Nymph",
            "Earth Nymph",
            "Earth Spirit"
        ],
        "name": "Bandit Zaza",
        "rarity": 2
    },
    "30062": {
        "amount": 100000,
        "evo_name": "Wild Bandit Zaza",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Head Bandit Zaza",
        "rarity": 3
    },
    "30071": {
        "amount": 50000,
        "evo_name": "Titania",
        "evo_rarity": 3,
        "mats": [
            "Earth Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Fairy",
        "rarity": 2
    },
    "30081": {
        "amount": 50000,
        "evo_name": "Ent",
        "evo_rarity": 3,
        "mats": [
            "Earth Nymph",
            "Earth Spirit",
            "Mimic"
        ],
        "name": "Trent",
        "rarity": 2
    },
    "30082": {
        "amount": 100000,
        "evo_name": "Xipe Totec",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Spirit",
            "Earth Nymph",
            "Mimic"
        ],
        "name": "Ent",
        "rarity": 3
    },
    "30092": {
        "amount": 100000,
        "evo_name": "High Elf",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Earth Spirit",
            "Earth Spirit",
            "Earth Spirit"
        ],
        "name": "Dryad",
        "rarity": 3
    },
    "30093": {
        "amount": 200000,
        "evo_name": "Lemenara",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Spirit",
            "Earth Nymph",
            "Bat Mimic"
        ],
        "name": "High Elf",
        "rarity": 4
    },
    "30102": {
        "amount": 100000,
        "evo_name": "Queen Lidith",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Earth Idol",
            "Earth Spirit"
        ],
        "name": "Princess Lidith",
        "rarity": 3
    },
    "30103": {
        "amount": 200000,
        "evo_name": "Empress Lidith",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Pot",
            "Earth Idol",
            "Earth Nymph",
            "Earth Nymph"
        ],
        "name": "Queen Lidith",
        "rarity": 4
    },
    "30112": {
        "amount": 100000,
        "evo_name": "World Tree Altro",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Earth Idol"
        ],
        "name": "Great Tree Alneu",
        "rarity": 3
    },
    "30113": {
        "amount": 200000,
        "evo_name": "God Tree Eltri",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Bat Mimic",
            "Mimic",
            "Earth Spirit",
            "Earth Nymph"
        ],
        "name": "World Tree Altro",
        "rarity": 4
    },
    "30114": {
        "amount": 500000,
        "evo_name": "Alpha Tree Altri",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Dragon Mimic",
            "Earth Spirit",
            "Earth Nymph"
        ],
        "name": "God Tree Eltri",
        "rarity": 5
    },
    "30122": {
        "amount": 100000,
        "evo_name": "Gun King Douglas",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Spirit",
            "Earth Spirit",
            "Earth Spirit"
        ],
        "name": "Gunner Douglas",
        "rarity": 3
    },
    "30123": {
        "amount": 200000,
        "evo_name": "Gun God Douglas",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Bat Mimic",
            "Earth Nymph",
            "Earth Nymph"
        ],
        "name": "Gun King Douglas",
        "rarity": 4
    },
    "30124": {
        "amount": 500000,
        "evo_name": "Holy Arms Douglas",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Dragon Mimic",
            "Earth Idol",
            "Earth Pot"
        ],
        "name": "Gun God Douglas",
        "rarity": 5
    },
    "30141": {
        "amount": 50000,
        "evo_name": "Brawler Nemia",
        "evo_rarity": 3,
        "mats": [
            "Earth Nymph",
            "Earth Nymph",
            "Earth Nymph",
            "Earth Spirit",
            "Mimic"
        ],
        "name": "Boxer Nemia",
        "rarity": 2
    },
    "30142": {
        "amount": 100000,
        "evo_name": "Gaia Fist Nemia",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Bat Mimic",
            "Earth Nymph",
            "Earth Spirit",
            "Earth Spirit"
        ],
        "name": "Brawler Nemia",
        "rarity": 3
    },
    "30143": {
        "amount": 200000,
        "evo_name": "Quake Fist Nemia",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Pot",
            "Bat Mimic",
            "Earth Spirit",
            "Earth Nymph"
        ],
        "name": "Gaia Fist Nemia",
        "rarity": 4
    },
    "30152": {
        "amount": 100000,
        "evo_name": "Pixy Royal Leore",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Nymph",
            "Earth Nymph",
            "Mimic"
        ],
        "name": "Pixy Leore",
        "rarity": 3
    },
    "30153": {
        "amount": 200000,
        "evo_name": "Pixy King Leore",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Nymph",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Pixy Royal Leore",
        "rarity": 4
    },
    "30154": {
        "amount": 500000,
        "evo_name": "Pixy Lord Leore",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Dragon Mimic",
            "Bat Mimic",
            "Earth Pot"
        ],
        "name": "Pixy King Leore",
        "rarity": 5
    },
    "30162": {
        "amount": 100000,
        "evo_name": "Earth Knight Edea",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Nymph",
            "Earth Nymph",
            "Earth Spirit"
        ],
        "name": "Edea",
        "rarity": 3
    },
    "30163": {
        "amount": 200000,
        "evo_name": "Mother Earth Edea",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Earth Knight Edea",
        "rarity": 4
    },
    "30164": {
        "amount": 500000,
        "evo_name": "Gaia Armor Edea",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Dragon Mimic",
            "Dragon Mimic",
            "Earth Idol"
        ],
        "name": "Mother Earth Edea",
        "rarity": 5
    },
    "30171": {
        "amount": 50000,
        "evo_name": "Dwarf Prince",
        "evo_rarity": 3,
        "mats": [
            "Earth Spirit",
            "Mimic"
        ],
        "name": "Dwarf",
        "rarity": 2
    },
    "30181": {
        "amount": 50000,
        "evo_name": "Bard Elton",
        "evo_rarity": 3,
        "mats": [
            "Earth Spirit",
            "Earth Nymph"
        ],
        "name": "Poet Elton",
        "rarity": 2
    },
    "30202": {
        "amount": 1000,
        "evo_name": "Earth King",
        "evo_rarity": 4,
        "mats": [
            "Fire Ghost",
            "Water Ghost",
            "Thunder Ghost",
            "Light Ghost",
            "Metal Ghost"
        ],
        "name": "Earth Ghost",
        "rarity": 3
    },
    "30212": {
        "amount": 100000,
        "evo_name": "Earthly Il & Mina",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Spirit",
            "Earth Spirit",
            "Earth Nymph"
        ],
        "name": "Twins Il & Mina",
        "rarity": 3
    },
    "30213": {
        "amount": 200000,
        "evo_name": "Gemini Il & Mina",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Earthly Il & Mina",
        "rarity": 4
    },
    "30214": {
        "amount": 500000,
        "evo_name": "Gaians Il & Mina",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Earth Totem",
            "Earth Idol",
            "Dragon Mimic"
        ],
        "name": "Gemini Il & Mina",
        "rarity": 5
    },
    "30222": {
        "amount": 100000,
        "evo_name": "Phantom Ristrall",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Idol",
            "Earth Spirit",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Ristrall",
        "rarity": 3
    },
    "30233": {
        "amount": 200000,
        "evo_name": "Gaia King Lugina",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Earth Pot",
            "Earth Pot"
        ],
        "name": "Lugina",
        "rarity": 4
    },
    "30243": {
        "amount": 200000,
        "evo_name": "Rose Sibyl Paula",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Spirit",
            "Earth Pot",
            "Dark Pot"
        ],
        "name": "Paula",
        "rarity": 4
    },
    "30253": {
        "amount": 200000,
        "evo_name": "Blade Hero Zelban",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Earth Pot",
            "Bat Mimic"
        ],
        "name": "Scar Blade Zelban",
        "rarity": 4
    },
    "30254": {
        "amount": 500000,
        "evo_name": "Blade Emperor Zelban",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Earth Totem",
            "Earth Pot",
            "Dragon Mimic"
        ],
        "name": "Blade Hero Zelban",
        "rarity": 5
    },
    "30273": {
        "amount": 200000,
        "evo_name": "Great Golem",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Earth Pot",
            "Earth Pot"
        ],
        "name": "Golem",
        "rarity": 4
    },
    "30274": {
        "amount": 500000,
        "evo_name": "Gravion",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Metal Mimic",
            "Earth Idol",
            "Earth Pot"
        ],
        "name": "Great Golem",
        "rarity": 5
    },
    "30283": {
        "amount": 200000,
        "evo_name": "Champ Fist Dilma",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Pot",
            "Earth Spirit",
            "Earth Nymph"
        ],
        "name": "Pugilist Dilma",
        "rarity": 4
    },
    "30284": {
        "amount": 500000,
        "evo_name": "Noble Fist Dilma",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Metal Mimic"
        ],
        "name": "Champ Fist Dilma",
        "rarity": 5
    },
    "30313": {
        "amount": 200000,
        "evo_name": "Havoc Queen Luly",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Earth Pot",
            "Earth Pot"
        ],
        "name": "Havoc Girl Luly",
        "rarity": 4
    },
    "30314": {
        "amount": 500000,
        "evo_name": "Havoc God Luly",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Earth Pot",
            "Earth Pot",
            "Metal Mimic"
        ],
        "name": "Havoc Queen Luly",
        "rarity": 5
    },
    "30343": {
        "amount": 200000,
        "evo_name": "War Girl Ophelia",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Earth Pot",
            "Earth Pot"
        ],
        "name": "Battle Girl Ophelia",
        "rarity": 4
    },
    "30344": {
        "amount": 500000,
        "evo_name": "War Queen Ophelia",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Earth Totem",
            "Earth Pot",
            "Earth Pot",
            "Metal Mimic"
        ],
        "name": "War Girl Ophelia",
        "rarity": 5
    },
    "30353": {
        "amount": 200000,
        "evo_name": "Steel Shield Darvan",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Pot",
            "Earth Idol",
            "Earth Idol",
            "Bat Mimic"
        ],
        "name": "Iron Shield Darvan",
        "rarity": 4
    },
    "30423": {
        "amount": 200000,
        "evo_name": "Ivy Nalmika",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Pot",
            "Earth Pot",
            "Earth Idol",
            "Dragon Mimic"
        ],
        "name": "Nalmika",
        "rarity": 4
    },
    "30443": {
        "amount": 200000,
        "evo_name": "Noble Thief Zelnite",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Pot",
            "Earth Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Great Thief Zelnite",
        "rarity": 4
    },
    "30463": {
        "amount": 200000,
        "evo_name": "Flora Queen Faris",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Pot",
            "Earth Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Flora Princess Faris",
        "rarity": 4
    },
    "40011": {
        "amount": 2500,
        "evo_name": "Thunder Eze",
        "evo_rarity": 3,
        "mats": [
            "Thunder Nymph"
        ],
        "name": "Warrior Eze",
        "rarity": 2
    },
    "40012": {
        "amount": 100000,
        "evo_name": "Thunder King Eze",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Spirit"
        ],
        "name": "Thunder Eze",
        "rarity": 3
    },
    "40013": {
        "amount": 200000,
        "evo_name": "Thunder God Eze",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Nymph",
            "Thunder Nymph"
        ],
        "name": "Thunder King Eze",
        "rarity": 4
    },
    "40014": {
        "amount": 500000,
        "evo_name": "Holy Thunder Eze",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Nymph"
        ],
        "name": "Thunder God Eze",
        "rarity": 5
    },
    "40021": {
        "amount": 50000,
        "evo_name": "Strategist Weiss",
        "evo_rarity": 3,
        "mats": [
            "Thunder Nymph",
            "Thunder Nymph",
            "Thunder Spirit"
        ],
        "name": "Advisor Weiss",
        "rarity": 2
    },
    "40022": {
        "amount": 100000,
        "evo_name": "Commander Weiss",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Nymph",
            "Thunder Nymph"
        ],
        "name": "Strategist Weiss",
        "rarity": 3
    },
    "40023": {
        "amount": 200000,
        "evo_name": "General Weiss",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Pot",
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Nymph"
        ],
        "name": "Commander Weiss",
        "rarity": 4
    },
    "40030": {
        "amount": 1000,
        "evo_name": "King Sparky",
        "evo_rarity": 2,
        "mats": [
            "Thunder Nymph"
        ],
        "name": "Sparky",
        "rarity": 1
    },
    "40040": {
        "amount": 5000,
        "evo_name": "High Dancer May",
        "evo_rarity": 2,
        "mats": [
            "Thunder Nymph"
        ],
        "name": "Dancer May",
        "rarity": 1
    },
    "40041": {
        "amount": 50000,
        "evo_name": "Royal Dancer May",
        "evo_rarity": 3,
        "mats": [
            "Thunder Spirit",
            "Thunder Nymph"
        ],
        "name": "High Dancer May",
        "rarity": 2
    },
    "40050": {
        "amount": 2500,
        "evo_name": "Aero",
        "evo_rarity": 2,
        "mats": [
            "Mimic"
        ],
        "name": "Harpy",
        "rarity": 1
    },
    "40051": {
        "amount": 50000,
        "evo_name": "Ocypete",
        "evo_rarity": 3,
        "mats": [
            "Thunder Spirit",
            "Mimic",
            "Mimic"
        ],
        "name": "Aero",
        "rarity": 2
    },
    "40061": {
        "amount": 50000,
        "evo_name": "Sky Boss Grafl",
        "evo_rarity": 3,
        "mats": [
            "Thunder Nymph",
            "Thunder Nymph",
            "Thunder Spirit"
        ],
        "name": "Sky Pirate Grafl",
        "rarity": 2
    },
    "40062": {
        "amount": 100000,
        "evo_name": "Sky Emperor Grafl",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Sky Boss Grafl",
        "rarity": 3
    },
    "40071": {
        "amount": 50000,
        "evo_name": "Cyclops",
        "evo_rarity": 3,
        "mats": [
            "Thunder Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Minotaur",
        "rarity": 2
    },
    "40081": {
        "amount": 50000,
        "evo_name": "Djin",
        "evo_rarity": 3,
        "mats": [
            "Thunder Nymph",
            "Thunder Spirit",
            "Mimic"
        ],
        "name": "Sylph",
        "rarity": 2
    },
    "40082": {
        "amount": 100000,
        "evo_name": "Crow Tengu",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Nymph",
            "Mimic"
        ],
        "name": "Djin",
        "rarity": 3
    },
    "40092": {
        "amount": 100000,
        "evo_name": "Great Falcon Ziz",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Thunder Spirit",
            "Thunder Spirit",
            "Thunder Spirit"
        ],
        "name": "Thunderbird",
        "rarity": 3
    },
    "40093": {
        "amount": 200000,
        "evo_name": "Zazabis",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Nymph",
            "Bat Mimic"
        ],
        "name": "Great Falcon Ziz",
        "rarity": 4
    },
    "40102": {
        "amount": 100000,
        "evo_name": "Sky King Falma",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Thunder Idol",
            "Thunder Spirit"
        ],
        "name": "Sky Knight Falma",
        "rarity": 3
    },
    "40103": {
        "amount": 200000,
        "evo_name": "Sky Legend Falma",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Pot",
            "Thunder Idol",
            "Thunder Nymph",
            "Thunder Nymph"
        ],
        "name": "Sky King Falma",
        "rarity": 4
    },
    "40112": {
        "amount": 100000,
        "evo_name": "King Behemoth",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Thunder Idol"
        ],
        "name": "Behemoth",
        "rarity": 3
    },
    "40113": {
        "amount": 200000,
        "evo_name": "Alpha Behemoth",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Bat Mimic",
            "Mimic",
            "Thunder Spirit",
            "Thunder Nymph"
        ],
        "name": "King Behemoth",
        "rarity": 4
    },
    "40114": {
        "amount": 500000,
        "evo_name": "Omega Behemoth",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Dragon Mimic",
            "Thunder Spirit",
            "Thunder Nymph"
        ],
        "name": "Alpha Behemoth",
        "rarity": 5
    },
    "40122": {
        "amount": 100000,
        "evo_name": "Princess Emilia",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Spirit",
            "Thunder Spirit"
        ],
        "name": "Emilia",
        "rarity": 3
    },
    "40123": {
        "amount": 200000,
        "evo_name": "Goddess Emilia",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Bat Mimic",
            "Thunder Nymph",
            "Thunder Nymph"
        ],
        "name": "Princess Emilia",
        "rarity": 4
    },
    "40124": {
        "amount": 500000,
        "evo_name": "Holy Shock Emilia",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Dragon Mimic",
            "Thunder Idol",
            "Thunder Pot"
        ],
        "name": "Goddess Emilia",
        "rarity": 5
    },
    "40141": {
        "amount": 50000,
        "evo_name": "Spark Kick Zeln",
        "evo_rarity": 3,
        "mats": [
            "Thunder Spirit",
            "Thunder Nymph",
            "Thunder Nymph",
            "Thunder Nymph",
            "Mimic"
        ],
        "name": "Zeln",
        "rarity": 2
    },
    "40142": {
        "amount": 100000,
        "evo_name": "Thunder Kick Zeln",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Bat Mimic",
            "Thunder Spirit",
            "Thunder Nymph",
            "Thunder Nymph"
        ],
        "name": "Spark Kick Zeln",
        "rarity": 3
    },
    "40143": {
        "amount": 200000,
        "evo_name": "Thunder Punt Zeln",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Pot",
            "Bat Mimic",
            "Thunder Spirit",
            "Thunder Nymph"
        ],
        "name": "Thunder Kick Zeln",
        "rarity": 4
    },
    "40152": {
        "amount": 100000,
        "evo_name": "Inventor Elulu",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Nymph",
            "Thunder Nymph",
            "Mimic"
        ],
        "name": "Tinkerer Elulu",
        "rarity": 3
    },
    "40153": {
        "amount": 200000,
        "evo_name": "Bolt Mallet Elulu",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Nymph",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Inventor Elulu",
        "rarity": 4
    },
    "40154": {
        "amount": 500000,
        "evo_name": "Tesla Club Elulu",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Dragon Mimic",
            "Bat Mimic",
            "Thunder Pot"
        ],
        "name": "Bolt Mallet Elulu",
        "rarity": 5
    },
    "40162": {
        "amount": 100000,
        "evo_name": "Shock Bow Loch",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Nymph",
            "Thunder Nymph",
            "Thunder Spirit"
        ],
        "name": "Loch",
        "rarity": 3
    },
    "40163": {
        "amount": 200000,
        "evo_name": "Zeus Bow Loch",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Shock Bow Loch",
        "rarity": 4
    },
    "40164": {
        "amount": 500000,
        "evo_name": "Heaven\'s Bow Loch",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Dragon Mimic",
            "Dragon Mimic",
            "Thunder Idol"
        ],
        "name": "Zeus Bow Loch",
        "rarity": 5
    },
    "40171": {
        "amount": 50000,
        "evo_name": "Gorgon",
        "evo_rarity": 3,
        "mats": [
            "Thunder Spirit",
            "Mimic"
        ],
        "name": "Empusa",
        "rarity": 2
    },
    "40181": {
        "amount": 50000,
        "evo_name": "Thunder Cat Parmi",
        "evo_rarity": 3,
        "mats": [
            "Thunder Spirit",
            "Thunder Nymph"
        ],
        "name": "Wild Cat Parmi",
        "rarity": 2
    },
    "40202": {
        "amount": 1000,
        "evo_name": "Thunder King",
        "evo_rarity": 4,
        "mats": [
            "Fire Ghost",
            "Water Ghost",
            "Earth Ghost",
            "Light Ghost",
            "Metal Ghost"
        ],
        "name": "Thunder Ghost",
        "rarity": 3
    },
    "40212": {
        "amount": 100000,
        "evo_name": "Bolt Knight Amy",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Spirit",
            "Thunder Nymph"
        ],
        "name": "Bolt Pike Amy",
        "rarity": 3
    },
    "40213": {
        "amount": 200000,
        "evo_name": "Bolt Goddess Amy",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Bolt Knight Amy",
        "rarity": 4
    },
    "40214": {
        "amount": 500000,
        "evo_name": "Heaven\'s Bolt Amy",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Thunder Totem",
            "Thunder Idol",
            "Dragon Mimic"
        ],
        "name": "Bolt Goddess Amy",
        "rarity": 5
    },
    "40222": {
        "amount": 100000,
        "evo_name": "Slicing Bolt Raiden",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Spirit",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Raiden",
        "rarity": 3
    },
    "40233": {
        "amount": 200000,
        "evo_name": "Royal Guard Paris",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Pot",
            "Thunder Pot"
        ],
        "name": "Paladin Paris",
        "rarity": 4
    },
    "40243": {
        "amount": 200000,
        "evo_name": "Bolt Sibyl Zele",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Pot",
            "Light Pot"
        ],
        "name": "Zele",
        "rarity": 4
    },
    "40253": {
        "amount": 200000,
        "evo_name": "Drake God Lodin",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Pot",
            "Bat Mimic"
        ],
        "name": "Drakeborn Lodin",
        "rarity": 4
    },
    "40254": {
        "amount": 500000,
        "evo_name": "Empyreal Drake Lodin",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Thunder Totem",
            "Thunder Pot",
            "Dragon Mimic"
        ],
        "name": "Drake God Lodin",
        "rarity": 5
    },
    "40273": {
        "amount": 200000,
        "evo_name": "Rebel Angel Elsel",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Pot",
            "Thunder Pot"
        ],
        "name": "Sky Angel Kushra",
        "rarity": 4
    },
    "40274": {
        "amount": 500000,
        "evo_name": "Havoc Angel Ronel",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Metal Mimic",
            "Thunder Idol",
            "Thunder Pot"
        ],
        "name": "Rebel Angel Elsel",
        "rarity": 5
    },
    "40283": {
        "amount": 200000,
        "evo_name": "Bolt Magus Rashil",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Pot",
            "Thunder Spirit",
            "Thunder Nymph"
        ],
        "name": "Shock Mage Rashil",
        "rarity": 4
    },
    "40284": {
        "amount": 500000,
        "evo_name": "Sky Mage Rashil",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Metal Mimic"
        ],
        "name": "Bolt Magus Rashil",
        "rarity": 5
    },
    "40313": {
        "amount": 200000,
        "evo_name": "Gold Knight Rina",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Pot",
            "Thunder Pot"
        ],
        "name": "Gold Warrior Rina",
        "rarity": 4
    },
    "40314": {
        "amount": 500000,
        "evo_name": "Gold Queen Rina",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Thunder Pot",
            "Thunder Pot",
            "Metal Mimic"
        ],
        "name": "Gold Knight Rina",
        "rarity": 5
    },
    "40343": {
        "amount": 200000,
        "evo_name": "Mech Cannon Grybe",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Pot",
            "Thunder Pot"
        ],
        "name": "Mech Arms Grybe",
        "rarity": 4
    },
    "40344": {
        "amount": 500000,
        "evo_name": "Mech God Grybe",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Thunder Totem",
            "Thunder Pot",
            "Thunder Pot",
            "Metal Mimic"
        ],
        "name": "Mech Cannon Grybe",
        "rarity": 5
    },
    "40353": {
        "amount": 200000,
        "evo_name": "Lightning Sage Bran",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Pot",
            "Thunder Idol",
            "Thunder Idol",
            "Bat Mimic"
        ],
        "name": "Sage Bran",
        "rarity": 4
    },
    "40423": {
        "amount": 200000,
        "evo_name": "Crusher Uda",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Pot",
            "Thunder Pot",
            "Thunder Idol",
            "Dragon Mimic"
        ],
        "name": "Uda",
        "rarity": 4
    },
    "40443": {
        "amount": 200000,
        "evo_name": "Thunder God Esna",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Pot",
            "Thunder Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Thunder Beast Ahvel",
        "rarity": 4
    },
    "40463": {
        "amount": 200000,
        "evo_name": "Head Engineer Garnan",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Pot",
            "Thunder Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Lead Engineer Garnan",
        "rarity": 4
    },
    "50011": {
        "amount": 50000,
        "evo_name": "Knight Atro",
        "evo_rarity": 3,
        "mats": [
            "Light Nymph"
        ],
        "name": "Squire Atro",
        "rarity": 2
    },
    "50012": {
        "amount": 100000,
        "evo_name": "Holy Knight Atro",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Spirit"
        ],
        "name": "Knight Atro",
        "rarity": 3
    },
    "50013": {
        "amount": 200000,
        "evo_name": "God Atro",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Spirit",
            "Light Nymph",
            "Light Nymph"
        ],
        "name": "Holy Knight Atro",
        "rarity": 4
    },
    "50014": {
        "amount": 500000,
        "evo_name": "Holy Light Atro",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Light Idol",
            "Light Spirit",
            "Light Nymph"
        ],
        "name": "God Atro",
        "rarity": 5
    },
    "50021": {
        "amount": 50000,
        "evo_name": "Sunshine Luna",
        "evo_rarity": 3,
        "mats": [
            "Light Nymph",
            "Light Nymph",
            "Light Spirit"
        ],
        "name": "Luna",
        "rarity": 2
    },
    "50022": {
        "amount": 100000,
        "evo_name": "Holy Queen Luna",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Spirit",
            "Light Nymph",
            "Light Nymph"
        ],
        "name": "Sunshine Luna",
        "rarity": 3
    },
    "50023": {
        "amount": 200000,
        "evo_name": "Holy Empress Luna",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Pot",
            "Light Idol",
            "Light Idol",
            "Light Nymph"
        ],
        "name": "Holy Queen Luna",
        "rarity": 4
    },
    "50030": {
        "amount": 1000,
        "evo_name": "King Glowy",
        "evo_rarity": 2,
        "mats": [
            "Light Nymph"
        ],
        "name": "Glowy",
        "rarity": 1
    },
    "50040": {
        "amount": 3000,
        "evo_name": "Light Lord Mimir",
        "evo_rarity": 2,
        "mats": [
            "Light Nymph"
        ],
        "name": "Sage Mimir",
        "rarity": 1
    },
    "50041": {
        "amount": 50000,
        "evo_name": "Great Sage Mimir",
        "evo_rarity": 3,
        "mats": [
            "Light Spirit",
            "Light Nymph"
        ],
        "name": "Light Lord Mimir",
        "rarity": 2
    },
    "50050": {
        "amount": 5000,
        "evo_name": "Archangel",
        "evo_rarity": 2,
        "mats": [
            "Mimic"
        ],
        "name": "Angel",
        "rarity": 1
    },
    "50051": {
        "amount": 50000,
        "evo_name": "Azrael",
        "evo_rarity": 3,
        "mats": [
            "Light Spirit",
            "Mimic",
            "Mimic"
        ],
        "name": "Archangel",
        "rarity": 2
    },
    "50060": {
        "amount": 50000,
        "evo_name": "Pegasus",
        "evo_rarity": 3,
        "mats": [
            "Light Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Unicorn",
        "rarity": 2
    },
    "50071": {
        "amount": 50000,
        "evo_name": "Angel Maria",
        "evo_rarity": 3,
        "mats": [
            "Light Nymph",
            "Light Spirit",
            "Mimic"
        ],
        "name": "Priestess Maria",
        "rarity": 2
    },
    "50072": {
        "amount": 100000,
        "evo_name": "Saint Maria",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Spirit",
            "Light Nymph",
            "Mimic"
        ],
        "name": "Angel Maria",
        "rarity": 3
    },
    "50082": {
        "amount": 100000,
        "evo_name": "Sky Hero Athena",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Light Spirit",
            "Light Spirit",
            "Light Spirit"
        ],
        "name": "Valkyrie",
        "rarity": 3
    },
    "50083": {
        "amount": 200000,
        "evo_name": "Legendary Jona ",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Spirit",
            "Light Nymph",
            "Bat Mimic"
        ],
        "name": "Sky Hero Athena",
        "rarity": 4
    },
    "50092": {
        "amount": 100000,
        "evo_name": "Holy Shot Heidt",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Light Idol",
            "Light Spirit"
        ],
        "name": "Cowboy Heidt",
        "rarity": 3
    },
    "50093": {
        "amount": 200000,
        "evo_name": "Pistol God Heidt",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Pot",
            "Light Idol",
            "Light Nymph",
            "Light Nymph"
        ],
        "name": "Holy Shot Heidt",
        "rarity": 4
    },
    "50102": {
        "amount": 100000,
        "evo_name": "Bahamut",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Light Idol"
        ],
        "name": "Wyvern",
        "rarity": 3
    },
    "50103": {
        "amount": 200000,
        "evo_name": "Rameldria",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Bat Mimic",
            "Mimic",
            "Light Spirit",
            "Light Nymph"
        ],
        "name": "Bahamut",
        "rarity": 4
    },
    "50104": {
        "amount": 500000,
        "evo_name": "Duelmex",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Dragon Mimic",
            "Light Spirit",
            "Light Nymph"
        ],
        "name": "Rameldria",
        "rarity": 5
    },
    "50112": {
        "amount": 100000,
        "evo_name": "Holy Knight Will",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Spirit",
            "Light Spirit",
            "Light Spirit"
        ],
        "name": "Knight Will",
        "rarity": 3
    },
    "50113": {
        "amount": 200000,
        "evo_name": "God Knight Will",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Bat Mimic",
            "Light Nymph",
            "Light Nymph"
        ],
        "name": "Holy Knight Will",
        "rarity": 4
    },
    "50114": {
        "amount": 500000,
        "evo_name": "Holy Guard Will",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Dragon Mimic",
            "Light Idol",
            "Light Pot"
        ],
        "name": "God Knight Will",
        "rarity": 5
    },
    "50141": {
        "amount": 50000,
        "evo_name": "Adventurer Alma",
        "evo_rarity": 3,
        "mats": [
            "Light Spirit",
            "Light Nymph",
            "Light Nymph",
            "Light Nymph",
            "Mimic"
        ],
        "name": "Traveler Alma",
        "rarity": 2
    },
    "50142": {
        "amount": 100000,
        "evo_name": "Hero Alma",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Bat Mimic",
            "Light Spirit",
            "Light Nymph",
            "Light Nymph"
        ],
        "name": "Adventurer Alma",
        "rarity": 3
    },
    "50143": {
        "amount": 200000,
        "evo_name": "Brave Hero Alma",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Pot",
            "Bat Mimic",
            "Light Spirit",
            "Light Nymph"
        ],
        "name": "Hero Alma",
        "rarity": 4
    },
    "50152": {
        "amount": 100000,
        "evo_name": "Champion Aem",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Nymph",
            "Light Nymph",
            "Mimic"
        ],
        "name": "Knight Aem",
        "rarity": 3
    },
    "50153": {
        "amount": 200000,
        "evo_name": "Holy Master Aem",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Nymph",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Champion Aem",
        "rarity": 4
    },
    "50154": {
        "amount": 500000,
        "evo_name": "Ultra Blade Aem",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Dragon Mimic",
            "Bat Mimic",
            "Light Pot"
        ],
        "name": "Holy Master Aem",
        "rarity": 5
    },
    "50162": {
        "amount": 100000,
        "evo_name": "Blade Storm Sefia",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Spirit",
            "Light Spirit",
            "Light Nymph"
        ],
        "name": "Eight Blade Sefia",
        "rarity": 3
    },
    "50163": {
        "amount": 200000,
        "evo_name": "Blade Queen Sefia",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Blade Storm Sefia",
        "rarity": 4
    },
    "50164": {
        "amount": 500000,
        "evo_name": "Holy Blades Sefia",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Light Totem",
            "Light Idol",
            "Dragon Mimic"
        ],
        "name": "Blade Queen Sefia",
        "rarity": 5
    },
    "50171": {
        "amount": 50000,
        "evo_name": "Cait Sith",
        "evo_rarity": 3,
        "mats": [
            "Light Spirit",
            "Mimic"
        ],
        "name": "Al-mi\'raj",
        "rarity": 2
    },
    "50181": {
        "amount": 50000,
        "evo_name": "Holy Maiden Amul",
        "evo_rarity": 3,
        "mats": [
            "Light Spirit",
            "Light Nymph"
        ],
        "name": "Shrine Girl Amul",
        "rarity": 2
    },
    "50202": {
        "amount": 1000,
        "evo_name": "Light King",
        "evo_rarity": 4,
        "mats": [
            "Fire Ghost",
            "Water Ghost",
            "Earth Ghost",
            "Thunder Ghost",
            "Metal Ghost"
        ],
        "name": "Light Ghost",
        "rarity": 3
    },
    "50223": {
        "amount": 200000,
        "evo_name": "Star King Nekky",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Spirit",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Star Prince Nekky",
        "rarity": 4
    },
    "50242": {
        "amount": 100000,
        "evo_name": "Twinkling Flash Mila",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Idol",
            "Light Spirit",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Mila",
        "rarity": 3
    },
    "50253": {
        "amount": 200000,
        "evo_name": "Goddess Tilith",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Spirit",
            "Light Nymph",
            "Light Pot"
        ],
        "name": "Tilith",
        "rarity": 4
    },
    "50263": {
        "amount": 200000,
        "evo_name": "Ray Sibyl Sola",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Spirit",
            "Fire Pot",
            "Thunder Pot"
        ],
        "name": "Sola",
        "rarity": 4
    },
    "50273": {
        "amount": 200000,
        "evo_name": "Centurion Melchio",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Idol",
            "Light Pot",
            "Bat Mimic"
        ],
        "name": "Legionary Melchio",
        "rarity": 4
    },
    "50274": {
        "amount": 500000,
        "evo_name": "Legatus Melchio",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Light Totem",
            "Light Pot",
            "Dragon Mimic"
        ],
        "name": "Centurion Melchio",
        "rarity": 5
    },
    "50303": {
        "amount": 200000,
        "evo_name": "Lubradine",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Idol",
            "Light Pot",
            "Light Pot"
        ],
        "name": "White Lebra",
        "rarity": 4
    },
    "50304": {
        "amount": 500000,
        "evo_name": "Leorone",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Metal Mimic",
            "Light Idol",
            "Light Pot"
        ],
        "name": "Lubradine",
        "rarity": 5
    },
    "50313": {
        "amount": 200000,
        "evo_name": "Cyborg Lilith II",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Pot",
            "Light Spirit",
            "Light Nymph"
        ],
        "name": "Cyborg Lilith",
        "rarity": 4
    },
    "50314": {
        "amount": 500000,
        "evo_name": "Terminator Lilith",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Light Idol",
            "Light Idol",
            "Metal Mimic"
        ],
        "name": "Cyborg Lilith II",
        "rarity": 5
    },
    "50383": {
        "amount": 200000,
        "evo_name": "Cavalryman Sodis",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Idol",
            "Light Pot",
            "Light Pot"
        ],
        "name": "Horseman Sodis",
        "rarity": 4
    },
    "50384": {
        "amount": 500000,
        "evo_name": "Guardian Chief Sodis",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Light Pot",
            "Light Pot",
            "Metal Mimic"
        ],
        "name": "Cavalryman Sodis",
        "rarity": 5
    },
    "50403": {
        "amount": 200000,
        "evo_name": "Holy Warrior Alyut",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Idol",
            "Light Pot",
            "Light Pot"
        ],
        "name": "Light Blade Alyut",
        "rarity": 4
    },
    "50404": {
        "amount": 500000,
        "evo_name": "Divine Light Alyut",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Light Totem",
            "Light Pot",
            "Light Pot",
            "Metal Mimic"
        ],
        "name": "Holy Warrior Alyut",
        "rarity": 5
    },
    "50413": {
        "amount": 200000,
        "evo_name": "Unflinching Themis",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Pot",
            "Light Idol",
            "Light Idol",
            "Bat Mimic"
        ],
        "name": "Prodigy Themis",
        "rarity": 4
    },
    "50473": {
        "amount": 200000,
        "evo_name": "Ruin Zellha",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Pot",
            "Light Pot",
            "Light Idol",
            "Dragon Mimic"
        ],
        "name": "Zellha",
        "rarity": 4
    },
    "50483": {
        "amount": 200000,
        "evo_name": "Wisdom Angel Azael",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Pot",
            "Light Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Dark Angel Azael",
        "rarity": 4
    },
    "50503": {
        "amount": 200000,
        "evo_name": "Brave King Hogar",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Pot",
            "Light Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Brave Legend Hogar",
        "rarity": 4
    },
    "50563": {
        "amount": 200000,
        "evo_name": "Deemo and the Girl",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Pot",
            "Light Idol",
            "Light Spirit",
            "Bat Mimic"
        ],
        "name": "Deemo and the Girl",
        "rarity": 4
    },
    "60011": {
        "amount": 50000,
        "evo_name": "Heavy Magress",
        "evo_rarity": 3,
        "mats": [
            "Dark Nymph"
        ],
        "name": "Iron Magress",
        "rarity": 2
    },
    "60012": {
        "amount": 100000,
        "evo_name": "Black Magress",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Spirit"
        ],
        "name": "Heavy Magress",
        "rarity": 3
    },
    "60013": {
        "amount": 200000,
        "evo_name": "Death Magress",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Spirit",
            "Dark Nymph",
            "Dark Nymph"
        ],
        "name": "Black Magress",
        "rarity": 4
    },
    "60014": {
        "amount": 500000,
        "evo_name": "Unholy Magress",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dark Idol",
            "Dark Spirit",
            "Dark Nymph"
        ],
        "name": "Death Magress",
        "rarity": 5
    },
    "60021": {
        "amount": 50000,
        "evo_name": "Samurai Mifune",
        "evo_rarity": 3,
        "mats": [
            "Dark Nymph",
            "Dark Nymph",
            "Dark Spirit"
        ],
        "name": "Mifune",
        "rarity": 2
    },
    "60022": {
        "amount": 100000,
        "evo_name": "God Blade Mifune",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Spirit",
            "Dark Nymph",
            "Dark Nymph"
        ],
        "name": "Samurai Mifune",
        "rarity": 3
    },
    "60023": {
        "amount": 200000,
        "evo_name": "Ryujin Mifune",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Pot",
            "Dark Idol",
            "Dark Idol",
            "Dark Nymph"
        ],
        "name": "God Blade Mifune",
        "rarity": 4
    },
    "60030": {
        "amount": 1000,
        "evo_name": "King Gloomy",
        "evo_rarity": 2,
        "mats": [
            "Dark Nymph"
        ],
        "name": "Gloomy",
        "rarity": 1
    },
    "60040": {
        "amount": 5000,
        "evo_name": "Magician Lily",
        "evo_rarity": 2,
        "mats": [
            "Dark Nymph"
        ],
        "name": "Sorceress Lily",
        "rarity": 1
    },
    "60041": {
        "amount": 50000,
        "evo_name": "Dark Arts Lily",
        "evo_rarity": 3,
        "mats": [
            "Dark Spirit",
            "Dark Nymph"
        ],
        "name": "Magician Lily",
        "rarity": 2
    },
    "60050": {
        "amount": 2500,
        "evo_name": "Skeleton King",
        "evo_rarity": 2,
        "mats": [
            "Mimic"
        ],
        "name": "Skeleton",
        "rarity": 1
    },
    "60051": {
        "amount": 50000,
        "evo_name": "Skull Lord",
        "evo_rarity": 3,
        "mats": [
            "Dark Spirit",
            "Mimic",
            "Mimic"
        ],
        "name": "Skeleton King",
        "rarity": 2
    },
    "60061": {
        "amount": 50000,
        "evo_name": "Zahhak",
        "evo_rarity": 3,
        "mats": [
            "Dark Nymph",
            "Mimic",
            "Mimic"
        ],
        "name": "Medusa",
        "rarity": 2
    },
    "60071": {
        "amount": 50000,
        "evo_name": "Succubus",
        "evo_rarity": 3,
        "mats": [
            "Dark Nymph",
            "Dark Spirit",
            "Mimic"
        ],
        "name": "Lilin",
        "rarity": 2
    },
    "60072": {
        "amount": 100000,
        "evo_name": "Nyx",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Spirit",
            "Dark Nymph",
            "Mimic"
        ],
        "name": "Succubus",
        "rarity": 3
    },
    "60082": {
        "amount": 100000,
        "evo_name": "Lich",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Dark Spirit",
            "Dark Spirit",
            "Dark Spirit"
        ],
        "name": "Vampire",
        "rarity": 3
    },
    "60083": {
        "amount": 200000,
        "evo_name": "Legion",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Spirit",
            "Dark Nymph",
            "Bat Mimic"
        ],
        "name": "Lich",
        "rarity": 4
    },
    "60092": {
        "amount": 100000,
        "evo_name": "Garroter Shida",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Dark Idol",
            "Dark Spirit"
        ],
        "name": "Shida",
        "rarity": 3
    },
    "60093": {
        "amount": 200000,
        "evo_name": "Executioner Shida",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Pot",
            "Dark Idol",
            "Dark Nymph",
            "Dark Nymph"
        ],
        "name": "Garroter Shida",
        "rarity": 4
    },
    "60102": {
        "amount": 100000,
        "evo_name": "Hell King Hades",
        "evo_rarity": 4,
        "mats": [
            "Bat Mimic",
            "Dark Idol"
        ],
        "name": "Memetes",
        "rarity": 3
    },
    "60103": {
        "amount": 200000,
        "evo_name": "Death God Lodaga",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Bat Mimic",
            "Mimic",
            "Dark Spirit",
            "Dark Nymph"
        ],
        "name": "Hell King Hades",
        "rarity": 4
    },
    "60104": {
        "amount": 500000,
        "evo_name": "Hellborn Dilias",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dragon Mimic",
            "Dark Spirit",
            "Dark Nymph"
        ],
        "name": "Death God Lodaga",
        "rarity": 5
    },
    "60112": {
        "amount": 100000,
        "evo_name": "Scythe Alice",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Spirit",
            "Dark Spirit",
            "Dark Spirit"
        ],
        "name": "Alice",
        "rarity": 3
    },
    "60113": {
        "amount": 200000,
        "evo_name": "Scythe God Alice",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Bat Mimic",
            "Dark Nymph",
            "Dark Nymph"
        ],
        "name": "Scythe Alice",
        "rarity": 4
    },
    "60114": {
        "amount": 500000,
        "evo_name": "Hell Keep Alice",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dragon Mimic",
            "Dark Idol",
            "Dark Pot"
        ],
        "name": "Scythe God Alice",
        "rarity": 5
    },
    "60132": {
        "amount": 1000,
        "evo_name": "Metal King",
        "evo_rarity": 4,
        "mats": [
            "Fire Ghost",
            "Water Ghost",
            "Earth Ghost",
            "Thunder Ghost",
            "Light Ghost"
        ],
        "name": "Metal Ghost",
        "rarity": 3
    },
    "60143": {
        "amount": 200000,
        "evo_name": "Metal Mimic",
        "evo_rarity": 5,
        "mats": [
            "Metal God",
            "Metal King",
            "Metal Ghost"
        ],
        "name": "Bat Mimic",
        "rarity": 4
    },
    "60151": {
        "amount": 50000,
        "evo_name": "Assassin Oboro",
        "evo_rarity": 3,
        "mats": [
            "Dark Spirit",
            "Dark Nymph",
            "Dark Nymph",
            "Dark Nymph",
            "Mimic"
        ],
        "name": "Ninja Oboro",
        "rarity": 2
    },
    "60152": {
        "amount": 100000,
        "evo_name": "Shadow Oboro",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Bat Mimic",
            "Dark Spirit",
            "Dark Nymph",
            "Dark Nymph"
        ],
        "name": "Assassin Oboro",
        "rarity": 3
    },
    "60153": {
        "amount": 200000,
        "evo_name": "Red Shadow Oboro",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Pot",
            "Bat Mimic",
            "Dark Spirit",
            "Dark Nymph"
        ],
        "name": "Shadow Oboro",
        "rarity": 4
    },
    "60162": {
        "amount": 100000,
        "evo_name": "Necromancer Lemia",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Nymph",
            "Dark Nymph",
            "Mimic"
        ],
        "name": "Lemia",
        "rarity": 3
    },
    "60163": {
        "amount": 200000,
        "evo_name": "Soul Keeper Lemia",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Nymph",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Necromancer Lemia",
        "rarity": 4
    },
    "60164": {
        "amount": 500000,
        "evo_name": "Soul Vortex Lemia",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dragon Mimic",
            "Bat Mimic",
            "Dark Pot"
        ],
        "name": "Soul Keeper Lemia",
        "rarity": 5
    },
    "60172": {
        "amount": 100000,
        "evo_name": "Goth Kikuri",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Spirit",
            "Dark Spirit",
            "Dark Nymph"
        ],
        "name": "Kikuri",
        "rarity": 3
    },
    "60173": {
        "amount": 200000,
        "evo_name": "Goth Idol Kikuri",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Spirit",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Goth Kikuri",
        "rarity": 4
    },
    "60174": {
        "amount": 500000,
        "evo_name": "Death Idol Kikuri",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dark Totem",
            "Dark Idol",
            "Dragon Mimic"
        ],
        "name": "Goth Idol Kikuri",
        "rarity": 5
    },
    "60181": {
        "amount": 50000,
        "evo_name": "Incubus",
        "evo_rarity": 3,
        "mats": [
            "Dark Spirit",
            "Mimic"
        ],
        "name": "Imp",
        "rarity": 2
    },
    "60191": {
        "amount": 50000,
        "evo_name": "High Roller Zeul",
        "evo_rarity": 3,
        "mats": [
            "Dark Spirit",
            "Dark Nymph"
        ],
        "name": "Gambler Zeul",
        "rarity": 2
    },
    "60212": {
        "amount": 100000,
        "evo_name": "Black Emperor Bahvel",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Idol",
            "Dark Spirit",
            "Bat Mimic",
            "Mimic"
        ],
        "name": "Bahvel",
        "rarity": 3
    },
    "60233": {
        "amount": 200000,
        "evo_name": "Mad God Zebra",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Idol",
            "Dark Pot",
            "Dark Pot"
        ],
        "name": "Disciple Zebra",
        "rarity": 4
    },
    "60243": {
        "amount": 200000,
        "evo_name": "Night Sibyl Madia",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Spirit",
            "Water Pot",
            "Earth Pot"
        ],
        "name": "Madia",
        "rarity": 4
    },
    "60253": {
        "amount": 200000,
        "evo_name": "Duel-GX II",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Idol",
            "Dark Pot",
            "Bat Mimic"
        ],
        "name": "Duel-GX",
        "rarity": 4
    },
    "60254": {
        "amount": 500000,
        "evo_name": "Duel-SGX",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dark Totem",
            "Dark Pot",
            "Dragon Mimic"
        ],
        "name": "Duel-GX II",
        "rarity": 5
    },
    "60273": {
        "amount": 200000,
        "evo_name": "Magistra Lira",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Idol",
            "Dark Pot",
            "Dark Pot"
        ],
        "name": "Half Blood Lira",
        "rarity": 4
    },
    "60274": {
        "amount": 500000,
        "evo_name": "God Eater Lira",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Metal Mimic",
            "Dark Idol",
            "Dark Pot"
        ],
        "name": "Magistra Lira",
        "rarity": 5
    },
    "60283": {
        "amount": 200000,
        "evo_name": "Evil Blades Logan",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Pot",
            "Dark Spirit",
            "Dark Nymph"
        ],
        "name": "Dark Swords Logan",
        "rarity": 4
    },
    "60284": {
        "amount": 500000,
        "evo_name": "Inferno Swords Logan",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dark Idol",
            "Dark Idol",
            "Metal Mimic"
        ],
        "name": "Evil Blades Logan",
        "rarity": 5
    },
    "60313": {
        "amount": 200000,
        "evo_name": "Dark Curse Lunaris",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Idol",
            "Dark Pot",
            "Dark Pot"
        ],
        "name": "Dark Charm Lunaris",
        "rarity": 4
    },
    "60314": {
        "amount": 500000,
        "evo_name": "Black Lotus Lunaris",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dark Pot",
            "Dark Pot",
            "Metal Mimic"
        ],
        "name": "Dark Curse Lunaris",
        "rarity": 5
    },
    "60353": {
        "amount": 200000,
        "evo_name": "Dark Warrior Zephyr",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Idol",
            "Dark Pot",
            "Dark Pot"
        ],
        "name": "Dark Blade Zephyr",
        "rarity": 4
    },
    "60354": {
        "amount": 500000,
        "evo_name": "Dark Warlord Zephyr",
        "evo_rarity": 6,
        "mats": [
            "Miracle Totem",
            "Dark Totem",
            "Dark Pot",
            "Dark Pot",
            "Metal Mimic"
        ],
        "name": "Dark Warrior Zephyr",
        "rarity": 5
    },
    "60363": {
        "amount": 200000,
        "evo_name": "Dark Tunes Eric",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Pot",
            "Dark Idol",
            "Dark Idol",
            "Bat Mimic"
        ],
        "name": "Magic Riffs Eric",
        "rarity": 4
    },
    "60473": {
        "amount": 200000,
        "evo_name": "Evil Kajah",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Pot",
            "Dark Pot",
            "Dark Idol",
            "Dragon Mimic"
        ],
        "name": "Kajah",
        "rarity": 4
    },
    "60483": {
        "amount": 200000,
        "evo_name": "Blazing Mare",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Idol",
            "Dark Pot",
            "Dark Pot"
        ],
        "name": "Disciple Mare",
        "rarity": 4
    },
    "60493": {
        "amount": 200000,
        "evo_name": "Empress Lilly Matah",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Pot",
            "Dark Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Dictator Lilly Matah",
        "rarity": 4
    },
    "60523": {
        "amount": 200000,
        "evo_name": "Inferno Queen Elza",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Pot",
            "Dark Idol",
            "Dragon Mimic",
            "Bat Mimic"
        ],
        "name": "Inferno Elza",
        "rarity": 4
    },
    "810003": {
        "amount": 100000,
        "evo_name": "Hot Rocket Cayena",
        "evo_rarity": 4,
        "mats": [
            "Fire Idol",
            "Fire Idol",
            "Fire Spirit",
            "Fire Spirit",
            "Mimic"
        ],
        "name": "Maiden Cayena",
        "rarity": 3
    },
    "810004": {
        "amount": 200000,
        "evo_name": "War Rocket Cayena",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Idol",
            "Fire Spirit",
            "Bat Mimic"
        ],
        "name": "Hot Rocket Cayena",
        "rarity": 4
    },
    "810044": {
        "amount": 200000,
        "evo_name": "Titan Wing\u00a0Blaze",
        "evo_rarity": 5,
        "mats": [
            "Fire Totem",
            "Fire Idol",
            "Fire Pot",
            "Miracle Bulb",
            "Fire Bulb"
        ],
        "name": "Crimson Wing Blaze",
        "rarity": 4
    },
    "820003": {
        "amount": 100000,
        "evo_name": "Gun Lady Serin",
        "evo_rarity": 4,
        "mats": [
            "Water Idol",
            "Water Idol",
            "Water Spirit",
            "Water Spirit",
            "Mimic"
        ],
        "name": "Maiden Serin",
        "rarity": 3
    },
    "820004": {
        "amount": 200000,
        "evo_name": "Gun Goddess Serin",
        "evo_rarity": 5,
        "mats": [
            "Water Totem",
            "Water Idol",
            "Water Idol",
            "Water Spirit",
            "Bat Mimic"
        ],
        "name": "Gun Lady Serin",
        "rarity": 4
    },
    "830003": {
        "amount": 100000,
        "evo_name": "Nyan Slash Bayley",
        "evo_rarity": 4,
        "mats": [
            "Earth Idol",
            "Earth Idol",
            "Earth Spirit",
            "Earth Spirit",
            "Mimic"
        ],
        "name": "Maiden Bayley",
        "rarity": 3
    },
    "830004": {
        "amount": 200000,
        "evo_name": "Wild Slash Bayley",
        "evo_rarity": 5,
        "mats": [
            "Earth Totem",
            "Earth Idol",
            "Earth Idol",
            "Earth Spirit",
            "Bat Mimic"
        ],
        "name": "Nyan Slash Bayley",
        "rarity": 4
    },
    "840003": {
        "amount": 100000,
        "evo_name": "Raid Bomb Fennia",
        "evo_rarity": 4,
        "mats": [
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Spirit",
            "Thunder Spirit",
            "Mimic"
        ],
        "name": "Maiden Fennia",
        "rarity": 3
    },
    "840004": {
        "amount": 200000,
        "evo_name": "Raid Bolt Fennia",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Idol",
            "Thunder Spirit",
            "Bat Mimic"
        ],
        "name": "Raid Bomb Fennia",
        "rarity": 4
    },
    "840044": {
        "amount": 200000,
        "evo_name": "Vorpal Wing Cerise",
        "evo_rarity": 5,
        "mats": [
            "Thunder Totem",
            "Thunder Idol",
            "Thunder Pot",
            "Miracle Bulb",
            "Thunder Bulb"
        ],
        "name": "Storm Wing Cerise",
        "rarity": 4
    },
    "850003": {
        "amount": 100000,
        "evo_name": "Sky Queen Vanila",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Idol",
            "Light Spirit",
            "Light Spirit",
            "Mimic"
        ],
        "name": "Maiden Vanila",
        "rarity": 3
    },
    "850004": {
        "amount": 200000,
        "evo_name": "Sky Angel Vanila",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Light Idol",
            "Light Spirit",
            "Bat Mimic"
        ],
        "name": "Sky Queen Vanila",
        "rarity": 4
    },
    "850013": {
        "amount": 100000,
        "evo_name": "Damsel Estia",
        "evo_rarity": 4,
        "mats": [
            "Light Idol",
            "Light Spirit",
            "Light Nymph",
            "Light Pot",
            "Mimic"
        ],
        "name": "Estia",
        "rarity": 3
    },
    "850014": {
        "amount": 200000,
        "evo_name": "Princess Estia",
        "evo_rarity": 5,
        "mats": [
            "Light Totem",
            "Light Idol",
            "Miracle Bulb",
            "Light Pot",
            "Bat Mimic"
        ],
        "name": "Damsel Estia",
        "rarity": 4
    },
    "860003": {
        "amount": 100000,
        "evo_name": "Dark Blade Lico",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Idol",
            "Dark Spirit",
            "Dark Spirit",
            "Mimic"
        ],
        "name": "Maiden Lico",
        "rarity": 3
    },
    "860004": {
        "amount": 200000,
        "evo_name": "Demon Blade Lico",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Dark Idol",
            "Bat Mimic",
            "Bat Mimic"
        ],
        "name": "Dark Blade Lico",
        "rarity": 4
    },
    "860013": {
        "amount": 100000,
        "evo_name": "Royal Guard Xenon",
        "evo_rarity": 4,
        "mats": [
            "Dark Idol",
            "Dark Spirit",
            "Dark Nymph",
            "Dark Pot",
            "Mimic"
        ],
        "name": "Xenon",
        "rarity": 3
    },
    "860014": {
        "amount": 200000,
        "evo_name": "Sir Sancus Xenon",
        "evo_rarity": 5,
        "mats": [
            "Dark Totem",
            "Dark Idol",
            "Miracle Bulb",
            "Dark Pot",
            "Bat Mimic"
        ],
        "name": "Royal Guard Xenon",
        "rarity": 4
    }
}'
puts JSON.parse(unit_json).first
