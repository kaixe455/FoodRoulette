import { apiURL, REACT_API_URL } from './conf.js'

export const getTestedFoods = async () => {
    try {
        const response = await fetch(`${apiURL}/testedfoods`)
        const foods = await response.json()
        return foods
    } catch (e) {
        return null
    }
}

export const getNotTestedFoods = async () => {
    try {
        const response = await fetch(`http://localhost:4321/api/foods`)
        const foods = await response.json()
        return foods
    } catch (e) {
        return null
    }
}

export const updateFood = async (food) => {
    const updateFood = food
    console.log(updateFood)
    try {
        const response = await fetch(`http://localhost:4321/api/foods/${updateFood.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
        const foodUpdated = await response
        return foodUpdated
    } catch (e) {
        console.log(e)
        return null
    }

}