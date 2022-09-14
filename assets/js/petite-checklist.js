import {
    createApp,
} from 'https://unpkg.com/petite-vue?module'
const addCheckBox = (prop) => {
    return {
        $template: ('#petite_checklist'),
        question: prop.question,
        uniqueId: prop.uniqueId,
        randNum: Math.floor(Math.random() * 6),
        lang: document.querySelector('html').getAttribute('lang'),
    }
}

const textInputVal = (prop) => {
    return {
        $template: ('#petite_ta'),
        question: prop.question,
        isRequired: prop.isRequired,
        personalThought: null,
        isValid: null,
        uniqueId: prop.uniqueId,
        lang: document.querySelector('html').getAttribute('lang'),
        submitForm() {
            if (this.personalThought === null || this.personalThought === '') {
                if (this.isRequired !== true) {
                    this.isValid = true
                } else {
                    this.isValid = false
                }
            } else {
                this.isValid = true
            }
        }
    }
}

createApp({
    addCheckBox,
    textInputVal
}).mount()

console.log('petite vue/checklist is ready')