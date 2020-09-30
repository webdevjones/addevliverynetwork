const adReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADS':
            return [...action.data]
        case 'ADD_AD':
            return [action.data, ...state]
        case 'DELETE_AD':
            return state.filter(elem => elem.id !== action.data)
        case 'SET_CURR':
            return state.map(elem => {
                if (elem.id === action.id) {
                    elem.current = 1
                }
                else if (elem.type === action.adtype) {
                    elem.current = 0
                }
                else {
                    //doesnt get here
                }
                return elem
            })
        case 'NO_CURR':
            return state.map(elem => {
                if (elem.type === action.data && elem.current === 1) {
                    elem.current = 0
                }
                return elem
            })
        default:
            return state
    }
}

export const setAds = (ads) => {
    return {
        type: 'SET_ADS',
        data: ads
    }
}
export const deleteAd = (id) => {
    return {
        type: 'DELETE_AD',
        data: id
    }
}

export const noCurrByType = (type) => {
    return {
        type: 'NO_CURR',
        data: type
    }
}

export const setCurrId = (id, type) => {
    return {
        type: 'SET_CURR',
        id: id,
        adtype: type
    }
}

export const addAdStore = (ad) => {
    return {
        type: 'ADD_AD',
        data: ad
    }
}


export default adReducer