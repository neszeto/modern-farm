let allPlants = []

export const addPlant = (seedObject) => {
    allPlants.push(seedObject)
}

export const usePlants = () => {
    return allPlants
}