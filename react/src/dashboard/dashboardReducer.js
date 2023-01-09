const INICIAL_STATE = {usersAll: 0, active: 0, del: 0, block: 0} 

export default function(state = INICIAL_STATE, action) {
    switch (action.type) {
        case 'USERS_FETCHED':
            return { ...state, usersAll: action.payload.data[0] }
        case 'USERS_B_FETCHED':
            return { ...state, block: action.payload.data[0] }
        case 'USERS_E_FETCHED':
            return { ...state, del: action.payload.data[0] }
        default:
            return state
    }
}