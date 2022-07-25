import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat} from './seeds/wheat.js'
import { createCorn} from './seeds/corn.js'
import {addPlant} from './field.js'
import {usePlants} from './field.js'



export const plantSeeds = (yearsPlantingPlan) => {
    for (let i = 0; i < yearsPlantingPlan.length; i++ ) {
        for (let j = 0; j < 6; j++) {
            if (yearsPlantingPlan[i][j] === 'Potato') {
                let potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (yearsPlantingPlan[i][j] === 'Soybean') {
                let soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
                
            }
            else if (yearsPlantingPlan[i][j] === 'Corn') {
                let cornSeed = createCorn()
                for (let corn of cornSeed) {
                    addPlant(corn)
                }
                
            }
            else if (yearsPlantingPlan[i][j] === 'Wheat') {
                let wheatSeed = createWheat()
                addPlant(wheatSeed)
                
            }
            else if (yearsPlantingPlan[i][j] === 'Sunflower') {
                let sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
                
            }
            else if (yearsPlantingPlan[i][j] === 'Asparagus') {
                let asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
                
            }
        }
    }
    return usePlants()
    
}