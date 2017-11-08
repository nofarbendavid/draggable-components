const initialState = {
    currentUser : null,
    positions: {
        name: {x: 0, y: 0},
        image: {x: 0, y: 0}
    }
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_CURRENT_USER': {
            let updatedState = Object.assign({}, state);
            updatedState.currentUser = action.user;
            return updatedState;
        }
        case 'LOGOUT': {
            let updatedState = Object.assign({}, state);
            updatedState.currentUser = null;
            return updatedState;
        }
        case 'GET_USER_POSITIONS_FROM_LOCAL_STORAGE': {
            let updatedState = Object.assign({}, state);
            let localStorageData = localStorage.getItem("positions") ? JSON.parse(localStorage.getItem("positions")) : {};
            let currUserId = state.currentUser.id;
            let userPositions = (localStorageData && localStorageData[currUserId]) ? localStorageData[currUserId] : {};

            updatedState.positions["name"] = (userPositions && userPositions["name"]) ? userPositions["name"] : {x: 0, y: 0} ;
            updatedState.positions["image"] = (userPositions && userPositions["image"]) ? userPositions["image"] : {x: 0, y: 0} ;

            return updatedState;
        }
        case 'SET_USER_POSITIONS_TO_LOCAL_STORAGE': {
            let updatedState = Object.assign({}, state);
            updatedState.positions[action.componentName].x += action.deltaX ;
            updatedState.positions[action.componentName].y += action.deltaY ;

            let localStorageData = localStorage.getItem("positions") ? JSON.parse(localStorage.getItem("positions")) : {};
            let updateLocalStorage = Object.assign(localStorageData, {[state.currentUser.id] : updatedState.positions})
            localStorage.setItem("positions", JSON.stringify(updateLocalStorage));

            return updatedState;
        }
        default:
            return state
    }
}

export default userReducer