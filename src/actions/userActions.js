export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const getUserPositionsFromLocalStorage = () => {
    return {
        type: 'GET_USER_POSITIONS_FROM_LOCAL_STORAGE'
    }
}

export const setUserPositionsToLocalStorage = (componentName, deltaX, deltaY) => {
    return {
        type: 'SET_USER_POSITIONS_TO_LOCAL_STORAGE',
        componentName,
        deltaX,
        deltaY
    }
}

