export const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};

export const set = (n) => {
    return {
        type: 'SET',
        payload: n
    }
}

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
};
