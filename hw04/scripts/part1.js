let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'az') {
        language = 'Azerbaijani'
    } else if (code === 'bn') {
        language = 'Bengali'
    } else {
        language = 'Basque'
    }
    document.getElementById('language').innerHTML = language
}
// I think the set language is a javascript function that we've set to change the language.
// Another thing we do is change the wording.
