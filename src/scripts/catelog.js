

export const Catelog = (harvestedFoodArray) => {
    let htmlString = ""
    for (let i = 0; i < harvestedFoodArray.length; i++) {
        htmlString += `<section class="plant">${harvestedFoodArray[i].type}</section>`
    }
    return htmlString
}

