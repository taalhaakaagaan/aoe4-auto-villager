const strategies = {
    english: {
        name: "English",
        icon: "🏹",
        builds: [
            {
                name: "Longbow Rush (Standard)",
                // Start: 6 Vills. +1 every 20s starting at 0:09.
                steps: [
                    { t: 0, msg: "Start: 6 Sheep. Scout active.", f: 6, w: 0, g: 0 },
                    // 0:09 -> 1st created (7 total)
                    { t: 9, msg: "New Vil -> Sheep. (7)", f: 7, w: 0, g: 0 },
                    // 0:29 -> 2nd created (8 total)
                    { t: 29, msg: "New Vil -> Build House then Gold. (8)", f: 7, w: 0, g: 1 },
                    // 0:49 -> 3rd created (9 total)
                    { t: 49, msg: "New Vil -> Gold. (9)", f: 7, w: 0, g: 2 },
                    // 1:09 -> 4th created (10 total)
                    { t: 69, msg: "New Vil -> Gold. (10)", f: 7, w: 0, g: 3 },
                    // 1:29 -> 5th created (11 total)
                    { t: 89, msg: "New Vil -> Food. (11)", f: 8, w: 0, g: 3 },
                    // 1:49 -> 6th created (12 total)
                    { t: 109, msg: "New Vil -> Food. (12)", f: 9, w: 0, g: 3 },
                    // 2:09 -> 7th created (13 total)
                    { t: 129, msg: "New Vil -> Food. (13)", f: 10, w: 0, g: 3 },
                    // 2:29 -> 8th created (14 total) - AGE UP TIME
                    // Pull 3 Food + 1 Gold -> Build Council Hall (4 Builders)
                    // Remaining ECO: 7 Food, 3 Gold. New vills go to WOOD.
                    { t: 149, msg: "AGE UP: Build Council Hall (4 vills). Rally new to Wood.", f: 7, w: 1, g: 2 }, // 10 Working + 4 Building
                    // 2:49 -> 9th created (15 total)
                    { t: 169, msg: "Rally to Wood. (15)", f: 7, w: 2, g: 2 },
                    // 3:09 -> 10th created (16 total). Council Hall finishes approx now.
                    // Builders return to Food/Wood. Return 2 to Food, 2 to Wood.
                    { t: 189, msg: "Feudal Complete! Builders return. Queue Longbows.", f: 9, w: 5, g: 2 },
                    // 3:29 -> 11th created (17 total)
                    { t: 209, msg: "Rally to Wood for Houses/production.", f: 9, w: 6, g: 2 },
                    // 3:49 -> 12th created (18 total)
                    { t: 229, msg: "Maintain Longbow production.", f: 9, w: 7, g: 2 },
                    // 4:09 -> 13th created (19 total)
                    { t: 249, msg: "Consider Blacksmith or Barracks.", f: 9, w: 8, g: 2 }
                ]
            },
            {
                name: "King's Palace 2TC (Boom)",
                steps: [
                    { t: 0, msg: "Start: 6 Sheep.", f: 6, w: 0, g: 0 },
                    { t: 9, msg: "Vil -> Sheep. (7)", f: 7, w: 0, g: 0 },
                    { t: 29, msg: "Vil -> Gold. (8)", f: 7, w: 0, g: 1 },
                    { t: 49, msg: "Vil -> Gold. (9)", f: 7, w: 0, g: 2 },
                    { t: 69, msg: "Vil -> Gold. (10)", f: 7, w: 0, g: 3 },
                    { t: 89, msg: "Rally to Wood (House/Camp). (11)", f: 7, w: 1, g: 3 },
                    { t: 109, msg: "Rally Wood. (12)", f: 7, w: 2, g: 3 },
                    { t: 129, msg: "Age Up (Abbey of Kings). Rally Wood. (13)", f: 6, w: 4, g: 3 },
                    { t: 149, msg: "Rally Wood. (14)", f: 6, w: 5, g: 3 },
                    { t: 189, msg: "Feudal. 8 vils on Stone (from wood/food).", f: 4, w: 5, g: 3 }, // Mining Stone
                    { t: 249, msg: "Build King's Palace (Castle Age).", f: 10, w: 8, g: 3 }
                ]
            }
        ]
    },
    french: {
        name: "French",
        icon: "⚜️",
        builds: [
            {
                name: "School of Cavalry (Optimized)",
                steps: [
                    { t: 0, msg: "Start: 6 Food.", f: 6, w: 0, g: 0 },
                    { t: 9, msg: "Vil -> House -> Gold. (7)", f: 6, w: 0, g: 1 },
                    { t: 29, msg: "Vil -> Gold. (8)", f: 6, w: 0, g: 2 },
                    { t: 49, msg: "Vil -> Gold. (9)", f: 6, w: 0, g: 3 },
                    { t: 69, msg: "Vil -> Food. (10)", f: 7, w: 0, g: 3 },
                    { t: 89, msg: "Vil -> Food. (11)", f: 8, w: 0, g: 3 },
                    { t: 109, msg: "Vil -> Wood (Camp). (12)", f: 8, w: 1, g: 3 },
                    { t: 129, msg: "Age Up: School of Cav (4 Food vils). (13)", f: 5, w: 1, g: 3 }, // 4 building
                    { t: 149, msg: "Rally to Food. (14)", f: 6, w: 1, g: 3 },
                    { t: 169, msg: "Rally to Food. (15)", f: 7, w: 1, g: 3 },
                    { t: 189, msg: "Feudal Done. Builders -> Gold/Food. (16)", f: 8, w: 2, g: 6 },
                    { t: 209, msg: "Queue Knights! Rally Food. (17)", f: 9, w: 2, g: 6 },
                    { t: 229, msg: "Rally Wood. (18)", f: 9, w: 3, g: 6 }
                ]
            }
        ]
    },
    hre: {
        name: "HRE",
        icon: "👑",
        builds: [
            {
                name: "Aachen Fast Castle",
                steps: [
                    { t: 0, msg: "Prelate buffs eco. 3 Gold, 3 Food.", f: 3, w: 0, g: 3 },
                    { t: 9, msg: "Vil -> Food. (7)", f: 4, w: 0, g: 3 },
                    { t: 29, msg: "Vil -> Food. (8)", f: 5, w: 0, g: 3 },
                    { t: 49, msg: "Vil -> Food. (9)", f: 6, w: 0, g: 3 },
                    { t: 69, msg: "Vil -> Food. (10)", f: 7, w: 0, g: 3 },
                    { t: 89, msg: "Vil -> Wood. (11)", f: 7, w: 1, g: 3 },
                    { t: 109, msg: "Vil -> Wood. (12)", f: 7, w: 2, g: 3 },
                    { t: 129, msg: "Build Aachen (4 Food vils). (13)", f: 4, w: 2, g: 3 }, // 4 building
                    { t: 149, msg: "Rally Food. (14)", f: 5, w: 2, g: 3 },
                    { t: 189, msg: "Feudal. Move 4 to Gold. (16)", f: 7, w: 2, g: 7 },
                    { t: 369, msg: "Build Regnitz (Castle). Pull Food.", f: 5, w: 5, g: 7 }
                ]
            }
        ]
    },
    rus: {
        name: "Rus",
        icon: "🦌",
        builds: [
            {
                name: "Standard Aggro",
                steps: [
                    { t: 0, msg: "Cabin -> Food. (6)", f: 4, w: 2, g: 0 },
                    { t: 9, msg: "Vil -> Food (Hunt). (7)", f: 5, w: 2, g: 0 },
                    { t: 29, msg: "Vil -> Wood. (8)", f: 5, w: 3, g: 0 },
                    { t: 49, msg: "Vil -> Wood. (9)", f: 5, w: 4, g: 0 },
                    { t: 129, msg: "Build Kremlin. (13)", f: 8, w: 5, g: 0 },
                    { t: 209, msg: "Professional Scouts?", f: 10, w: 6, g: 2 }
                ]
            }
        ]
    },
    mongol: {
        name: "Mongol",
        icon: "🐎",
        builds: [
            {
                name: "Tower Rush (Detailed)",
                steps: [
                    { t: 0, msg: "Setup: TC to Woodline. Ovoo.", f: 0, w: 4, g: 0 },
                    { t: 9, msg: "First Vil -> Wood/Ovoo. (7)", f: 0, w: 5, g: 0 },
                    { t: 29, msg: "Vil -> Pasture/Sheep. (8)", f: 1, w: 5, g: 0 },
                    { t: 49, msg: "Vil -> Food. (9)", f: 2, w: 5, g: 0 },
                    { t: 69, msg: "Vil -> Food. (10)", f: 3, w: 5, g: 0 },
                    { t: 89, msg: "Build Barracks. Vil -> Food. (11)", f: 4, w: 5, g: 0 },
                    { t: 109, msg: "Send 2 Vils to TOWER. (12)", f: 4, w: 6, g: 0 }, // 2 forward
                    { t: 129, msg: "Vil -> Food. Make Spears. (13)", f: 5, w: 6, g: 0 },
                    { t: 209, msg: "Age Up (Silver Tree).", f: 8, w: 8, g: 2 }
                ]
            }
        ]
    },
    chinese: {
        name: "Chinese",
        icon: "🏮",
        builds: [
            {
                name: "Song Dynasty",
                steps: [
                    { t: 0, msg: "Train IO. 6 Food.", f: 6, w: 0, g: 0 },
                    { t: 9, msg: "Vil -> Food. (7)", f: 7, w: 0, g: 0 },
                    { t: 29, msg: "Vil -> Gold. (8)", f: 7, w: 0, g: 1 },
                    { t: 49, msg: "Vil -> Gold. (9)", f: 7, w: 0, g: 2 },
                    { t: 69, msg: "Vil -> Gold. (10)", f: 7, w: 0, g: 3 },
                    { t: 89, msg: "Vil -> Mill/Berries. (11)", f: 8, w: 0, g: 3 },
                    { t: 129, msg: "Build Academy (IO superv). (13)", f: 8, w: 0, g: 3 },
                    { t: 189, msg: "Build Barbican. (16)", f: 9, w: 3, g: 4 }
                ]
            }
        ]
    },
    delhi: {
        name: "Delhi",
        icon: "🐘",
        builds: [
            {
                name: "Sanctity Rush",
                steps: [
                    { t: 0, msg: "Queue Scholar. 6 Food.", f: 6, w: 0, g: 0 },
                    { t: 9, msg: "Vil -> Food. (7)", f: 7, w: 0, g: 0 },
                    { t: 29, msg: "Vil -> Gold. (8)", f: 7, w: 0, g: 1 },
                    { t: 49, msg: "Vil -> Gold. (9)", f: 7, w: 0, g: 2 },
                    { t: 69, msg: "Vil -> Gold. (10)", f: 7, w: 0, g: 3 },
                    { t: 129, msg: "Dome of Faith. (13)", f: 8, w: 2, g: 3 },
                    { t: 209, msg: "Research Sanctity. Scholar to Site.", f: 10, w: 5, g: 3 }
                ]
            }
        ]
    },
    abbasid: {
        name: "Abbasid",
        icon: "🌙",
        builds: [
            {
                name: "Fresh Foodstuffs",
                steps: [
                    { t: 0, msg: "6 Berries. Scout.", f: 6, w: 0, g: 0 },
                    { t: 9, msg: "Vil -> Gold. (7)", f: 6, w: 0, g: 1 },
                    { t: 29, msg: "Vil -> Wood. (8)", f: 6, w: 1, g: 1 },
                    { t: 49, msg: "Vil -> Wood. (9)", f: 6, w: 2, g: 1 },
                    { t: 129, msg: "House of Wisdom. (13)", f: 8, w: 4, g: 1 },
                    { t: 189, msg: "Research FF (Cheap Vils).", f: 8, w: 5, g: 3 }
                ]
            }
        ]
    },
    ottoman: {
        name: "Ottoman",
        icon: "🥁",
        builds: [
            {
                name: "Mil School",
                steps: [
                    { t: 0, msg: "Stone (4 vils).", f: 2, w: 0, g: 0 },
                    { t: 9, msg: "Vil -> Food. (7)", f: 3, w: 0, g: 0 },
                    { t: 89, msg: "Build Military School.", f: 6, w: 0, g: 0 },
                    { t: 189, msg: "Twin Minaret Medrese.", f: 9, w: 4, g: 2 }
                ]
            }
        ]
    },
    malians: {
        name: "Malians",
        icon: "💰",
        builds: [
            {
                name: "Farimba FC",
                steps: [
                    { t: 0, msg: "Pit Mine First.", f: 5, w: 1, g: 0 },
                    { t: 49, msg: "Cattle ranches. (9)", f: 6, w: 2, g: 1 },
                    { t: 109, msg: "Mansa Quarry. (12)", f: 7, w: 4, g: 1 },
                    { t: 409, msg: "Farimba Garrison.", f: 10, w: 5, g: 10 }
                ]
            }
        ]
    }
};

module.exports = strategies;
