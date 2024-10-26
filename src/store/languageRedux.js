const defaultLang ={
    lang: "eng"
}

function cartReducer(state = defaultLang,action) {
    if (action.type === "ENG") {
        return {...state , lang: 'eng'}
    }else if(action.type === "UZ"){
        return {...state , lang: 'uz'}
     }else{
        return state
     }
}

export default cartReducer