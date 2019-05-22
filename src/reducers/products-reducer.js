const productsReducer = (state = [], { type, payload }) => {
    if(type === 'changeState'){
        return payload.newState;
    }
    return state;
};

export default productsReducer;
