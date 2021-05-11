import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const getDishes = () => dispatch => {
    axios.get("https://myapp-38849.firebaseio.com/dishes.json")
        .then(response => dispatch(loadDishes(response.data)))
        .catch(err => console.log(err))
}

export const addToFavourites = dish => {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        payload: dish,
    }
}