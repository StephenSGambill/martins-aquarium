//used to import database module to make accessible here
import { getFish } from './database.js'
import { FishList } from './FishList.js'


const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const parentHTMLElement = document.querySelector(".fishCardContainer")

parentHTMLElement.innerHTML = FishList()