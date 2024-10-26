const defaultLang ={
    lang: "en"
}

function languageReducer(state = defaultLang,action) {
    if (action.type === "en") {
        return {...state , lang: 'en'}
    }else if(action.type === "uz"){
        return {...state , lang: 'uz'}
     }else if(action.type === "ru"){
        return {...state , lang: 'ru'}
     }else{
        return state
     }
}

export default languageReducer