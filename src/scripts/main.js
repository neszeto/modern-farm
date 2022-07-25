import {createPlan} from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat} from './seeds/wheat.js'
import { createCorn} from './seeds/corn.js'
import {addPlant} from './field.js'
import {usePlants} from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import {Catelog} from './catelog.js'


const yearlyPlan = createPlan()
console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

const cornSeed = createCorn()
console.log(cornSeed)


//addPlant(asparagusSeed)
//addPlant(potatoSeed)
//addPlant(soybeanSeed)
//addPlant(sunflowerSeed)
//addPlant(wheatSeed)
//addPlant(cornSeed)

//let allPlantTypes = usePlants()
//console.log(allPlantTypes)


let plantYearlySeeds = plantSeeds(yearlyPlan)
console.log(plantYearlySeeds)


let harvestSeeds = harvestPlants(plantYearlySeeds)
console.log(harvestSeeds)


const parentHTMLElement = document.querySelector(".messages") 
parentHTMLElement.innerHTML = Catelog(harvestSeeds)