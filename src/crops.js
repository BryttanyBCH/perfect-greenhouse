
/*
 * All data gathered from a modified version of polarstoat/stardew-crop-data
 */

export const crops =
{
   "Unmilled Rice": {
      "name": "Unmilled Rice",
      "description": "Rice in its rawest form. Run this through a mill to increase the value.",
      "id": 271,
      "category": "Basic -75",
      "sellPrice": 30,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 8,
      "regrowAfterHarvest": -1,
      "harvest": {
         "minHarvest": 1,
         "maxHarvest": 1,
         "maxHarvestIncreasePerFarmingLevel": 10,
         "chanceForExtraCrops": 0.1
      },
      "seed": {
         "name": "Rice Shoot",
         "description": "Plant these in the spring. Takes 8 days to mature. Grows faster if planted near a body of water. Harvest with the scythe.",
         "id": 273,
         "category": "Seeds -74",
         "sellPrice": 20,
         "vendor": {
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Amaranth": {
      "name": "Amaranth",
      "description": "A purple grain cultivated by an ancient civilization.",
      "id": 300,
      "category": "Basic -75",
      "sellPrice": 150,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Amaranth Seeds",
         "description": "Plant these in the fall. Takes 7 days to grow. Harvest with the scythe.",
         "id": 299,
         "category": "Seeds -74",
         "sellPrice": 35,
         "vendor": {
            "generalStore": {
               "price": 70,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 87
            },
            "travelingCart": {
               "minPrice": 105,
               "maxPrice": 1000
            }
         }
      }
   },
   "Grape": {
      "name": "Grape",
      "description": "A sweet cluster of fruit.",
      "id": 398,
      "category": "Basic -79",
      "sellPrice": 80,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 10,
      "regrowAfterHarvest": 3,
      "harvest": {},
      "seed": {
         "name": "Grape Starter",
         "description": "Plant these in the fall. Takes 10 days to grow, but keeps producing after that. Grows on a trellis.",
         "id": 301,
         "category": "Seeds -74",
         "sellPrice": 30,
         "vendor": {
            "generalStore": {
               "price": 60,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 75
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Hops": {
      "name": "Hops",
      "description": "A bitter, tangy flower used to flavor beer.",
      "id": 304,
      "category": "Basic -75",
      "sellPrice": 25,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 11,
      "regrowAfterHarvest": 1,
      "harvest": {},
      "seed": {
         "name": "Hops Starter",
         "description": "Plant these in the summer. Takes 11 days to grow, but keeps producing after that. Grows on a trellis.",
         "id": 302,
         "category": "Seeds -74",
         "sellPrice": 30,
         "vendor": {
            "generalStore": {
               "price": 60,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 75
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Sweet Gem Berry": {
      "name": "Sweet Gem Berry",
      "description": "It's by far the sweetest thing you've ever smelled.",
      "id": 417,
      "category": "Basic -17",
      "sellPrice": 3000,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 24,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Rare Seed",
         "description": "Sow in fall. Takes all season to grow.",
         "id": 347,
         "category": "Seeds -74",
         "sellPrice": 200,
         "vendor": {
            "travelingCart": {
               "minPrice": 600,
               "maxPrice": 1000,
               "price": 1000
            }
         }
      }
   },
   "Fairy Rose": {
      "name": "Fairy Rose",
      "description": "An old folk legend suggests that the sweet smell of this flower attracts fairies.",
      "id": 595,
      "category": "Basic -80",
      "sellPrice": 290,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 12,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Fairy Seeds",
         "description": "Plant in fall. Takes 12 days to produce a mysterious flower. Assorted Colors.",
         "id": 425,
         "category": "Seeds -74",
         "sellPrice": 100,
         "vendor": {
            "generalStore": {
               "price": 200,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 250
            },
            "travelingCart": {
               "minPrice": 300,
               "maxPrice": 1000
            }
         }
      }
   },
   "Tulip": {
      "name": "Tulip",
      "description": "The most popular spring flower. Has a very faint sweet smell.",
      "id": 591,
      "category": "Basic -80",
      "sellPrice": 30,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 6,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Tulip Bulb",
         "description": "Plant in spring. Takes 6 days to produce a colorful flower. Assorted colors.",
         "id": 427,
         "category": "Seeds -74",
         "sellPrice": 10,
         "vendor": {
            "generalStore": {
               "price": 20,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 25
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Blue Jazz": {
      "name": "Blue Jazz",
      "description": "The flower grows in a sphere to invite as many butterflies as possible.",
      "id": 597,
      "category": "Basic -80",
      "sellPrice": 50,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Jazz Seeds",
         "description": "Plant in spring. Takes 7 days to produce a blue puffball flower.",
         "id": 429,
         "category": "Seeds -74",
         "sellPrice": 15,
         "vendor": {
            "generalStore": {
               "price": 30,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 37
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Sunflower": {
      "name": "Sunflower",
      "description": "A common misconception is that the flower turns so it's always facing the sun.",
      "id": 421,
      "category": "Basic -80",
      "sellPrice": 80,
      "seasonsToGrowIn": [
         "summer",
         "fall"
      ],
      "growthTime": 8,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Sunflower Seeds",
         "description": "Plant in summer or fall. Takes 8 days to produce a large sunflower. Yields more seeds at harvest.",
         "id": 431,
         "category": "Seeds -74",
         "sellPrice": 20,
         "vendor": {
            "generalStore": {
               "price": 200,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 125
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Coffee Bean": {
      "name": "Coffee Bean",
      "description": "Plant in spring or summer to grow a coffee plant. Place five beans in a keg to make coffee.",
      "id": 433,
      "category": "Seeds -74",
      "sellPrice": 15,
      "seasonsToGrowIn": [
         "spring",
         "summer"
      ],
      "growthTime": 10,
      "regrowAfterHarvest": 2,
      "harvest": {
         "minHarvest": 4,
         "maxHarvest": 4,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.02
      },
      "seed": {
         "name": "Coffee Bean",
         "description": "Plant in spring or summer to grow a coffee plant. Place five beans in a keg to make coffee.",
         "id": 433,
         "category": "Seeds -74",
         "sellPrice": 15,
         "vendor": {
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000,
               "price": 2500
            }
         }
      }
   },
   "Poppy": {
      "name": "Poppy",
      "description": "In addition to its colorful flower, the Poppy has culinary and medicinal uses.",
      "id": 376,
      "category": "Basic -80",
      "sellPrice": 140,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Poppy Seeds",
         "description": "Plant in summer. Produces a bright red flower in 7 days.",
         "id": 453,
         "category": "Seeds -74",
         "sellPrice": 50,
         "vendor": {
            "generalStore": {
               "price": 100,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 125
            },
            "travelingCart": {
               "minPrice": 150,
               "maxPrice": 1000
            }
         }
      }
   },
   "Summer Spangle": {
      "name": "Summer Spangle",
      "description": "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma.",
      "id": 593,
      "category": "Basic -80",
      "sellPrice": 90,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 8,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Spangle Seeds",
         "description": "Plant in summer. Takes 8 days to produce a vibrant tropical flower. Assorted colors.",
         "id": 455,
         "category": "Seeds -74",
         "sellPrice": 25,
         "vendor": {
            "generalStore": {
               "price": 50,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 62
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Parsnip": {
      "name": "Parsnip",
      "description": "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.",
      "id": 24,
      "category": "Basic -75",
      "sellPrice": 35,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 4,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Parsnip Seeds",
         "description": "Plant these in the spring. Takes 4 days to mature.",
         "id": 472,
         "category": "Seeds -74",
         "sellPrice": 10,
         "vendor": {
            "generalStore": {
               "price": 20,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 25
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Green Bean": {
      "name": "Green Bean",
      "description": "A juicy little bean with a cool, crisp snap.",
      "id": 188,
      "category": "Basic -75",
      "sellPrice": 40,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 10,
      "regrowAfterHarvest": 3,
      "harvest": {},
      "seed": {
         "name": "Bean Starter",
         "description": "Plant these in the spring. Takes 10 days to mature, but keeps producing after that. Grows on a trellis.",
         "id": 473,
         "category": "Seeds -74",
         "sellPrice": 30,
         "vendor": {
            "generalStore": {
               "price": 60,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 75
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Cauliflower": {
      "name": "Cauliflower",
      "description": "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients.",
      "id": 190,
      "category": "Basic -75",
      "sellPrice": 175,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 12,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Cauliflower Seeds",
         "description": "Plant these in the spring. Takes 12 days to produce a large cauliflower.",
         "id": 474,
         "category": "Seeds -74",
         "sellPrice": 40,
         "vendor": {
            "generalStore": {
               "price": 80,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 100
            },
            "travelingCart": {
               "minPrice": 120,
               "maxPrice": 1000
            }
         }
      }
   },
   "Potato": {
      "name": "Potato",
      "description": "A widely cultivated tuber.",
      "id": 192,
      "category": "Basic -75",
      "sellPrice": 80,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 6,
      "regrowAfterHarvest": -1,
      "harvest": {
         "minHarvest": 1,
         "maxHarvest": 1,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.2
      },
      "seed": {
         "name": "Potato Seeds",
         "description": "Plant these in the spring. Takes 6 days to mature, and has a chance of yielding multiple potatoes at harvest.",
         "id": 475,
         "category": "Seeds -74",
         "sellPrice": 25,
         "vendor": {
            "generalStore": {
               "price": 50,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 62
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Garlic": {
      "name": "Garlic",
      "description": "Adds a wonderful zestiness to dishes. High quality garlic can be pretty spicy.",
      "id": 248,
      "category": "Basic -75",
      "sellPrice": 60,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 4,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Garlic Seeds",
         "description": "Plant these in the spring. Takes 4 days to mature.",
         "id": 476,
         "category": "Seeds -74",
         "sellPrice": 20,
         "vendor": {
            "generalStore": {
               "price": 40,
               "yearAvailable": 2
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Kale": {
      "name": "Kale",
      "description": "The waxy leaves are great in soups and stir frys.",
      "id": 250,
      "category": "Basic -75",
      "sellPrice": 110,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 6,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Kale Seeds",
         "description": "Plant these in the spring. Takes 6 days to mature. Harvest with the scythe.",
         "id": 477,
         "category": "Seeds -74",
         "sellPrice": 35,
         "vendor": {
            "generalStore": {
               "price": 70,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 87
            },
            "travelingCart": {
               "minPrice": 105,
               "maxPrice": 1000
            }
         }
      }
   },
   "Rhubarb": {
      "name": "Rhubarb",
      "description": "The stalks are extremely tart, but make a great dessert when sweetened.",
      "id": 252,
      "category": "Basic -79",
      "sellPrice": 220,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 13,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Rhubarb Seeds",
         "description": "Plant these in the spring. Takes 13 days to mature.",
         "id": 478,
         "category": "Seeds -74",
         "sellPrice": 50,
         "vendor": {
            "travelingCart": {
               "minPrice": 150,
               "maxPrice": 1000
            },
            "oasis": {
               "price": 100
            }
         }
      }
   },
   "Melon": {
      "name": "Melon",
      "description": "A cool, sweet summer treat.",
      "id": 254,
      "category": "Basic -79",
      "sellPrice": 250,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 12,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Melon Seeds",
         "description": "Plant these in the summer. Takes 12 days to mature.",
         "id": 479,
         "category": "Seeds -74",
         "sellPrice": 40,
         "vendor": {
            "generalStore": {
               "price": 80,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 100
            },
            "travelingCart": {
               "minPrice": 120,
               "maxPrice": 1000
            }
         }
      }
   },
   "Tomato": {
      "name": "Tomato",
      "description": "Rich and slightly tangy, the Tomato has a wide variety of culinary uses.",
      "id": 256,
      "category": "Basic -75",
      "sellPrice": 60,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 11,
      "regrowAfterHarvest": 4,
      "harvest": {
         "minHarvest": 1,
         "maxHarvest": 1,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.05
      },
      "seed": {
         "name": "Tomato Seeds",
         "description": "Plant these in the summer. Takes 11 days to mature, and continues to produce after first harvest.",
         "id": 480,
         "category": "Seeds -74",
         "sellPrice": 25,
         "vendor": {
            "generalStore": {
               "price": 50,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 62
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Blueberry": {
      "name": "Blueberry",
      "description": "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration.",
      "id": 258,
      "category": "Basic -79",
      "sellPrice": 50,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 13,
      "regrowAfterHarvest": 4,
      "harvest": {
         "minHarvest": 3,
         "maxHarvest": 3,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.02
      },
      "seed": {
         "name": "Blueberry Seeds",
         "description": "Plant these in the summer. Takes 13 days to mature, and continues to produce after first harvest.",
         "id": 481,
         "category": "Seeds -74",
         "sellPrice": 40,
         "vendor": {
            "generalStore": {
               "price": 80,
               "yearAvailable": 1
            },
            "travelingCart": {
               "minPrice": 120,
               "maxPrice": 1000
            }
         }
      }
   },
   "Hot Pepper": {
      "name": "Hot Pepper",
      "description": "Fiery hot with a hint of sweetness.",
      "id": 260,
      "category": "Basic -79",
      "sellPrice": 40,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 5,
      "regrowAfterHarvest": 3,
      "harvest": {
         "minHarvest": 1,
         "maxHarvest": 1,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.03
      },
      "seed": {
         "name": "Pepper Seeds",
         "description": "Plant these in the summer. Takes 5 days to mature, and continues to produce after first harvest.",
         "id": 482,
         "category": "Seeds -74",
         "sellPrice": 20,
         "vendor": {
            "generalStore": {
               "price": 40,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 50
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Wheat": {
      "name": "Wheat",
      "description": "One of the most widely cultivated grains. Makes a great flour for breads and cakes.",
      "id": 262,
      "category": "Basic -75",
      "sellPrice": 25,
      "seasonsToGrowIn": [
         "summer",
         "fall"
      ],
      "growthTime": 4,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Wheat Seeds",
         "description": "Plant these in the summer or fall. Takes 4 days to mature. Harvest with the scythe.",
         "id": 483,
         "category": "Seeds -74",
         "sellPrice": 5,
         "vendor": {
            "generalStore": {
               "price": 10,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 12
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Radish": {
      "name": "Radish",
      "description": "A crisp and refreshing root vegetable with hints of pepper when eaten raw.",
      "id": 264,
      "category": "Basic -75",
      "sellPrice": 90,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 6,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Radish Seeds",
         "description": "Plant these in the summer. Takes 6 days to mature.",
         "id": 484,
         "category": "Seeds -74",
         "sellPrice": 20,
         "vendor": {
            "generalStore": {
               "price": 40,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 50
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Red Cabbage": {
      "name": "Red Cabbage",
      "description": "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions.",
      "id": 266,
      "category": "Basic -75",
      "sellPrice": 260,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 9,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Red Cabbage Seeds",
         "description": "Plant these in the summer. Takes 9 days to mature.",
         "id": 485,
         "category": "Seeds -74",
         "sellPrice": 50,
         "vendor": {
            "generalStore": {
               "price": 100,
               "yearAvailable": 2
            },
            "travelingCart": {
               "minPrice": 150,
               "maxPrice": 1000
            }
         }
      }
   },
   "Starfruit": {
      "name": "Starfruit",
      "description": "An extremely juicy fruit that grows in hot, humid weather. Slightly sweet with a sour undertone.",
      "id": 268,
      "category": "Basic -79",
      "sellPrice": 750,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 13,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Starfruit Seeds",
         "description": "Plant these in the summer. Takes 13 days to mature.",
         "id": 486,
         "category": "Seeds -74",
         "sellPrice": 200,
         "vendor": {
            "travelingCart": {
               "minPrice": 600,
               "maxPrice": 1000
            },
            "oasis": {
               "price": 400
            }
         }
      }
   },
   "Corn": {
      "name": "Corn",
      "description": "One of the most popular grains. The sweet, fresh cobs are a summer favorite.",
      "id": 270,
      "category": "Basic -75",
      "sellPrice": 50,
      "seasonsToGrowIn": [
         "summer",
         "fall"
      ],
      "growthTime": 14,
      "regrowAfterHarvest": 4,
      "harvest": {},
      "seed": {
         "name": "Corn Seeds",
         "description": "Plant these in the summer or fall. Takes 14 days to mature, and continues to produce after first harvest.",
         "id": 487,
         "category": "Seeds -74",
         "sellPrice": 75,
         "vendor": {
            "generalStore": {
               "price": 150,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 187
            },
            "travelingCart": {
               "minPrice": 225,
               "maxPrice": 1000
            }
         }
      }
   },
   "Eggplant": {
      "name": "Eggplant",
      "description": "A rich and wholesome relative of the tomato. Delicious fried or stewed.",
      "id": 272,
      "category": "Basic -75",
      "sellPrice": 60,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 5,
      "regrowAfterHarvest": 5,
      "harvest": {
         "minHarvest": 1,
         "maxHarvest": 1,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.002
      },
      "seed": {
         "name": "Eggplant Seeds",
         "description": "Plant these in the fall. Takes 5 days to mature, and continues to produce after first harvest.",
         "id": 488,
         "category": "Seeds -74",
         "sellPrice": 10,
         "vendor": {
            "generalStore": {
               "price": 20,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 25
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Artichoke": {
      "name": "Artichoke",
      "description": "The bud of a thistle plant. The spiny outer leaves conceal a fleshy, filling interior.",
      "id": 274,
      "category": "Basic -75",
      "sellPrice": 160,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 8,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Artichoke Seeds",
         "description": "Plant these in the fall. Takes 8 days to mature.",
         "id": 489,
         "category": "Seeds -74",
         "sellPrice": 15,
         "vendor": {
            "generalStore": {
               "price": 30,
               "yearAvailable": 2
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Pumpkin": {
      "name": "Pumpkin",
      "description": "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration.",
      "id": 276,
      "category": "Basic -75",
      "sellPrice": 320,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 13,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Pumpkin Seeds",
         "description": "Plant these in the fall. Takes 13 days to mature.",
         "id": 490,
         "category": "Seeds -74",
         "sellPrice": 50,
         "vendor": {
            "generalStore": {
               "price": 100,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 125
            },
            "travelingCart": {
               "minPrice": 150,
               "maxPrice": 1000
            }
         }
      }
   },
   "Bok Choy": {
      "name": "Bok Choy",
      "description": "The leafy greens and fibrous stalks are healthy and delicious.",
      "id": 278,
      "category": "Basic -75",
      "sellPrice": 80,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 4,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Bok Choy Seeds",
         "description": "Plant these in the fall. Takes 4 days to mature.",
         "id": 491,
         "category": "Seeds -74",
         "sellPrice": 25,
         "vendor": {
            "generalStore": {
               "price": 50,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 62
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Yam": {
      "name": "Yam",
      "description": "A starchy tuber with a lot of culinary versatility.",
      "id": 280,
      "category": "Basic -75",
      "sellPrice": 160,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 10,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Yam Seeds",
         "description": "Plant these in the fall. Takes 10 days to mature.",
         "id": 492,
         "category": "Seeds -74",
         "sellPrice": 30,
         "vendor": {
            "generalStore": {
               "price": 60,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 75
            },
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Cranberries": {
      "name": "Cranberries",
      "description": "These tart red berries are a traditional winter food.",
      "id": 282,
      "category": "Basic -79",
      "sellPrice": 75,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": 5,
      "harvest": {
         "minHarvest": 2,
         "maxHarvest": 2,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.1
      },
      "seed": {
         "name": "Cranberry Seeds",
         "description": "Plant these in the fall. Takes 7 days to mature, and continues to produce after first harvest.",
         "id": 493,
         "category": "Seeds -74",
         "sellPrice": 120,
         "vendor": {
            "generalStore": {
               "price": 240,
               "yearAvailable": 1
            },
            "jojaMart": {
               "price": 300
            },
            "travelingCart": {
               "minPrice": 360,
               "maxPrice": 1000
            }
         }
      }
   },
   "Beet": {
      "name": "Beet",
      "description": "A sweet and earthy root vegatable. As a bonus, the leaves make a great salad.",
      "id": 284,
      "category": "Basic -75",
      "sellPrice": 100,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 6,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Beet Seeds",
         "description": "Plant these in the fall. Takes 6 days to mature.",
         "id": 494,
         "category": "Seeds -74",
         "sellPrice": 10,
         "vendor": {
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            },
            "oasis": {
               "price": 20
            }
         }
      }
   },
   "Wild Horseradish": {
      "name": "Wild Horseradish",
      "description": "A spicy root found in the spring.",
      "id": 16,
      "category": "Basic -81",
      "sellPrice": 50,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Spring Seeds",
         "description": "An assortment of wild spring seeds.",
         "id": 495,
         "category": "Seeds -74",
         "sellPrice": 35,
         "vendor": {
            "travelingCart": {
               "minPrice": 105,
               "maxPrice": 1000
            }
         }
      }
   },
   "Spice Berry": {
      "name": "Spice Berry",
      "description": "It fills the air with a pungent aroma.",
      "id": 396,
      "category": "Basic -79",
      "sellPrice": 80,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Summer Seeds",
         "description": "An assortment of wild summer seeds.",
         "id": 496,
         "category": "Seeds -74",
         "sellPrice": 55,
         "vendor": {
            "travelingCart": {
               "minPrice": 165,
               "maxPrice": 1000
            }
         }
      }
   },
   "Common Mushroom": {
      "name": "Common Mushroom",
      "description": "Slightly nutty, with good texture.",
      "id": 404,
      "category": "Basic -81",
      "sellPrice": 40,
      "seasonsToGrowIn": [
         "fall"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Fall Seeds",
         "description": "An assortment of wild fall seeds.",
         "id": 497,
         "category": "Seeds -74",
         "sellPrice": 45,
         "vendor": {
            "travelingCart": {
               "minPrice": 135,
               "maxPrice": 1000
            }
         }
      }
   },
   "Winter Root": {
      "name": "Winter Root",
      "description": "A starchy tuber.",
      "id": 412,
      "category": "Basic -81",
      "sellPrice": 70,
      "seasonsToGrowIn": [
         "winter"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Winter Seeds",
         "description": "An assortment of wild winter seeds.",
         "id": 498,
         "category": "Seeds -74",
         "sellPrice": 30,
         "vendor": {
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Ancient Fruit": {
      "name": "Ancient Fruit",
      "description": "It's been dormant for eons.",
      "id": 454,
      "category": "Basic -79",
      "sellPrice": 550,
      "seasonsToGrowIn": [
         "spring",
         "summer",
         "fall"
      ],
      "growthTime": 28,
      "regrowAfterHarvest": 7,
      "harvest": {},
      "seed": {
         "name": "Ancient Seeds",
         "description": "Could these still grow?",
         "id": 499,
         "category": "Seeds -74",
         "sellPrice": 30,
         "vendor": {
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Strawberry": {
      "name": "Strawberry",
      "description": "A sweet, juicy favorite with an appealing red color.",
      "id": 400,
      "category": "Basic -79",
      "sellPrice": 120,
      "seasonsToGrowIn": [
         "spring"
      ],
      "growthTime": 8,
      "regrowAfterHarvest": 4,
      "harvest": {
         "minHarvest": 1,
         "maxHarvest": 1,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.02
      },
      "seed": {
         "name": "Strawberry Seeds",
         "description": "Plant these in spring. Takes 8 days to mature, and keeps producing strawberries after that.",
         "id": 745,
         "category": "Seeds -74",
         "sellPrice": 0,
         "vendor": {
            "eggFestival": {
               "price": 100
            }
         }
      }
   },
   "Cactus Fruit": {
      "name": "Cactus Fruit",
      "description": "The sweet fruit of the prickly pear cactus.",
      "id": 90,
      "category": "Basic -79",
      "sellPrice": 75,
      "seasonsToGrowIn": [
         "spring",
         "summer",
         "fall",
         "winter"
      ],
      "growthTime": 12,
      "regrowAfterHarvest": 3,
      "harvest": {},
      "seed": {
         "name": "Cactus Seeds",
         "description": "Can only be grown indoors. Takes 12 days to mature, and then produces fruit every 3 days.",
         "id": 802,
         "category": "Seeds -74",
         "sellPrice": 0,
         "vendor": {
            "oasis": {
               "price": 150
            }
         }
      }
   },
   "Taro Root": {
      "name": "Taro Root",
      "description": "This starchy root is one of the most ancient crops.",
      "id": 830,
      "category": "Basic -75",
      "sellPrice": 100,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 10,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Taro Tuber",
         "description": "Plant these in warm weather. Takes 10 days to mature. Grows faster if planted near a body of water.",
         "id": 831,
         "category": "Seeds -74",
         "sellPrice": 20,
         "vendor": {
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Pineapple": {
      "name": "Pineapple",
      "description": "A sweet and tangy tropical treat.",
      "id": 832,
      "category": "Basic -79",
      "sellPrice": 300,
      "seasonsToGrowIn": [
         "summer"
      ],
      "growthTime": 14,
      "regrowAfterHarvest": 7,
      "harvest": {},
      "seed": {
         "name": "Pineapple Seeds",
         "description": "Plant these in warm weather. Takes 14 days to mature, and keeps producing fruit after that.",
         "id": 833,
         "category": "Seeds -74",
         "sellPrice": 240,
         "vendor": {
            "travelingCart": {
               "minPrice": 720,
               "maxPrice": 1200
            }
         }
      }
   },
   "Fiber": {
      "name": "Fiber",
      "description": "Raw material sourced from plants.",
      "id": 771,
      "category": "Basic -16",
      "sellPrice": 1,
      "seasonsToGrowIn": [
         "spring",
         "summer",
         "fall",
         "winter"
      ],
      "growthTime": 7,
      "regrowAfterHarvest": -1,
      "harvest": {
         "minHarvest": 4,
         "maxHarvest": 7,
         "maxHarvestIncreasePerFarmingLevel": 0,
         "chanceForExtraCrops": 0.01
      },
      "seed": {
         "name": "Fiber Seeds",
         "description": "Plant these in any season. Does not require watering. Harvest with the scythe. Takes 7 days to grow.",
         "id": 885,
         "category": "Seeds -74",
         "sellPrice": 5,
         "vendor": {
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   },
   "Qi Fruit": {
      "name": "Qi Fruit",
      "description": "Mr. Qi has challenged you to ship 500 of these strange melons.",
      "id": 889,
      "category": "Basic -79",
      "sellPrice": 1,
      "seasonsToGrowIn": [
         "spring",
         "summer",
         "fall",
         "winter"
      ],
      "growthTime": 4,
      "regrowAfterHarvest": -1,
      "harvest": {},
      "seed": {
         "name": "Qi Bean",
         "description": "Plant these in any season. Water every day to produce a Qi Fruit. Takes 4 days to mature.",
         "id": 890,
         "category": "Seeds -74",
         "sellPrice": 1,
         "vendor": {
            "travelingCart": {
               "minPrice": 100,
               "maxPrice": 1000
            }
         }
      }
   }
}