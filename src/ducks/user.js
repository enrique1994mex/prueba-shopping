
//actions
const USER_LOGIN = 'user/LOGIN';
const USER_LOGOUT = 'user/LOGOUT';

//reducer
const initialState = {
    shopping: [],
    userInfo: null
};

export default function user(state = initialState, action={}) {
    switch (action.type) {
        case USER_LOGIN:
            return handleUserLogin(state, action.payload)
        case USER_LOGOUT:
            return handleUserLogout(state)
        default:
            return state; 
    }
}

function handleUserLogin(state, payload) {
    return {
        ...state,
        userInfo: payload.user
    }; 
} 

function handleUserLogout(state) {
    return {
        ...state,
        userInfo: null,
        shopping: null
    };
}

//action creators
export function loginToUser(user) {
    return {
        type: USER_LOGIN,
        payload: {
            user
        }
    }
}

export function logoutToUser() {
    return {
        type: USER_LOGOUT
    }
}

//selectors
export function getUser(state, props) {
    return state.user.userInfo; 
}

