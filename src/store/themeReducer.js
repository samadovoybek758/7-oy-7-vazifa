const defaulttheme ={
    theme : 'light'
}

const themeReducer = (state = defaulttheme, action) => {
    if (action.type === 'LIGHT') {
        return {...state, theme : "light"}
    }else if(action.type === 'DARK'){
        return {...state, theme : "dark"}
    }else{
        return state
    }
}

export default themeReducer;