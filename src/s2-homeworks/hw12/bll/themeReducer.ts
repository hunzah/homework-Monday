type StateType = {
    themeId: number
}
const initState:StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID' :
            return {
               ...state,themeId:action.id
            }
        default:
            return state
    }
}

type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
};
export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
