export const initialState = {
    basket: [
        {
            id: "323456",
            title: "SweatyRocks Sweatshirt Pullover Fleece Drop Shoulder Striped Hoodie",
            price: 23,
            rating: 5,
            image: "https://m.media-amazon.com/images/I/718wsxGp-TL._AC_UL480_FMwebp_QL65_.jpg"},
        {
            id: "985671",
            title: "SweatyRocks Sweatshirt Pullover Fleece Drop Shoulder Striped Hoodie",
            price: 23,
            rating: 5,
            image: "https://m.media-amazon.com/images/I/718wsxGp-TL._AC_UL480_FMwebp_QL65_.jpg"},
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return { 
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // logic from removing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exisit in basket, remove it...
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket`
                );
            }

            return { 
                ...state, 
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer;