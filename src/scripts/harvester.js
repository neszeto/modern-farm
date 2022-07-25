


export const harvestPlants = (plantsArray) => {
    let seedObjects = []
    for (let i = 0; i < plantsArray.length; i++) {
        if (plantsArray[i].type === 'Corn') {
            seedObjects.push(plantsArray[i])
            seedObjects.push(plantsArray[i])
            seedObjects.push(plantsArray[i])
        }
        
        else {
            for (let j = 0; j < plantsArray[i].output; j++) {
            seedObjects.push(plantsArray[i])
            }        
        }
    }
    return seedObjects
}


