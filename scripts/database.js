/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            species: "goldfish", 
            food: "Crustaceans",
            length: 3,
            location: "Brazil",
            image: "/images/fish2.jpeg"
        },
        {
            name: "Larry",
            species: "Goldfish", 
            food: "pancakes",
            length: 5,
            location: "Cuba",
            image: "/images/nemo.jpeg"

        },
        {
            name: "Angelina",
            species: "Retriever", 
            food: "cheesburgers",
            length: 27,
            location: "Peru",
            image: "/images/Cichlid.jpeg"

        },
        {
            name: "Bart",
            species: "goldfish", 
            food: "Crustaceans",
            length: 3,
            location: "Brazil",
            image: "/images/fish2.jpeg"
        },
        {
            name: "Larry",
            species: "Goldfish", 
            food: "pancakes",
            length: 5,
            location: "Cuba",
            image: "/images/nemo.jpeg"

        },
        {
            name: "Angelina",
            species: "Retriever", 
            food: "cheesburgers",
            length: 27,
            location: "Peru",
            image: "/images/Cichlid.jpeg"

        },
        {
            name: "Bart",
            species: "goldfish", 
            food: "Crustaceans",
            length: 3,
            location: "Brazil",
            image: "/images/fish2.jpeg"
        },
        {
            name: "Larry",
            species: "Goldfish", 
            food: "pancakes",
            length: 5,
            location: "Cuba",
            image: "/images/nemo.jpeg"

        },
        {
            name: "Angelina",
            species: "Retriever", 
            food: "cheesburgers",
            length: 27,
            location: "Peru",
            image: "/images/Cichlid.jpeg"

        }
    ]
}

//export current database to make available to other modules
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

//console.log(database.fish[0])