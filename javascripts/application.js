$(document).ready(function() {

  var units = [
{id: "10011", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10011.png", text:"Fencer Vargas", cost:2500, materials: ["Fire Nymph"]}
{id: "10012", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10012.png", text:"Burning Vargas", cost:100000, materials: ["Fire Idol", "Fire Spirit"]}
{id: "10013", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10013.png", text:"Fire King Vargas", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Spirit", "Fire Nymph", "Fire Nymph"]}
{id: "10014", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10014.png", text:"Fire God Vargas", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Idol", "Fire Spirit", "Fire Nymph"]}
{id: "10015", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10015.png", text:"Holy Flame Vargas", cost:1500000, materials: ["Fire Mecha God", "Miracle Totem", "Fire Totem", "Fire Idol", "110100"]}
{id: "10021", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10021.png", text:"Beast Zegar", cost:50000, materials: ["Fire Nymph", "Fire Nymph", "Fire Spirit"]}
{id: "10022", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10022.png", text:"Rage Beast Zegar", cost:100000, materials: ["Fire Idol", "Fire Spirit", "Fire Nymph", "Fire Nymph"]}
{id: "10023", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10023.png", text:"Fire Beast Zegar", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Fire Idol", "Fire Nymph"]}
{id: "10024", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10024.png", text:"Beast King Zegar", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Idol", "Dragon Mimic", "Metal Mimic"]}
{id: "10030", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10030.png", text:"Burny", cost:1000, materials: ["Fire Nymph"]}
{id: "10040", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10040.png", text:"Witch Liza", cost:5000, materials: ["Fire Nymph"]}
{id: "10041", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10041.png", text:"Warlock Liza", cost:50000, materials: ["Fire Spirit", "Fire Nymph"]}
{id: "10050", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10050.png", text:"Goblin", cost:2500, materials: ["Mimic"]}
{id: "10051", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10051.png", text:"Redcap", cost:50000, materials: ["Fire Spirit", "Mimic", "Mimic"]}
{id: "10061", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10061.png", text:"Thief Leon", cost:50000, materials: ["Fire Nymph", "Fire Nymph", "Fire Spirit"]}
{id: "10062", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10062.png", text:"Head Thief Leon", cost:100000, materials: ["Fire Idol", "Fire Nymph", "Mimic", "Mimic"]}
{id: "10071", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10071.png", text:"Orthos", cost:50000, materials: ["Fire Nymph", "Mimic", "Mimic"]}
{id: "10072", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10072.png", text:"Cerberus", cost:100000, materials: ["Fire Spirit", "Fire Spirit", "Mimic", "Bat Mimic"]}
{id: "10081", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10081.png", text:"Salamander", cost:50000, materials: ["Fire Nymph", "Fire Spirit", "Mimic"]}
{id: "10082", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10082.png", text:"Ifrit", cost:100000, materials: ["Fire Idol", "Fire Spirit", "Fire Nymph", "Mimic"]}
{id: "10092", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10092.png", text:"Firedrake", cost:100000, materials: ["Bat Mimic", "Fire Spirit", "Fire Spirit", "Fire Spirit"]}
{id: "10093", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10093.png", text:"Dragon Graven", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Spirit", "Fire Nymph", "Bat Mimic"]}
{id: "10094", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10094.png", text:"Dalimaone", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Fire Idol", "Metal Mimic"]}
{id: "10102", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10102.png", text:"Knight Agni", cost:100000, materials: ["Bat Mimic", "Fire Idol", "Fire Spirit"]}
{id: "10103", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10103.png", text:"Fire Knight Agni", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Fire Nymph", "Fire Nymph"]}
{id: "10104", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10104.png", text:"Magma Knight Agni", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Fire Idol", "Metal Mimic"]}
{id: "10112", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10112.png", text:"Phoenix", cost:100000, materials: ["Bat Mimic", "Fire Idol"]}
{id: "10113", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10113.png", text:"Lava Phoenix", cost:200000, materials: ["Fire Totem", "Bat Mimic", "Mimic", "Fire Spirit", "Fire Nymph"]}
{id: "10114", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10114.png", text:"God Phoenix", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Dragon Mimic", "Fire Spirit", "Fire Nymph"]}
{id: "10122", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10122.png", text:"Lava", cost:100000, materials: ["Fire Idol", "Fire Spirit", "Fire Spirit", "Fire Spirit"]}
{id: "10123", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10123.png", text:"Fire Knight Lava", cost:200000, materials: ["Fire Totem", "Fire Idol", "Bat Mimic", "Fire Nymph", "Fire Nymph"]}
{id: "10124", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10124.png", text:"Fire God Lava", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Dragon Mimic", "Fire Idol", "Fire Pot"]}
{id: "10141", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10141.png", text:"Blacksmith Galant", cost:50000, materials: ["Fire Spirit", "Fire Nymph", "Fire Nymph", "Fire Nymph", "Mimic"]}
{id: "10142", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10142.png", text:"Bruiser Galant", cost:100000, materials: ["Fire Idol", "Bat Mimic", "Fire Spirit", "Fire Nymph", "Fire Nymph"]}
{id: "10143", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10143.png", text:"God Arm Galant", cost:200000, materials: ["Fire Totem", "Fire Pot", "Bat Mimic", "Fire Spirit", "Fire Nymph"]}
{id: "10144", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10144.png", text:"Smith Lord Galant", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Dragon Mimic", "Dragon Mimic"]}
{id: "10152", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10152.png", text:"Lancia", cost:100000, materials: ["Fire Idol", "Fire Nymph", "Fire Nymph", "Mimic"]}
{id: "10153", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10153.png", text:"Hot Chef Lancia", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Nymph", "Bat Mimic", "Mimic"]}
{id: "10154", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10154.png", text:"Head Chef Lancia", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Dragon Mimic", "Bat Mimic", "Fire Pot"]}
{id: "10162", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10162.png", text:"Lorand", cost:100000, materials: ["Fire Idol", "Fire Nymph", "Fire Nymph", "Fire Nymph"]}
{id: "10163", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10163.png", text:"Professor Lorand", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Idol", "Bat Mimic", "Bat Mimic"]}
{id: "10164", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10164.png", text:"Master Lorand", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Dragon Mimic", "Dragon Mimic", "Fire Idol"]}
{id: "10171", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10171.png", text:"Orc", cost:50000, materials: ["Fire Spirit", "Mimic"]}
{id: "10181", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10181.png", text:"Hermit Talos", cost:50000, materials: ["Fire Spirit", "Fire Nymph"]}
{id: "10202", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10202.png", text:"Fire Ghost", cost:1000, materials: ["Water Ghost", "Earth Ghost", "Thunder Ghost", "Light Ghost", "Metal Ghost"]}
{id: "10212", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10212.png", text:"Drake Chief Aisha", cost:100000, materials: ["Fire Idol", "Fire Spirit", "Fire Spirit", "Fire Nymph"]}
{id: "10213", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10213.png", text:"Drake Lord Aisha", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Idol", "Bat Mimic", "Bat Mimic"]}
{id: "10214", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10214.png", text:"Drake Queen Aisha", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Totem", "Fire Idol", "Dragon Mimic"]}
{id: "10222", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10222.png", text:"Goltovah", cost:100000, materials: ["Fire Idol", "Fire Idol", "Fire Spirit", "Bat Mimic", "Mimic"]}
{id: "10233", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10233.png", text:"Swordswoman Seria", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Idol", "Fire Pot", "Fire Pot"]}
{id: "10243", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10243.png", text:"Freya", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Spirit", "Fire Pot", "Light Pot"]}
{id: "10244", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10244.png", text:"Blaze Sibyl Freya", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Thunder Pot", "Light Pot"]}
{id: "10253", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10253.png", text:"Red Axe Michele", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Idol", "Fire Pot", "Bat Mimic"]}
{id: "10254", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10254.png", text:"Lotus Axe Michele", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Totem", "Fire Pot", "Dragon Mimic"]}
{id: "10261", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10261.png", text:"Bozdell", cost:50000, materials: ["Fire Spirit", "Fire Nymph", "Mimic", "Bat Mimic"]}
{id: "10273", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10273.png", text:"Homusubi", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Idol", "Fire Pot", "Fire Pot"]}
{id: "10274", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10274.png", text:"Kagutsuchi", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Metal Mimic", "Fire Idol", "Fire Pot"]}
{id: "10283", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10283.png", text:"War Demon Vishra", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Pot", "Fire Spirit", "Fire Nymph"]}
{id: "10284", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10284.png", text:"Rakshasa Vishra", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Idol", "Fire Idol", "Metal Mimic"]}
{id: "10293", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10293.png", text:"Sword Emperor Reed", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Pot", "Fire Idol", "Dragon Mimic"]}
{id: "10333", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10333.png", text:"Red Slash Farlon", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Idol", "Fire Pot", "Fire Pot"]}
{id: "10334", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10334.png", text:"Red Blade Farlon", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Fire Pot", "Metal Mimic"]}
{id: "10363", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10363.png", text:"Fire Step Ramna", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Idol", "Fire Pot", "Fire Pot"]}
{id: "10364", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10364.png", text:"Fire Dance Ramna", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Fire Pot", "Metal Mimic"]}
{id: "10373", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10373.png", text:"Dark Arts Dia", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Fire Idol", "Bat Mimic"]}
{id: "10374", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10374.png", text:"Dark Princess Dia", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Fire Pot", "Metal Mimic"]}
{id: "10443", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10443.png", text:"Luther", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Pot", "Fire Idol", "Dragon Mimic"]}
{id: "10444", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10444.png", text:"Defiant Luther", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "10463", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10463.png", text:"Bodyguard Darvanshel", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "10464", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10464.png", text:"Protector Darvanshel", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Dragon Mimic", "Dragon Mimic", "Metal Mimic"]}
{id: "10493", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10493.png", text:"Emperor Orwen", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "10494", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10494.png", text:"Divine Emperor Orwen", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "10503", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10503.png", text:"Fire Witch Ulkina", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Fire Idol", "Dragon Mimic"]}
{id: "10504", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10504.png", text:"Fire Dragoon Ulkina", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Dragon Mimic", "Metal Mimic"]}
{id: "10543", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10543.png", text:"Ember Elder Fiora", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Dragon Mimic", "Dragon Mimic"]}
{id: "10544", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10544.png", text:"Ember Sage Fiora", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Thunder Totem", "Fire Pot", "Metal Mimic"]}
{id: "10553", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10553.png", text:"Phoenix Knight Arus", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Fire Idol", "Dragon Mimic"]}
{id: "10554", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10554.png", text:"Phoenix Emperor Arus", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Fire Pot", "Metal Mimic"]}
{id: "10583", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10583.png", text:"Gilded Armor Vanberk", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Pot", "Fire Idol", "Dragon Mimic"]}
{id: "10584", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10584.png", text:"Blaze Armor Vanberk", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Totem", "Fire Pot", "Metal Mimic"]}
{id: "10594", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10594.png", text:"Scorching Alpha", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "10595", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10595.png", text:"Smoldering King Alpha", cost:1500000, materials: ["Fire Mecha God", "Miracle Totem", "Fire Totem", "Metal Mimic", "Metal Mimic"]}
{id: "10604", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10604.png", text:"Burning Pike Claire", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Dragon Mimic", "Metal Mimic", "Fire Pot"]}
{id: "10605", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_10605.png", text:"Volcanic Pike Claire", cost:1500000, materials: ["Fire Mecha God", "Miracle Totem", "Fire Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "20011", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20011.png", text:"Selena", cost:2500, materials: ["Water Nymph"]}
{id: "20012", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20012.png", text:"Ice Selena", cost:100000, materials: ["Water Idol", "Water Spirit"]}
{id: "20013", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20013.png", text:"Ice Queen Selena", cost:200000, materials: ["Water Totem", "Water Idol", "Water Spirit", "Water Nymph", "Water Nymph"]}
{id: "20014", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20014.png", text:"Ice Goddess Selena", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Idol", "Water Spirit", "Water Nymph"]}
{id: "20015", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20015.png", text:"Holy Ice Selena", cost:1500000, materials: ["Water Mecha God", "Miracle Totem", "Water Totem", "Water Idol", "110100"]}
{id: "20021", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20021.png", text:"Zephu", cost:50000, materials: ["Water Nymph", "Water Nymph", "Water Spirit"]}
{id: "20022", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20022.png", text:"Knight Zephu", cost:100000, materials: ["Water Idol", "Water Spirit", "Water Nymph", "Water Nymph"]}
{id: "20023", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20023.png", text:"Dragoon Zephu", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Water Idol", "Water Nymph"]}
{id: "20024", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20024.png", text:"Dragon Hero Zephu", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Idol", "Dragon Mimic", "Metal Mimic"]}
{id: "20030", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20030.png", text:"Squirty", cost:1000, materials: ["Water Nymph"]}
{id: "20040", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20040.png", text:"Priest Merith", cost:5000, materials: ["Water Nymph"]}
{id: "20041", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20041.png", text:"Healer Merith", cost:50000, materials: ["Water Spirit", "Water Nymph"]}
{id: "20050", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20050.png", text:"Merman", cost:2500, materials: ["Mimic"]}
{id: "20051", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20051.png", text:"Sahuagin", cost:50000, materials: ["Water Spirit", "Mimic", "Mimic"]}
{id: "20061", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20061.png", text:"Pirate Verica", cost:50000, materials: ["Water Nymph", "Water Nymph", "Water Spirit"]}
{id: "20062", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20062.png", text:"Plunderer Verica", cost:100000, materials: ["Water Idol", "Water Nymph", "Mimic", "Mimic"]}
{id: "20071", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20071.png", text:"Ramia", cost:50000, materials: ["Water Nymph", "Mimic", "Mimic"]}
{id: "20072", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20072.png", text:"Scylla", cost:100000, materials: ["Water Spirit", "Water Spirit", "Mimic", "Bat Mimic"]}
{id: "20081", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20081.png", text:"Rantoul", cost:50000, materials: ["Water Nymph", "Water Spirit", "Mimic"]}
{id: "20082", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20082.png", text:"Legtos", cost:100000, materials: ["Water Idol", "Water Spirit", "Water Spirit", "Mimic"]}
{id: "20092", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20092.png", text:"Undine", cost:100000, materials: ["Bat Mimic", "Water Spirit", "Water Spirit", "Water Spirit"]}
{id: "20093", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20093.png", text:"Siren", cost:200000, materials: ["Water Totem", "Water Idol", "Water Spirit", "Water Spirit", "Bat Mimic"]}
{id: "20094", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20094.png", text:"Meltia", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Water Idol", "Metal Mimic"]}
{id: "20102", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20102.png", text:"Knight Sergio", cost:100000, materials: ["Bat Mimic", "Water Idol", "Water Spirit"]}
{id: "20103", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20103.png", text:"Ice Ruler Sergio", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Water Nymph", "Water Nymph"]}
{id: "20104", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20104.png", text:"Ice Knight Sergio", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Water Idol", "Metal Mimic"]}
{id: "20112", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20112.png", text:"Leviathan", cost:100000, materials: ["Bat Mimic", "Water Idol"]}
{id: "20113", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20113.png", text:"Loch Ness", cost:200000, materials: ["Water Totem", "Bat Mimic", "Mimic", "Water Spirit", "Water Nymph"]}
{id: "20114", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20114.png", text:"Malnaplis", cost:500000, materials: ["Miracle Totem", "Water Totem", "Dragon Mimic", "Water Spirit", "Water Nymph"]}
{id: "20122", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20122.png", text:"Captain Mega", cost:100000, materials: ["Water Idol", "Water Spirit", "Water Spirit", "Water Spirit"]}
{id: "20123", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20123.png", text:"War Captain Mega", cost:200000, materials: ["Water Totem", "Water Idol", "Bat Mimic", "Water Nymph", "Water Nymph"]}
{id: "20124", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20124.png", text:"Commander Mega", cost:500000, materials: ["Miracle Totem", "Water Totem", "Dragon Mimic", "Water Idol", "Water Pot"]}
{id: "20141", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20141.png", text:"Stya", cost:50000, materials: ["Water Spirit", "Water Nymph", "Water Nymph", "Water Nymph", "Mimic"]}
{id: "20142", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20142.png", text:"Snow Blade Stya", cost:100000, materials: ["Water Idol", "Bat Mimic", "Water Spirit", "Water Nymph", "Water Nymph"]}
{id: "20143", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20143.png", text:"Frost Queen Stya", cost:200000, materials: ["Water Totem", "Water Pot", "Bat Mimic", "Water Spirit", "Water Nymph"]}
{id: "20144", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20144.png", text:"Mother Snow Stya", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Dragon Mimic", "Dragon Mimic"]}
{id: "20152", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20152.png", text:"Elimo", cost:100000, materials: ["Water Idol", "Water Nymph", "Water Nymph", "Mimic"]}
{id: "20153", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20153.png", text:"Royal Elimo", cost:200000, materials: ["Water Totem", "Water Idol", "Water Nymph", "Bat Mimic", "Mimic"]}
{id: "20154", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20154.png", text:"Genius Elimo", cost:500000, materials: ["Miracle Totem", "Water Totem", "Dragon Mimic", "Bat Mimic", "Water Pot"]}
{id: "20162", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20162.png", text:"Dean", cost:100000, materials: ["Water Idol", "Water Nymph", "Water Nymph", "Water Nymph"]}
{id: "20163", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20163.png", text:"Ice Mage Dean", cost:200000, materials: ["Water Totem", "Water Idol", "Water Idol", "Bat Mimic", "Bat Mimic"]}
{id: "20164", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20164.png", text:"Ice Wizard Dean", cost:500000, materials: ["Miracle Totem", "Water Totem", "Dragon Mimic", "Dragon Mimic", "Water Idol"]}
{id: "20171", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20171.png", text:"Wendigo", cost:50000, materials: ["Water Spirit", "Mimic"]}
{id: "20181", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20181.png", text:"Black Rose Elize", cost:50000, materials: ["Water Spirit", "Water Nymph"]}
{id: "20202", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20202.png", text:"Water Ghost", cost:1000, materials: ["Fire Ghost", "Earth Ghost", "Thunder Ghost", "Light Ghost", "Metal Ghost"]}
{id: "20212", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20212.png", text:"Twin Gem Rickel", cost:100000, materials: ["Water Idol", "Water Spirit", "Water Spirit", "Water Nymph"]}
{id: "20213", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20213.png", text:"Twin Flash Rickel", cost:200000, materials: ["Water Totem", "Water Idol", "Water Idol", "Bat Mimic", "Bat Mimic"]}
{id: "20214", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20214.png", text:"Twin Shot Rickel", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Water Idol", "Dragon Mimic"]}
{id: "20222", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20222.png", text:"Jaegar", cost:100000, materials: ["Water Idol", "Water Idol", "Water Spirit", "Bat Mimic", "Mimic"]}
{id: "20233", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20233.png", text:"Brave Knight Karl", cost:200000, materials: ["Water Totem", "Water Idol", "Water Idol", "Water Pot", "Water Pot"]}
{id: "20243", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20243.png", text:"Eliza", cost:200000, materials: ["Water Totem", "Water Idol", "Water Spirit", "Water Pot", "Dark Pot"]}
{id: "20244", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20244.png", text:"Snow Sibyl Eliza", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Earth Pot", "Dark Pot"]}
{id: "20253", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20253.png", text:"Polar Angel Tiara", cost:200000, materials: ["Water Totem", "Water Idol", "Water Idol", "Water Pot", "Bat Mimic"]}
{id: "20254", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20254.png", text:"Ice Apostle Tiara", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Water Pot", "Dragon Mimic"]}
{id: "20261", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20261.png", text:"Calamity Fish Deenan", cost:50000, materials: ["Water Spirit", "Water Nymph", "Mimic", "Bat Mimic"]}
{id: "20273", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20273.png", text:"Ice Keep Copra", cost:200000, materials: ["Water Totem", "Water Idol", "Water Idol", "Water Pot", "Water Pot"]}
{id: "20274", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20274.png", text:"Ice Tower Tesla", cost:500000, materials: ["Miracle Totem", "Water Totem", "Metal Mimic", "Water Idol", "Water Pot"]}
{id: "20283", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20283.png", text:"Hail Bot Reeze", cost:200000, materials: ["Water Totem", "Water Idol", "Water Pot", "Water Spirit", "Water Nymph"]}
{id: "20284", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20284.png", text:"Hail Mech Reeze", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Idol", "Water Idol", "Metal Mimic"]}
{id: "20293", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20293.png", text:"Talon King Rhein", cost:200000, materials: ["Water Totem", "Water Pot", "Water Pot", "Water Idol", "Dragon Mimic"]}
{id: "20323", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20323.png", text:"Snow Cub Signas", cost:200000, materials: ["Water Totem", "Water Idol", "Water Idol", "Water Pot", "Water Pot"]}
{id: "20324", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20324.png", text:"Snow Lion Signas", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Water Pot", "Metal Mimic"]}
{id: "20353", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20353.png", text:"Spear Fist Raydn", cost:200000, materials: ["Water Totem", "Water Idol", "Water Idol", "Water Pot", "Water Pot"]}
{id: "20354", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20354.png", text:"Spear Arms Raydn", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Water Pot", "Metal Mimic"]}
{id: "20363", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20363.png", text:"Azure Blade Lucina", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Water Idol", "Bat Mimic"]}
{id: "20364", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20364.png", text:"Azure Warrior Lucina", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Water Pot", "Metal Mimic"]}
{id: "20433", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20433.png", text:"Phee", cost:200000, materials: ["Water Totem", "Water Pot", "Water Pot", "Water Idol", "Dragon Mimic"]}
{id: "20434", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20434.png", text:"Tyrant Phee", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "20453", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20453.png", text:"Dark Axe Mariudeth", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "20454", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20454.png", text:"Axe King Mariudeth", cost:500000, materials: ["Miracle Totem", "Water Totem", "Dragon Mimic", "Dragon Mimic", "Metal Mimic"]}
{id: "20473", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20473.png", text:"Prince Arius", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "20474", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20474.png", text:"Divine Prince Arius", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "20483", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20483.png", text:"Aquamancer Kuhla", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Water Idol", "Dragon Mimic"]}
{id: "20484", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20484.png", text:"Aqua Ruler Kuhla", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Dragon Mimic", "Metal Mimic"]}
{id: "20494", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20494.png", text:"Noah", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Metal Mimic", "Metal Mimic"]}
{id: "20513", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20513.png", text:"Sea Pirate Eve", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Dragon Mimic", "Dragon Mimic"]}
{id: "20514", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20514.png", text:"Pirate Empress Eve", cost:500000, materials: ["Miracle Totem", "Water Totem", "Earth Totem", "Water Pot", "Metal Mimic"]}
{id: "20524", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20524.png", text:"Tesla", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Water Pot", "Metal Mimic"]}
{id: "20533", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20533.png", text:"Disciple Belfura", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Water Idol", "Dragon Mimic"]}
{id: "20534", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20534.png", text:"Slayer Belfura", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Water Pot", "Metal Mimic"]}
{id: "20553", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20553.png", text:"Alchemist Rigness", cost:200000, materials: ["Water Totem", "Water Pot", "Water Pot", "Water Idol", "Dragon Mimic"]}
{id: "20554", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20554.png", text:"Synthesizer Rigness", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Water Pot", "Metal Mimic"]}
{id: "20564", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20564.png", text:"Piercing Tazer", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "20565", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20565.png", text:"Aqua Slash Tazer", cost:1500000, materials: ["Water Mecha God", "Miracle Totem", "Water Totem", "Metal Mimic", "Metal Mimic"]}
{id: "20574", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20574.png", text:"Frozen Blade Colt", cost:500000, materials: ["Miracle Totem", "Water Totem", "Dragon Mimic", "Metal Mimic", "Water Pot"]}
{id: "20575", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_20575.png", text:"Arctic Blade Colt", cost:1500000, materials: ["Water Mecha God", "Miracle Totem", "Water Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "30011", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30011.png", text:"Pikeman Lance", cost:2500, materials: ["Earth Nymph"]}
{id: "30012", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30012.png", text:"Vine Pike Lance", cost:100000, materials: ["Earth Idol", "Earth Spirit"]}
{id: "30013", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30013.png", text:"Earth Pike Lance", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Spirit", "Earth Nymph", "Earth Nymph"]}
{id: "30014", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30014.png", text:"Nature God Lance", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Idol", "Earth Spirit", "Earth Nymph"]}
{id: "30015", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30015.png", text:"Holy Earth Lance", cost:1500000, materials: ["Earth Mecha God", "Miracle Totem", "Earth Totem", "Earth Idol", "110100"]}
{id: "30021", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30021.png", text:"Archer Lario", cost:50000, materials: ["Earth Nymph", "Earth Nymph", "Earth Spirit"]}
{id: "30022", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30022.png", text:"Marksman Lario", cost:100000, materials: ["Earth Idol", "Earth Spirit", "Earth Nymph", "Earth Nymph"]}
{id: "30023", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30023.png", text:"Hawkeye Lario", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Earth Idol", "Earth Nymph"]}
{id: "30024", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30024.png", text:"Bow God Lario", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Idol", "Dragon Mimic", "Metal Mimic"]}
{id: "30030", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30030.png", text:"Mossy", cost:1000, materials: ["Earth Nymph"]}
{id: "30040", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30040.png", text:"Geomancer Claris", cost:5000, materials: ["Earth Nymph"]}
{id: "30041", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30041.png", text:"Time Mage Claris", cost:50000, materials: ["Earth Spirit", "Earth Nymph"]}
{id: "30050", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30050.png", text:"Mandragora", cost:2500, materials: ["Mimic"]}
{id: "30051", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30051.png", text:"Polevik", cost:50000, materials: ["Earth Spirit", "Mimic", "Mimic"]}
{id: "30061", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30061.png", text:"Bandit Zaza", cost:50000, materials: ["Earth Nymph", "Earth Nymph", "Earth Spirit"]}
{id: "30062", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30062.png", text:"Head Bandit Zaza", cost:100000, materials: ["Earth Idol", "Earth Nymph", "Mimic", "Mimic"]}
{id: "30071", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30071.png", text:"Fairy", cost:50000, materials: ["Earth Nymph", "Mimic", "Mimic"]}
{id: "30072", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30072.png", text:"Titania", cost:100000, materials: ["Earth Spirit", "Earth Spirit", "Mimic", "Bat Mimic"]}
{id: "30081", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30081.png", text:"Trent", cost:50000, materials: ["Earth Nymph", "Earth Spirit", "Mimic"]}
{id: "30082", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30082.png", text:"Ent", cost:100000, materials: ["Earth Idol", "Earth Spirit", "Earth Nymph", "Mimic"]}
{id: "30092", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30092.png", text:"Dryad", cost:100000, materials: ["Bat Mimic", "Earth Spirit", "Earth Spirit", "Earth Spirit"]}
{id: "30093", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30093.png", text:"High Elf", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Spirit", "Earth Nymph", "Bat Mimic"]}
{id: "30094", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30094.png", text:"Lemenara", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Earth Idol", "Metal Mimic"]}
{id: "30102", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30102.png", text:"Princess Lidith", cost:100000, materials: ["Bat Mimic", "Earth Idol", "Earth Spirit"]}
{id: "30103", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30103.png", text:"Queen Lidith", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Earth Nymph", "Earth Nymph"]}
{id: "30104", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30104.png", text:"Empress Lidith", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Earth Idol", "Metal Mimic"]}
{id: "30112", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30112.png", text:"Great Tree Alneu", cost:100000, materials: ["Bat Mimic", "Earth Idol"]}
{id: "30113", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30113.png", text:"World Tree Altro", cost:200000, materials: ["Earth Totem", "Bat Mimic", "Mimic", "Earth Spirit", "Earth Nymph"]}
{id: "30114", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30114.png", text:"God Tree Eltri", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Dragon Mimic", "Earth Spirit", "Earth Nymph"]}
{id: "30122", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30122.png", text:"Gunner Douglas", cost:100000, materials: ["Earth Idol", "Earth Spirit", "Earth Spirit", "Earth Spirit"]}
{id: "30123", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30123.png", text:"Gun King Douglas", cost:200000, materials: ["Earth Totem", "Earth Idol", "Bat Mimic", "Earth Nymph", "Earth Nymph"]}
{id: "30124", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30124.png", text:"Gun God Douglas", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Dragon Mimic", "Earth Idol", "Earth Pot"]}
{id: "30141", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30141.png", text:"Boxer Nemia", cost:50000, materials: ["Earth Nymph", "Earth Nymph", "Earth Nymph", "Earth Spirit", "Mimic"]}
{id: "30142", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30142.png", text:"Brawler Nemia", cost:100000, materials: ["Earth Idol", "Bat Mimic", "Earth Nymph", "Earth Spirit", "Earth Spirit"]}
{id: "30143", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30143.png", text:"Gaia Fist Nemia", cost:200000, materials: ["Earth Totem", "Earth Pot", "Bat Mimic", "Earth Spirit", "Earth Nymph"]}
{id: "30144", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30144.png", text:"Quake Fist Nemia", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Dragon Mimic", "Dragon Mimic"]}
{id: "30152", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30152.png", text:"Pixy Leore", cost:100000, materials: ["Earth Idol", "Earth Nymph", "Earth Nymph", "Mimic"]}
{id: "30153", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30153.png", text:"Pixy Royal Leore", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Nymph", "Bat Mimic", "Mimic"]}
{id: "30154", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30154.png", text:"Pixy King Leore", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Dragon Mimic", "Bat Mimic", "Earth Pot"]}
{id: "30162", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30162.png", text:"Edea", cost:100000, materials: ["Earth Idol", "Earth Nymph", "Earth Nymph", "Earth Spirit"]}
{id: "30163", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30163.png", text:"Earth Knight Edea", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Idol", "Bat Mimic", "Bat Mimic"]}
{id: "30164", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30164.png", text:"Mother Earth Edea", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Dragon Mimic", "Dragon Mimic", "Earth Idol"]}
{id: "30171", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30171.png", text:"Dwarf", cost:50000, materials: ["Earth Spirit", "Mimic"]}
{id: "30181", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30181.png", text:"Poet Elton", cost:50000, materials: ["Earth Spirit", "Earth Nymph"]}
{id: "30202", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30202.png", text:"Earth Ghost", cost:1000, materials: ["Fire Ghost", "Water Ghost", "Thunder Ghost", "Light Ghost", "Metal Ghost"]}
{id: "30212", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30212.png", text:"Twins Il & Mina", cost:100000, materials: ["Earth Idol", "Earth Spirit", "Earth Spirit", "Earth Nymph"]}
{id: "30213", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30213.png", text:"Earthly Il & Mina", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Idol", "Bat Mimic", "Bat Mimic"]}
{id: "30214", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30214.png", text:"Gemini Il & Mina", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Totem", "Earth Idol", "Dragon Mimic"]}
{id: "30222", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30222.png", text:"Ristrall", cost:100000, materials: ["Earth Idol", "Earth Idol", "Earth Spirit", "Bat Mimic", "Mimic"]}
{id: "30233", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30233.png", text:"Lugina", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Idol", "Earth Pot", "Earth Pot"]}
{id: "30243", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30243.png", text:"Paula", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Spirit", "Earth Pot", "Dark Pot"]}
{id: "30244", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30244.png", text:"Rose Sibyl Paula", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Water Pot", "Dark Pot"]}
{id: "30253", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30253.png", text:"Scar Blade Zelban", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Idol", "Earth Pot", "Bat Mimic"]}
{id: "30254", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30254.png", text:"Blade Hero Zelban", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Totem", "Earth Pot", "Dragon Mimic"]}
{id: "30261", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30261.png", text:"Grove Fairy Tinpall", cost:50000, materials: ["Earth Spirit", "Earth Nymph", "Mimic", "Bat Mimic"]}
{id: "30273", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30273.png", text:"Golem", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Idol", "Earth Pot", "Earth Pot"]}
{id: "30274", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30274.png", text:"Great Golem", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Metal Mimic", "Earth Idol", "Earth Pot"]}
{id: "30283", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30283.png", text:"Pugilist Dilma", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Pot", "Earth Spirit", "Earth Nymph"]}
{id: "30284", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30284.png", text:"Champ Fist Dilma", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Idol", "Earth Idol", "Metal Mimic"]}
{id: "30293", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30293.png", text:"Lawful Warrior Aneil", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Pot", "Earth Idol", "Dragon Mimic"]}
{id: "30313", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30313.png", text:"Havoc Girl Luly", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Idol", "Earth Pot", "Earth Pot"]}
{id: "30314", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30314.png", text:"Havoc Queen Luly", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Earth Pot", "Metal Mimic"]}
{id: "30343", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30343.png", text:"Battle Girl Ophelia", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Idol", "Earth Pot", "Earth Pot"]}
{id: "30344", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30344.png", text:"War Girl Ophelia", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Earth Pot", "Metal Mimic"]}
{id: "30353", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30353.png", text:"Iron Shield Darvan", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Earth Idol", "Bat Mimic"]}
{id: "30354", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30354.png", text:"Steel Shield Darvan", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Earth Pot", "Metal Mimic"]}
{id: "30423", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30423.png", text:"Nalmika", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Pot", "Earth Idol", "Dragon Mimic"]}
{id: "30424", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30424.png", text:"Ivy Nalmika", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "30443", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30443.png", text:"Great Thief Zelnite", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "30444", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30444.png", text:"Noble Thief Zelnite", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Dragon Mimic", "Dragon Mimic", "Metal Mimic"]}
{id: "30463", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30463.png", text:"Flora Princess Faris", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "30464", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30464.png", text:"Flora Queen Faris", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "30473", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30473.png", text:"Forest Guardian Tia", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Earth Idol", "Dragon Mimic"]}
{id: "30474", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30474.png", text:"Divine Guardian Tia", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Dragon Mimic", "Metal Mimic"]}
{id: "30493", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30493.png", text:"Diva Hatsune Miku", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Earth Idol", "Dragon Mimic"]}
{id: "30503", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30503.png", text:"Spirit Ruler Lucca", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Dragon Mimic", "Dragon Mimic"]}
{id: "30504", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30504.png", text:"Phantom Ruler Lucca", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Water Totem", "Earth Pot", "Metal Mimic"]}
{id: "30513", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30513.png", text:"Green Dragon Vael", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Idol", "Earth Idol", "Dragon Mimic"]}
{id: "30514", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30514.png", text:"Royal Dragon Farvnil", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Pot", "Earth Pot", "Metal Mimic"]}
{id: "30543", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30543.png", text:"Floret Petal Rosetta", cost:200000, materials: ["Earth Totem", "Earth Pot", "Earth Pot", "Earth Idol", "Dragon Mimic"]}
{id: "30544", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30544.png", text:"Floret Queen Rosetta", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Totem", "Earth Pot", "Metal Mimic"]}
{id: "30554", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30554.png", text:"Thorned Tora", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Earth Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "30555", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30555.png", text:"Vine Queen Tora", cost:1500000, materials: ["Earth Mecha God", "Miracle Totem", "Earth Totem", "Metal Mimic", "Metal Mimic"]}
{id: "30564", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30564.png", text:"Beryl Edge Quaid", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Dragon Mimic", "Metal Mimic", "Earth Pot"]}
{id: "30565", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_30565.png", text:"Valiant Edge Quaid", cost:1500000, materials: ["Earth Mecha God", "Miracle Totem", "Earth Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "40011", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40011.png", text:"Warrior Eze", cost:2500, materials: ["Thunder Nymph"]}
{id: "40012", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40012.png", text:"Thunder Eze", cost:100000, materials: ["Thunder Idol", "Thunder Spirit"]}
{id: "40013", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40013.png", text:"Thunder King Eze", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Spirit", "Thunder Nymph", "Thunder Nymph"]}
{id: "40014", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40014.png", text:"Thunder God Eze", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Idol", "Thunder Spirit", "Thunder Nymph"]}
{id: "40015", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40015.png", text:"Holy Thunder Eze", cost:1500000, materials: ["Thunder Mecha God", "Miracle Totem", "Thunder Totem", "Thunder Idol", "110100"]}
{id: "40021", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40021.png", text:"Advisor Weiss", cost:50000, materials: ["Thunder Nymph", "Thunder Nymph", "Thunder Spirit"]}
{id: "40022", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40022.png", text:"Strategist Weiss", cost:100000, materials: ["Thunder Idol", "Thunder Spirit", "Thunder Nymph", "Thunder Nymph"]}
{id: "40023", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40023.png", text:"Commander Weiss", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Thunder Idol", "Thunder Nymph"]}
{id: "40024", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40024.png", text:"General Weiss", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Idol", "Dragon Mimic", "Metal Mimic"]}
{id: "40030", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40030.png", text:"Sparky", cost:1000, materials: ["Thunder Nymph"]}
{id: "40040", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40040.png", text:"Dancer May", cost:5000, materials: ["Thunder Nymph"]}
{id: "40041", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40041.png", text:"High Dancer May", cost:50000, materials: ["Thunder Spirit", "Thunder Nymph"]}
{id: "40050", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40050.png", text:"Harpy", cost:2500, materials: ["Mimic"]}
{id: "40051", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40051.png", text:"Aero", cost:50000, materials: ["Thunder Spirit", "Mimic", "Mimic"]}
{id: "40061", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40061.png", text:"Sky Pirate Grafl", cost:50000, materials: ["Thunder Nymph", "Thunder Nymph", "Thunder Spirit"]}
{id: "40062", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40062.png", text:"Sky Boss Grafl", cost:100000, materials: ["Thunder Idol", "Thunder Nymph", "Mimic", "Mimic"]}
{id: "40071", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40071.png", text:"Minotaur", cost:50000, materials: ["Thunder Nymph", "Mimic", "Mimic"]}
{id: "40072", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40072.png", text:"Cyclops", cost:100000, materials: ["Thunder Spirit", "Thunder Spirit", "Mimic", "Bat Mimic"]}
{id: "40081", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40081.png", text:"Sylph", cost:50000, materials: ["Thunder Nymph", "Thunder Spirit", "Mimic"]}
{id: "40082", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40082.png", text:"Djin", cost:100000, materials: ["Thunder Idol", "Thunder Spirit", "Thunder Nymph", "Mimic"]}
{id: "40092", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40092.png", text:"Thunderbird", cost:100000, materials: ["Bat Mimic", "Thunder Spirit", "Thunder Spirit", "Thunder Spirit"]}
{id: "40093", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40093.png", text:"Great Falcon Ziz", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Spirit", "Thunder Nymph", "Bat Mimic"]}
{id: "40094", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40094.png", text:"Zazabis", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Thunder Idol", "Metal Mimic"]}
{id: "40102", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40102.png", text:"Sky Knight Falma", cost:100000, materials: ["Bat Mimic", "Thunder Idol", "Thunder Spirit"]}
{id: "40103", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40103.png", text:"Sky King Falma", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Thunder Nymph", "Thunder Nymph"]}
{id: "40104", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40104.png", text:"Sky Legend Falma", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Thunder Idol", "Metal Mimic"]}
{id: "40112", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40112.png", text:"Behemoth", cost:100000, materials: ["Bat Mimic", "Thunder Idol"]}
{id: "40113", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40113.png", text:"King Behemoth", cost:200000, materials: ["Thunder Totem", "Bat Mimic", "Mimic", "Thunder Spirit", "Thunder Nymph"]}
{id: "40114", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40114.png", text:"Alpha Behemoth", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Dragon Mimic", "Thunder Spirit", "Thunder Nymph"]}
{id: "40122", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40122.png", text:"Emilia", cost:100000, materials: ["Thunder Idol", "Thunder Spirit", "Thunder Spirit", "Thunder Spirit"]}
{id: "40123", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40123.png", text:"Princess Emilia", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Bat Mimic", "Thunder Nymph", "Thunder Nymph"]}
{id: "40124", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40124.png", text:"Goddess Emilia", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Dragon Mimic", "Thunder Idol", "Thunder Pot"]}
{id: "40141", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40141.png", text:"Zeln", cost:50000, materials: ["Thunder Spirit", "Thunder Nymph", "Thunder Nymph", "Thunder Nymph", "Mimic"]}
{id: "40142", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40142.png", text:"Spark Kick Zeln", cost:100000, materials: ["Thunder Idol", "Bat Mimic", "Thunder Spirit", "Thunder Nymph", "Thunder Nymph"]}
{id: "40143", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40143.png", text:"Thunder Kick Zeln", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Bat Mimic", "Thunder Spirit", "Thunder Nymph"]}
{id: "40144", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40144.png", text:"Thunder Punt Zeln", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Dragon Mimic", "Dragon Mimic"]}
{id: "40152", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40152.png", text:"Tinkerer Elulu", cost:100000, materials: ["Thunder Idol", "Thunder Nymph", "Thunder Nymph", "Mimic"]}
{id: "40153", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40153.png", text:"Inventor Elulu", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Nymph", "Bat Mimic", "Mimic"]}
{id: "40154", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40154.png", text:"Bolt Mallet Elulu", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Dragon Mimic", "Bat Mimic", "Thunder Pot"]}
{id: "40162", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40162.png", text:"Loch", cost:100000, materials: ["Thunder Idol", "Thunder Nymph", "Thunder Nymph", "Thunder Spirit"]}
{id: "40163", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40163.png", text:"Shock Bow Loch", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Idol", "Bat Mimic", "Bat Mimic"]}
{id: "40164", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40164.png", text:"Zeus Bow Loch", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Dragon Mimic", "Dragon Mimic", "Thunder Idol"]}
{id: "40171", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40171.png", text:"Empusa", cost:50000, materials: ["Thunder Spirit", "Mimic"]}
{id: "40181", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40181.png", text:"Wild Cat Parmi", cost:50000, materials: ["Thunder Spirit", "Thunder Nymph"]}
{id: "40202", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40202.png", text:"Thunder Ghost", cost:1000, materials: ["Fire Ghost", "Water Ghost", "Earth Ghost", "Light Ghost", "Metal Ghost"]}
{id: "40212", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40212.png", text:"Bolt Pike Amy", cost:100000, materials: ["Thunder Idol", "Thunder Spirit", "Thunder Spirit", "Thunder Nymph"]}
{id: "40213", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40213.png", text:"Bolt Knight Amy", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Idol", "Bat Mimic", "Bat Mimic"]}
{id: "40214", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40214.png", text:"Bolt Goddess Amy", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Totem", "Thunder Idol", "Dragon Mimic"]}
{id: "40222", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40222.png", text:"Raiden", cost:100000, materials: ["Thunder Idol", "Thunder Idol", "Thunder Spirit", "Bat Mimic", "Mimic"]}
{id: "40233", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40233.png", text:"Paladin Paris", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Idol", "Thunder Pot", "Thunder Pot"]}
{id: "40243", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40243.png", text:"Zele", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Spirit", "Thunder Pot", "Light Pot"]}
{id: "40244", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40244.png", text:"Bolt Sibyl Zele", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Fire Pot", "Light Pot"]}
{id: "40253", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40253.png", text:"Drakeborn Lodin", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Idol", "Thunder Pot", "Bat Mimic"]}
{id: "40254", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40254.png", text:"Drake God Lodin", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Totem", "Thunder Pot", "Dragon Mimic"]}
{id: "40261", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40261.png", text:"Cockatrice", cost:50000, materials: ["Thunder Spirit", "Thunder Nymph", "Mimic", "Bat Mimic"]}
{id: "40273", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40273.png", text:"Sky Angel Kushra", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Idol", "Thunder Pot", "Thunder Pot"]}
{id: "40274", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40274.png", text:"Rebel Angel Elsel", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Metal Mimic", "Thunder Idol", "Thunder Pot"]}
{id: "40283", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40283.png", text:"Shock Mage Rashil", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Pot", "Thunder Spirit", "Thunder Nymph"]}
{id: "40284", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40284.png", text:"Bolt Magus Rashil", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Idol", "Thunder Idol", "Metal Mimic"]}
{id: "40293", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40293.png", text:"Fast Princess Lucana", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Pot", "Thunder Idol", "Dragon Mimic"]}
{id: "40313", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40313.png", text:"Gold Warrior Rina", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Idol", "Thunder Pot", "Thunder Pot"]}
{id: "40314", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40314.png", text:"Gold Knight Rina", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Thunder Pot", "Metal Mimic"]}
{id: "40343", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40343.png", text:"Mech Arms Grybe", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Idol", "Thunder Pot", "Thunder Pot"]}
{id: "40344", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40344.png", text:"Mech Cannon Grybe", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Thunder Pot", "Metal Mimic"]}
{id: "40353", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40353.png", text:"Sage Bran", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Thunder Idol", "Bat Mimic"]}
{id: "40354", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40354.png", text:"Lightning Sage Bran", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Thunder Pot", "Metal Mimic"]}
{id: "40423", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40423.png", text:"Uda", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Pot", "Thunder Idol", "Dragon Mimic"]}
{id: "40424", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40424.png", text:"Crusher Uda", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "40443", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40443.png", text:"Thunder Beast Ahvel", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "40444", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40444.png", text:"Thunder God Esna", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Dragon Mimic", "Dragon Mimic", "Metal Mimic"]}
{id: "40463", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40463.png", text:"Lead Engineer Garnan", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "40464", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40464.png", text:"Head Engineer Garnan", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "40473", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40473.png", text:"Bolt Gun Rowgen", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Thunder Idol", "Dragon Mimic"]}
{id: "40474", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40474.png", text:"Thunder Gun Rowgen", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Dragon Mimic", "Metal Mimic"]}
{id: "40493", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40493.png", text:"Thunder Whip Orna", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Dragon Mimic", "Dragon Mimic"]}
{id: "40494", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40494.png", text:"Divine Whip Orna", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Fire Totem", "Thunder Pot", "Metal Mimic"]}
{id: "40503", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40503.png", text:"Thunder Guard Shera", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Thunder Idol", "Dragon Mimic"]}
{id: "40504", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40504.png", text:"Thunder Sentry Shera", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Pot", "Thunder Pot", "Metal Mimic"]}
{id: "40523", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40523.png", text:"Dragoon Elder Bargus", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Pot", "Thunder Idol", "Dragon Mimic"]}
{id: "40524", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40524.png", text:"Dragoon Lord Bargus", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Totem", "Thunder Pot", "Metal Mimic"]}
{id: "40534", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40534.png", text:"Admonition Kanon", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "40535", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40535.png", text:"Righteous King Kanon", cost:1500000, materials: ["Thunder Mecha God", "Miracle Totem", "Thunder Totem", "Metal Mimic", "Metal Mimic"]}
{id: "40544", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40544.png", text:"Voltage Cutlass Diana", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Dragon Mimic", "Metal Mimic", "Thunder Pot"]}
{id: "40545", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_40545.png", text:"Rumbling Cutlass Diana", cost:1500000, materials: ["Thunder Mecha God", "Miracle Totem", "Thunder Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "50011", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50011.png", text:"Squire Atro", cost:50000, materials: ["Light Nymph"]}
{id: "50012", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50012.png", text:"Knight Atro", cost:100000, materials: ["Light Idol", "Light Spirit"]}
{id: "50013", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50013.png", text:"Holy Knight Atro", cost:200000, materials: ["Light Totem", "Light Idol", "Light Spirit", "Light Nymph", "Light Nymph"]}
{id: "50014", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50014.png", text:"God Atro", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Idol", "Light Spirit", "Light Nymph"]}
{id: "50015", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50015.png", text:"Holy Light Atro", cost:1500000, materials: ["Light Mecha God", "Miracle Totem", "Light Totem", "Light Idol", "110100"]}
{id: "50021", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50021.png", text:"Luna", cost:50000, materials: ["Light Nymph", "Light Nymph", "Light Spirit"]}
{id: "50022", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50022.png", text:"Sunshine Luna", cost:100000, materials: ["Light Idol", "Light Spirit", "Light Nymph", "Light Nymph"]}
{id: "50023", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50023.png", text:"Holy Queen Luna", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Light Idol", "Light Nymph"]}
{id: "50024", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50024.png", text:"Holy Empress Luna", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Idol", "Dragon Mimic", "Metal Mimic"]}
{id: "50030", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50030.png", text:"Glowy", cost:1000, materials: ["Light Nymph"]}
{id: "50040", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50040.png", text:"Sage Mimir", cost:3000, materials: ["Light Nymph"]}
{id: "50041", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50041.png", text:"Light Lord Mimir", cost:50000, materials: ["Light Spirit", "Light Nymph"]}
{id: "50050", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50050.png", text:"Angel", cost:5000, materials: ["Mimic"]}
{id: "50051", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50051.png", text:"Archangel", cost:50000, materials: ["Light Spirit", "Mimic", "Mimic"]}
{id: "50060", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50060.png", text:"Unicorn", cost:50000, materials: ["Light Nymph", "Mimic", "Mimic"]}
{id: "50061", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50061.png", text:"Pegasus", cost:100000, materials: ["Light Spirit", "Light Spirit", "Mimic", "Bat Mimic"]}
{id: "50071", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50071.png", text:"Priestess Maria", cost:50000, materials: ["Light Nymph", "Light Spirit", "Mimic"]}
{id: "50072", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50072.png", text:"Angel Maria", cost:100000, materials: ["Light Idol", "Light Spirit", "Light Nymph", "Mimic"]}
{id: "50082", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50082.png", text:"Valkyrie", cost:100000, materials: ["Bat Mimic", "Light Spirit", "Light Spirit", "Light Spirit"]}
{id: "50083", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50083.png", text:"Sky Hero Athena", cost:200000, materials: ["Light Totem", "Light Idol", "Light Spirit", "Light Nymph", "Bat Mimic"]}
{id: "50084", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50084.png", text:"Legendary Jona ", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Light Idol", "Metal Mimic"]}
{id: "50092", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50092.png", text:"Cowboy Heidt", cost:100000, materials: ["Bat Mimic", "Light Idol", "Light Spirit"]}
{id: "50093", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50093.png", text:"Holy Shot Heidt", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Light Nymph", "Light Nymph"]}
{id: "50094", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50094.png", text:"Pistol God Heidt", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Light Idol", "Metal Mimic"]}
{id: "50102", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50102.png", text:"Wyvern", cost:100000, materials: ["Bat Mimic", "Light Idol"]}
{id: "50103", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50103.png", text:"Bahamut", cost:200000, materials: ["Light Totem", "Bat Mimic", "Mimic", "Light Spirit", "Light Nymph"]}
{id: "50104", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50104.png", text:"Rameldria", cost:500000, materials: ["Miracle Totem", "Light Totem", "Dragon Mimic", "Light Spirit", "Light Nymph"]}
{id: "50112", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50112.png", text:"Knight Will", cost:100000, materials: ["Light Idol", "Light Spirit", "Light Spirit", "Light Spirit"]}
{id: "50113", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50113.png", text:"Holy Knight Will", cost:200000, materials: ["Light Totem", "Light Idol", "Bat Mimic", "Light Nymph", "Light Nymph"]}
{id: "50114", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50114.png", text:"God Knight Will", cost:500000, materials: ["Miracle Totem", "Light Totem", "Dragon Mimic", "Light Idol", "Light Pot"]}
{id: "50141", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50141.png", text:"Traveler Alma", cost:50000, materials: ["Light Spirit", "Light Nymph", "Light Nymph", "Light Nymph", "Mimic"]}
{id: "50142", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50142.png", text:"Adventurer Alma", cost:100000, materials: ["Light Idol", "Bat Mimic", "Light Spirit", "Light Nymph", "Light Nymph"]}
{id: "50143", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50143.png", text:"Hero Alma", cost:200000, materials: ["Light Totem", "Light Pot", "Bat Mimic", "Light Spirit", "Light Nymph"]}
{id: "50144", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50144.png", text:"Brave Hero Alma", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Dragon Mimic", "Dragon Mimic"]}
{id: "50152", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50152.png", text:"Knight Aem", cost:100000, materials: ["Light Idol", "Light Nymph", "Light Nymph", "Mimic"]}
{id: "50153", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50153.png", text:"Champion Aem", cost:200000, materials: ["Light Totem", "Light Idol", "Light Nymph", "Bat Mimic", "Mimic"]}
{id: "50154", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50154.png", text:"Holy Master Aem", cost:500000, materials: ["Miracle Totem", "Light Totem", "Dragon Mimic", "Bat Mimic", "Light Pot"]}
{id: "50162", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50162.png", text:"Eight Blade Sefia", cost:100000, materials: ["Light Idol", "Light Spirit", "Light Spirit", "Light Nymph"]}
{id: "50163", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50163.png", text:"Blade Storm Sefia", cost:200000, materials: ["Light Totem", "Light Idol", "Light Idol", "Bat Mimic", "Bat Mimic"]}
{id: "50164", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50164.png", text:"Blade Queen Sefia", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Totem", "Light Idol", "Dragon Mimic"]}
{id: "50171", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50171.png", text:"Al-mi'raj", cost:50000, materials: ["Light Spirit", "Mimic"]}
{id: "50181", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50181.png", text:"Shrine Girl Amul", cost:50000, materials: ["Light Spirit", "Light Nymph"]}
{id: "50202", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50202.png", text:"Light Ghost", cost:1000, materials: ["Fire Ghost", "Water Ghost", "Earth Ghost", "Thunder Ghost", "Metal Ghost"]}
{id: "50223", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50223.png", text:"Star Prince Nekky", cost:200000, materials: ["Light Totem", "Light Idol", "Light Spirit", "Bat Mimic", "Mimic"]}
{id: "50242", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50242.png", text:"Mila", cost:100000, materials: ["Light Idol", "Light Idol", "Light Spirit", "Bat Mimic", "Mimic"]}
{id: "50253", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50253.png", text:"Tilith", cost:200000, materials: ["Light Totem", "Light Idol", "Light Spirit", "Light Nymph", "Light Pot"]}
{id: "50263", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50263.png", text:"Sola", cost:200000, materials: ["Light Totem", "Light Idol", "Light Spirit", "Fire Pot", "Thunder Pot"]}
{id: "50264", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50264.png", text:"Ray Sibyl Sola", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Fire Pot", "Thunder Pot"]}
{id: "50273", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50273.png", text:"Legionary Melchio", cost:200000, materials: ["Light Totem", "Light Idol", "Light Idol", "Light Pot", "Bat Mimic"]}
{id: "50274", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50274.png", text:"Centurion Melchio", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Totem", "Light Pot", "Dragon Mimic"]}
{id: "50291", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50291.png", text:"GS-200", cost:50000, materials: ["Light Spirit", "Light Nymph", "Mimic", "Bat Mimic"]}
{id: "50303", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50303.png", text:"White Lebra", cost:200000, materials: ["Light Totem", "Light Idol", "Light Idol", "Light Pot", "Light Pot"]}
{id: "50304", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50304.png", text:"Lubradine", cost:500000, materials: ["Miracle Totem", "Light Totem", "Metal Mimic", "Light Idol", "Light Pot"]}
{id: "50313", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50313.png", text:"Cyborg Lilith", cost:200000, materials: ["Light Totem", "Light Idol", "Light Pot", "Light Spirit", "Light Nymph"]}
{id: "50314", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50314.png", text:"Cyborg Lilith II", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Idol", "Light Idol", "Metal Mimic"]}
{id: "50323", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50323.png", text:"Heavy Guard Nevsky", cost:200000, materials: ["Light Totem", "Light Pot", "Light Pot", "Light Idol", "Dragon Mimic"]}
{id: "50383", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50383.png", text:"Horseman Sodis", cost:200000, materials: ["Light Totem", "Light Idol", "Light Idol", "Light Pot", "Light Pot"]}
{id: "50384", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50384.png", text:"Cavalryman Sodis", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Light Pot", "Metal Mimic"]}
{id: "50403", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50403.png", text:"Light Blade Alyut", cost:200000, materials: ["Light Totem", "Light Idol", "Light Idol", "Light Pot", "Light Pot"]}
{id: "50404", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50404.png", text:"Holy Warrior Alyut", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Light Pot", "Metal Mimic"]}
{id: "50413", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50413.png", text:"Prodigy Themis", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Light Idol", "Bat Mimic"]}
{id: "50414", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50414.png", text:"Unflinching Themis", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Light Pot", "Metal Mimic"]}
{id: "50473", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50473.png", text:"Zellha", cost:200000, materials: ["Light Totem", "Light Pot", "Light Pot", "Light Idol", "Dragon Mimic"]}
{id: "50474", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50474.png", text:"Ruin Zellha", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "50483", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50483.png", text:"Dark Angel Azael", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "50484", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50484.png", text:"Wisdom Angel Azael", cost:500000, materials: ["Miracle Totem", "Light Totem", "Dragon Mimic", "Dragon Mimic", "Metal Mimic"]}
{id: "50503", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50503.png", text:"Brave Legend Hogar", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "50504", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50504.png", text:"Brave King Hogar", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "50513", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50513.png", text:"Mad Knight Narza", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Light Idol", "Dragon Mimic"]}
{id: "50514", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50514.png", text:"Mad King Narza", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Dragon Mimic", "Metal Mimic"]}
{id: "50563", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50563.png", text:"Deemo and the Girl", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Light Spirit", "Bat Mimic"]}
{id: "50583", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50583.png", text:"Holy Treasures Yujeh", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Dragon Mimic", "Dragon Mimic"]}
{id: "50584", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50584.png", text:"Sacred Relics Yujeh", cost:500000, materials: ["Miracle Totem", "Light Totem", "Dark Totem", "Light Pot", "Metal Mimic"]}
{id: "50603", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50603.png", text:"Royal Edge Priscilla", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Light Idol", "Dragon Mimic"]}
{id: "50604", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50604.png", text:"Poinsettia Priscilla", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Pot", "Light Pot", "Metal Mimic"]}
{id: "50643", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50643.png", text:"Priestess Elmedia", cost:200000, materials: ["Light Totem", "Light Pot", "Light Pot", "Light Idol", "Dragon Mimic"]}
{id: "50644", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50644.png", text:"High Priestess Elmedia", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Totem", "Light Pot", "Metal Mimic"]}
{id: "50654", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50654.png", text:"Larking Kira", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "50655", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50655.png", text:"Cavorting King Kira", cost:1500000, materials: ["Light Mecha God", "Miracle Totem", "Light Totem", "Metal Mimic", "Metal Mimic"]}
{id: "50664", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50664.png", text:"Noble Sage Fadahl", cost:500000, materials: ["Miracle Totem", "Light Totem", "Dragon Mimic", "Metal Mimic", "Light Pot"]}
{id: "50665", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_50665.png", text:"Sage King Fadahl", cost:1500000, materials: ["Light Mecha God", "Miracle Totem", "Light Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "60011", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60011.png", text:"Iron Magress", cost:50000, materials: ["Dark Nymph"]}
{id: "60012", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60012.png", text:"Heavy Magress", cost:100000, materials: ["Dark Idol", "Dark Spirit"]}
{id: "60013", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60013.png", text:"Black Magress", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Spirit", "Dark Nymph", "Dark Nymph"]}
{id: "60014", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60014.png", text:"Death Magress", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Idol", "Dark Spirit", "Dark Nymph"]}
{id: "60015", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60015.png", text:"Unholy Magress", cost:1500000, materials: ["Dark Mecha God", "Miracle Totem", "Dark Totem", "Dark Idol", "110100"]}
{id: "60021", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60021.png", text:"Mifune", cost:50000, materials: ["Dark Nymph", "Dark Nymph", "Dark Spirit"]}
{id: "60022", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60022.png", text:"Samurai Mifune", cost:100000, materials: ["Dark Idol", "Dark Spirit", "Dark Nymph", "Dark Nymph"]}
{id: "60023", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60023.png", text:"God Blade Mifune", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dark Idol", "Dark Nymph"]}
{id: "60024", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60024.png", text:"Ryujin Mifune", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Idol", "Dragon Mimic", "Metal Mimic"]}
{id: "60030", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60030.png", text:"Gloomy", cost:1000, materials: ["Dark Nymph"]}
{id: "60040", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60040.png", text:"Sorceress Lily", cost:5000, materials: ["Dark Nymph"]}
{id: "60041", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60041.png", text:"Magician Lily", cost:50000, materials: ["Dark Spirit", "Dark Nymph"]}
{id: "60050", stars:"*", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60050.png", text:"Skeleton", cost:2500, materials: ["Mimic"]}
{id: "60051", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60051.png", text:"Skeleton King", cost:50000, materials: ["Dark Spirit", "Mimic", "Mimic"]}
{id: "60061", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60061.png", text:"Medusa", cost:50000, materials: ["Dark Nymph", "Mimic", "Mimic"]}
{id: "60062", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60062.png", text:"Zahhak", cost:100000, materials: ["Dark Spirit", "Dark Spirit", "Mimic", "Bat Mimic"]}
{id: "60071", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60071.png", text:"Lilin", cost:50000, materials: ["Dark Nymph", "Dark Spirit", "Mimic"]}
{id: "60072", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60072.png", text:"Succubus", cost:100000, materials: ["Dark Idol", "Dark Spirit", "Dark Nymph", "Mimic"]}
{id: "60082", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60082.png", text:"Vampire", cost:100000, materials: ["Bat Mimic", "Dark Spirit", "Dark Spirit", "Dark Spirit"]}
{id: "60083", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60083.png", text:"Lich", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Spirit", "Dark Nymph", "Bat Mimic"]}
{id: "60084", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60084.png", text:"Legion", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dark Idol", "Metal Mimic"]}
{id: "60092", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60092.png", text:"Shida", cost:100000, materials: ["Bat Mimic", "Dark Idol", "Dark Spirit"]}
{id: "60093", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60093.png", text:"Garroter Shida", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dark Nymph", "Dark Nymph"]}
{id: "60094", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60094.png", text:"Executioner Shida", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dark Idol", "Metal Mimic"]}
{id: "60102", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60102.png", text:"Memetes", cost:100000, materials: ["Bat Mimic", "Dark Idol"]}
{id: "60103", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60103.png", text:"Hell King Hades", cost:200000, materials: ["Dark Totem", "Bat Mimic", "Mimic", "Dark Spirit", "Dark Nymph"]}
{id: "60104", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60104.png", text:"Death God Lodaga", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dragon Mimic", "Dark Spirit", "Dark Nymph"]}
{id: "60112", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60112.png", text:"Alice", cost:100000, materials: ["Dark Idol", "Dark Spirit", "Dark Spirit", "Dark Spirit"]}
{id: "60113", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60113.png", text:"Scythe Alice", cost:200000, materials: ["Dark Totem", "Dark Idol", "Bat Mimic", "Dark Nymph", "Dark Nymph"]}
{id: "60114", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60114.png", text:"Scythe God Alice", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dragon Mimic", "Dark Idol", "Dark Pot"]}
{id: "60132", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60132.png", text:"Metal Ghost", cost:1000, materials: ["Fire Ghost", "Water Ghost", "Earth Ghost", "Thunder Ghost", "Light Ghost"]}
{id: "60143", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60143.png", text:"Bat Mimic", cost:200000, materials: ["Metal God", "Metal King", "Metal Ghost"]}
{id: "60151", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60151.png", text:"Ninja Oboro", cost:50000, materials: ["Dark Spirit", "Dark Nymph", "Dark Nymph", "Dark Nymph", "Mimic"]}
{id: "60152", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60152.png", text:"Assassin Oboro", cost:100000, materials: ["Dark Idol", "Bat Mimic", "Dark Spirit", "Dark Nymph", "Dark Nymph"]}
{id: "60153", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60153.png", text:"Shadow Oboro", cost:200000, materials: ["Dark Totem", "Dark Pot", "Bat Mimic", "Dark Spirit", "Dark Nymph"]}
{id: "60154", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60154.png", text:"Red Shadow Oboro", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dragon Mimic", "Dragon Mimic"]}
{id: "60162", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60162.png", text:"Lemia", cost:100000, materials: ["Dark Idol", "Dark Nymph", "Dark Nymph", "Mimic"]}
{id: "60163", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60163.png", text:"Necromancer Lemia", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Nymph", "Bat Mimic", "Mimic"]}
{id: "60164", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60164.png", text:"Soul Keeper Lemia", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dragon Mimic", "Bat Mimic", "Dark Pot"]}
{id: "60172", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60172.png", text:"Kikuri", cost:100000, materials: ["Dark Idol", "Dark Spirit", "Dark Spirit", "Dark Nymph"]}
{id: "60173", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60173.png", text:"Goth Kikuri", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Spirit", "Bat Mimic", "Bat Mimic"]}
{id: "60174", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60174.png", text:"Goth Idol Kikuri", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Totem", "Dark Idol", "Dragon Mimic"]}
{id: "60181", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60181.png", text:"Imp", cost:50000, materials: ["Dark Spirit", "Mimic"]}
{id: "60191", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60191.png", text:"Gambler Zeul", cost:50000, materials: ["Dark Spirit", "Dark Nymph"]}
{id: "60212", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60212.png", text:"Bahvel", cost:100000, materials: ["Dark Idol", "Dark Idol", "Dark Spirit", "Bat Mimic", "Mimic"]}
{id: "60233", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60233.png", text:"Disciple Zebra", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Idol", "Dark Pot", "Dark Pot"]}
{id: "60243", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60243.png", text:"Madia", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Spirit", "Water Pot", "Earth Pot"]}
{id: "60244", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60244.png", text:"Night Sibyl Madia", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Water Pot", "Earth Pot"]}
{id: "60253", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60253.png", text:"Duel-GX", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Idol", "Dark Pot", "Bat Mimic"]}
{id: "60254", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60254.png", text:"Duel-GX II", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Totem", "Dark Pot", "Dragon Mimic"]}
{id: "60261", stars:"**", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60261.png", text:"Dark Spider", cost:50000, materials: ["Dark Spirit", "Dark Nymph", "Mimic", "Bat Mimic"]}
{id: "60273", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60273.png", text:"Half Blood Lira", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Idol", "Dark Pot", "Dark Pot"]}
{id: "60274", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60274.png", text:"Magistra Lira", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Metal Mimic", "Dark Idol", "Dark Pot"]}
{id: "60283", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60283.png", text:"Dark Swords Logan", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Pot", "Dark Spirit", "Dark Nymph"]}
{id: "60284", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60284.png", text:"Evil Blades Logan", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Idol", "Dark Idol", "Metal Mimic"]}
{id: "60293", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60293.png", text:"Dual Blade Eru", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Pot", "Dark Idol", "Dragon Mimic"]}
{id: "60313", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60313.png", text:"Dark Charm Lunaris", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Idol", "Dark Pot", "Dark Pot"]}
{id: "60314", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60314.png", text:"Dark Curse Lunaris", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dark Pot", "Metal Mimic"]}
{id: "60353", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60353.png", text:"Dark Blade Zephyr", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Idol", "Dark Pot", "Dark Pot"]}
{id: "60354", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60354.png", text:"Dark Warrior Zephyr", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dark Pot", "Metal Mimic"]}
{id: "60363", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60363.png", text:"Magic Riffs Eric", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dark Idol", "Bat Mimic"]}
{id: "60364", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60364.png", text:"Dark Tunes Eric", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dark Pot", "Metal Mimic"]}
{id: "60473", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60473.png", text:"Kajah", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Pot", "Dark Idol", "Dragon Mimic"]}
{id: "60474", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60474.png", text:"Evil Kajah", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "60483", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60483.png", text:"Disciple Mare", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Idol", "Dark Pot", "Dark Pot"]}
{id: "60493", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60493.png", text:"Dictator Lilly Matah", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "60494", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60494.png", text:"Empress Lilly Matah", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dragon Mimic", "Dragon Mimic", "Metal Mimic"]}
{id: "60523", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60523.png", text:"Inferno Elza", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dragon Mimic", "Bat Mimic"]}
{id: "60524", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60524.png", text:"Inferno Queen Elza", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "60533", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60533.png", text:"Assassin Kuda", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dark Idol", "Dragon Mimic"]}
{id: "60534", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60534.png", text:"Loyal Assassin Kuda", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dragon Mimic", "Metal Mimic"]}
{id: "60543", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60543.png", text:"Disciple Zurg", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Pot", "Dark Pot", "Dark Pot"]}
{id: "60583", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60583.png", text:"Duetto Megurine Luka", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dark Idol", "Dragon Mimic"]}
{id: "60584", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60584.png", text:"Dolce Megurine Luka", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dark Tone", "Metal Mimic"]}
{id: "60593", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60593.png", text:"Dark Winged Ardin", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dragon Mimic", "Dragon Mimic"]}
{id: "60594", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60594.png", text:"Dark Seraph Ardin", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Light Totem", "Dark Pot", "Metal Mimic"]}
{id: "60623", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60623.png", text:"Dark Keeper Iidor", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Idol", "Dark Idol", "Dragon Mimic"]}
{id: "60624", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60624.png", text:"Draconian Varfed", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Pot", "Dark Pot", "Metal Mimic"]}
{id: "60643", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60643.png", text:"Dark Blades Zergel", cost:200000, materials: ["Dark Totem", "Dark Pot", "Dark Pot", "Dark Idol", "Dragon Mimic"]}
{id: "60644", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60644.png", text:"Penta Blade Zergel", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Totem", "Dark Pot", "Metal Mimic"]}
{id: "60664", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60664.png", text:"Misfortune Feeva", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "60665", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60665.png", text:"Devastation Queen Feeva", cost:1500000, materials: ["Dark Mecha God", "Miracle Totem", "Dark Totem", "Metal Mimic", "Metal Mimic"]}
{id: "60674", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60674.png", text:"Void Pearl Ivris", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dragon Mimic", "Metal Mimic", "Dark Pot"]}
{id: "60675", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_60675.png", text:"Nebula Pearl Ivris", cost:1500000, materials: ["Dark Mecha God", "Miracle Totem", "Dark Totem", "Dragon Mimic", "Metal Mimic"]}
{id: "810003", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810003.png", text:"Maiden Cayena", cost:100000, materials: ["Fire Idol", "Fire Idol", "Fire Spirit", "Fire Spirit", "Mimic"]}
{id: "810004", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810004.png", text:"Hot Rocket Cayena", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Idol", "Fire Spirit", "Bat Mimic"]}
{id: "810044", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810044.png", text:"Crimson Wing Blaze", cost:200000, materials: ["Fire Totem", "Fire Idol", "Fire Pot", "Miracle Bulb", "Fire Bulb"]}
{id: "810104", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810104.png", text:"Red Hood Ciara", cost:200000, materials: ["Fire Totem", "Fire Bulb", "Miracle Bulb", "Fire Idol", "Bat Mimic"]}
{id: "810105", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810105.png", text:"Scarlet Hood Ciara", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Bulb", "Fire Bulb", "Metal Mimic"]}
{id: "810114", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810114.png", text:"Nick", cost:200000, materials: ["Fire Totem", "Fire Bulb", "Miracle Bulb", "Fire Idol", "Dragon Mimic"]}
{id: "810115", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810115.png", text:"Furious Nick", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Bulb", "Fire Bulb", "Metal Mimic"]}
{id: "810124", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810124.png", text:"Cyclaw", cost:200000, materials: ["Fire Totem", "Fire Bulb", "Miracle Bulb", "Fire Idol", "Bat Mimic"]}
{id: "810134", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810134.png", text:"Ultor", cost:200000, materials: ["Fire Totem", "Fire Bulb", "Miracle Bulb", "Fire Idol", "Bat Mimic"]}
{id: "810135", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810135.png", text:"Valiant Ultor", cost:500000, materials: ["Turbo Cyclaw", "Fire Totem", "Fire Bulb", "Miracle Bulb", "Metal Mimic"]}
{id: "810204", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810204.png", text:"Meiko", cost:200000, materials: ["Fire Totem", "Fire Pot", "Fire Idol", "Fire Idol", "Dragon Mimic"]}
{id: "810205", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810205.png", text:"Cantata Meiko", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Fire Pot", "Fire Tone", "Metal Mimic"]}
{id: "810525", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810525.png", text:"Grandt", cost:500000, materials: ["Miracle Totem", "Fire Totem", "Dragon Mimic", "Fire Bulb", "880001"]}
{id: "810526", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_810526.png", text:"Mercenary Grandt", cost:1500000, materials: ["Fire Mecha God", "Miracle Totem", "Fire Totem", "Metal Mimic", "880011"]}
{id: "820003", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820003.png", text:"Maiden Serin", cost:100000, materials: ["Water Idol", "Water Idol", "Water Spirit", "Water Spirit", "Mimic"]}
{id: "820004", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820004.png", text:"Gun Lady Serin", cost:200000, materials: ["Water Totem", "Water Idol", "Water Idol", "Water Spirit", "Bat Mimic"]}
{id: "820114", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820114.png", text:"Jack", cost:200000, materials: ["Water Totem", "Water Bulb", "Miracle Bulb", "Water Idol", "Dragon Mimic"]}
{id: "820115", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820115.png", text:"Jack Frost", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Bulb", "Water Bulb", "Metal Mimic"]}
{id: "820124", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820124.png", text:"Hydraloid", cost:200000, materials: ["Water Totem", "Water Bulb", "Miracle Bulb", "Water Idol", "Bat Mimic"]}
{id: "820134", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820134.png", text:"Tridon", cost:200000, materials: ["Water Totem", "Water Bulb", "Miracle Bulb", "Water Idol", "Bat Mimic"]}
{id: "820135", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820135.png", text:"Merciless Tridon", cost:500000, materials: ["Turbo Hydraloid", "Water Totem", "Water Bulb", "Miracle Bulb", "Metal Mimic"]}
{id: "820204", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820204.png", text:"Kaito", cost:200000, materials: ["Water Totem", "Water Pot", "Water Idol", "Water Idol", "Dragon Mimic"]}
{id: "820205", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820205.png", text:"Sonata Kaito", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Pot", "Water Tone", "Metal Mimic"]}
{id: "820504", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820504.png", text:"Cursed Fei", cost:200000, materials: ["Water Totem", "Water Bulb", "Miracle Bulb", "Water Idol", "Dragon Mimic"]}
{id: "820505", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_820505.png", text:"Blighted Fei", cost:500000, materials: ["Miracle Totem", "Water Totem", "Water Totem", "Dark Bulb", "Metal Mimic"]}
{id: "830003", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830003.png", text:"Maiden Bayley", cost:100000, materials: ["Earth Idol", "Earth Idol", "Earth Spirit", "Earth Spirit", "Mimic"]}
{id: "830004", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830004.png", text:"Nyan Slash Bayley", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Idol", "Earth Spirit", "Bat Mimic"]}
{id: "830044", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830044.png", text:"Royal Wing Dranoel", cost:200000, materials: ["Earth Totem", "Earth Idol", "Earth Pot", "Miracle Bulb", "Earth Bulb"]}
{id: "830124", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830124.png", text:"Euryalis", cost:200000, materials: ["Earth Totem", "Earth Bulb", "Miracle Bulb", "Earth Idol", "Bat Mimic"]}
{id: "830134", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830134.png", text:"Andaria", cost:200000, materials: ["Earth Totem", "Earth Bulb", "Miracle Bulb", "Earth Idol", "Bat Mimic"]}
{id: "830135", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830135.png", text:"Swiftshot Andaria", cost:500000, materials: ["Turbo Euryalis", "Earth Totem", "Earth Bulb", "Miracle Bulb", "Metal Mimic"]}
{id: "830504", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830504.png", text:"Huntress Fang", cost:200000, materials: ["Earth Totem", "Earth Bulb", "Miracle Bulb", "Earth Idol", "Dragon Mimic"]}
{id: "830505", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830505.png", text:"Heroine Fang", cost:500000, materials: ["Blighted Fei", "Earth Totem", "Water Bulb", "Miracle Totem", "Metal Mimic"]}
{id: "830525", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830525.png", text:"Elaina", cost:500000, materials: ["Miracle Totem", "Earth Totem", "Dragon Mimic", "Earth Bulb", "880003"]}
{id: "830526", stars:"******", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_830526.png", text:"Mercenary Mage Elaina", cost:1500000, materials: ["Earth Mecha God", "Miracle Totem", "Earth Totem", "Metal Mimic", "880013"]}
{id: "840003", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840003.png", text:"Maiden Fennia", cost:100000, materials: ["Thunder Idol", "Thunder Idol", "Thunder Spirit", "Thunder Spirit", "Mimic"]}
{id: "840004", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840004.png", text:"Raid Bomb Fennia", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Idol", "Thunder Spirit", "Bat Mimic"]}
{id: "840044", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840044.png", text:"Storm Wing Cerise", cost:200000, materials: ["Thunder Totem", "Thunder Idol", "Thunder Pot", "Miracle Bulb", "Thunder Bulb"]}
{id: "840114", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840114.png", text:"Deadly Bonnie", cost:200000, materials: ["Thunder Totem", "Thunder Bulb", "Dark Bulb", "Thunder Idol", "Bat Mimic"]}
{id: "840124", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840124.png", text:"Grievesnare", cost:200000, materials: ["Thunder Totem", "Thunder Bulb", "Miracle Bulb", "Thunder Idol", "Bat Mimic"]}
{id: "840134", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840134.png", text:"Zedus", cost:200000, materials: ["Thunder Totem", "Thunder Bulb", "Miracle Bulb", "Thunder Idol", "Bat Mimic"]}
{id: "840135", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840135.png", text:"Boltstrike Zedus", cost:500000, materials: ["Turbo Grievesnare", "Thunder Totem", "Thunder Bulb", "Miracle Bulb", "Metal Mimic"]}
{id: "840204", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840204.png", text:"Vocals Kagamine Rin", cost:200000, materials: ["Thunder Totem", "Thunder Pot", "Thunder Idol", "Thunder Idol", "Dragon Mimic"]}
{id: "840205", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_840205.png", text:"Gemini Kagamine Rin", cost:500000, materials: ["Miracle Totem", "Thunder Totem", "Thunder Bulb", "Thunder Tone", "Metal Mimic"]}
{id: "850003", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850003.png", text:"Maiden Vanila", cost:100000, materials: ["Light Idol", "Light Idol", "Light Spirit", "Light Spirit", "Mimic"]}
{id: "850004", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850004.png", text:"Sky Queen Vanila", cost:200000, materials: ["Light Totem", "Light Idol", "Light Idol", "Light Spirit", "Bat Mimic"]}
{id: "850013", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850013.png", text:"Estia", cost:100000, materials: ["Light Idol", "Light Spirit", "Light Nymph", "Light Pot", "Mimic"]}
{id: "850014", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850014.png", text:"Damsel Estia", cost:200000, materials: ["Light Totem", "Light Idol", "Miracle Bulb", "Light Pot", "Bat Mimic"]}
{id: "850114", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850114.png", text:"Eva", cost:200000, materials: ["Light Totem", "Light Bulb", "Miracle Bulb", "Light Idol", "Dragon Mimic"]}
{id: "850115", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850115.png", text:"Snow Princess Eva", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Bulb", "Light Bulb", "Metal Mimic"]}
{id: "850154", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850154.png", text:"Cottontail Carrol", cost:200000, materials: ["Light Totem", "Light Bulb", "Water Bulb", "Light Idol", "Bat Mimic"]}
{id: "850204", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850204.png", text:"Clavier Kagamine Len", cost:200000, materials: ["Light Totem", "Light Pot", "Light Idol", "Light Idol", "Dragon Mimic"]}
{id: "850205", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_850205.png", text:"Gemini Kagamine Len", cost:500000, materials: ["Miracle Totem", "Light Totem", "Light Bulb", "Light Tone", "Metal Mimic"]}
{id: "860003", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860003.png", text:"Maiden Lico", cost:100000, materials: ["Dark Idol", "Dark Idol", "Dark Spirit", "Dark Spirit", "Mimic"]}
{id: "860004", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860004.png", text:"Dark Blade Lico", cost:200000, materials: ["Dark Totem", "Dark Idol", "Dark Idol", "Bat Mimic", "Bat Mimic"]}
{id: "860013", stars:"***", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860013.png", text:"Xenon", cost:100000, materials: ["Dark Idol", "Dark Spirit", "Dark Nymph", "Dark Pot", "Mimic"]}
{id: "860014", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860014.png", text:"Royal Guard Xenon", cost:200000, materials: ["Dark Totem", "Dark Idol", "Miracle Bulb", "Dark Pot", "Bat Mimic"]}
{id: "860104", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860104.png", text:"Semira", cost:200000, materials: ["Dark Totem", "Dark Bulb", "Miracle Bulb", "Dark Idol", "Bat Mimic"]}
{id: "860105", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860105.png", text:"Pumqueen Semira", cost:500000, materials: ["Miracle Totem", "Dark Totem", "Dark Bulb", "Dark Bulb", "Metal Mimic"]}
{id: "860124", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860124.png", text:"Netherhound", cost:200000, materials: ["Dark Totem", "Dark Bulb", "Miracle Bulb", "Dark Idol", "Bat Mimic"]}
{id: "860134", stars:"****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860134.png", text:"Hadaron", cost:200000, materials: ["Dark Totem", "Dark Bulb", "Miracle Bulb", "Dark Idol", "Bat Mimic"]}
{id: "860135", stars:"*****", thumbnail_url: "http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_860135.png", text:"Heartless Hadaron", cost:500000, materials: ["Turbo Netherhound", "Dark Totem", "Dark Bulb", "Miracle Bulb", "Metal Mimic"]}

    
    
    ];

  var unitInventory = $.totalStorage('unitInventory') || [];
  var evoMats = [];
  var totalEvoMats = {};

  render();

  $('#search-unit').select2({
    data: units
  }).on('change', function(selectedObject) {
    unitInventory.push(selectedObject.added);

    saveAndRender();
  });

  $('#clear-units').on('click', function() {
    unitInventory = [];
    evoMats = [];
    totalEvoMats = {};

    saveAndRender();
  });

  $('#unit-list').on('click', '.delete-unit', function(e) {
    e.preventDefault();

    unitInventory.splice($(this).attr('data-unit-index'), 1);
    saveAndRender();
    return false;
  });

  function saveAndRender() {
    saveUnits();
    render();
  }

  function saveUnits() {
    $.totalStorage('unitInventory', unitInventory);
  }

  function render() {
    tableBody = $('#unit-list tbody');
    tableBody.html('');

    $.each(unitInventory, function(index, unit) {
      tableRow = "<tr><td class='unit'><img class='unit-thumb' width='42' height='42' src='" + unit.thumbnail_url + "' /><span class='unit-name'>" + unit.text + "</span></td><td class='unit-cost'>" + unit.cost + "</td><td class='unit-materials'>" + renderEvoImages(unit.materials) + "</td><td class='actions'><a href='#' data-unit-index=" + index + " class='delete-unit btn btn-danger btn-sm'>Remove</a></td></tr>";
      tableBody.append(tableRow);
    });

    renderTotalEvoMatCounts();
    showTotalZelCost();
  }

  function renderEvoImages(materials) {
    materialString = '';
    $.each(materials, function(index, material) {
      materialString += renderEvoImage(material);
    });
    return materialString;
  }

  function renderEvoImage(material) {
    materialFileName = material.toLowerCase().replace(/ /g, '_') + '.png';
    return "<img src='images/" + materialFileName + "' alt='" + material + "' />";
  }

  function countEvoMats() {
    evoMats = [];
    totalEvoMats = {};

    $.each(unitInventory, function(index, unit) {
      evoMats.push(unit.materials);
    });

    // flatten the array
    evoMats = [].concat.apply([], evoMats);

    for(i = 0; i < evoMats.length; ++i) {
      if(!totalEvoMats[evoMats[i]])
        totalEvoMats[evoMats[i]] = 0;
      ++totalEvoMats[evoMats[i]];
    }
  }

  function renderTotalEvoMatCounts() {
    countEvoMats();

    $('.totem, .pot, .idol, .spirit, .nymph, .mimic, .bulb').text(0);

    for(key in totalEvoMats) {
      newKey = key.toLowerCase().replace(/\b([a-z])/g, ".$1");
      if(newKey == '.mimic') {
        newKey = '.plain .mimic';
      }

      $(newKey).text(totalEvoMats[key]);
    }
  }

  function showTotalZelCost() {
    var totalCost = 0;
    $('.unit-cost').each(function(index, unitCost) {
      unitCost = $(unitCost).text().replace(/,/g, '');
      if(unitCost.length > 0) {
        totalCost += parseInt(unitCost, 10);
      }
    });
    $('#total-cost').text(totalCost);
  }
});
