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
        isRequired: prop.isRequired,
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
                    setTimeout(() => {
                        lang !== 'en' ?
                            console.log(`Activité terminée. Félicitations ${doLMSGetValue("cmi.core.student_name")}`) :
                            console.log(`Activity completed. Congratulations ${doLMSGetValue("cmi.core.student_name")}`)
                        doLMSFinish()
                    }, 2000)
                } else {
                    this.isValid = false
                }
            } else {
                this.isValid = true
                setTimeout(() => {
                    lang !== 'en' ?
                        console.log(`Activité terminée. Félicitations ${doLMSGetValue("cmi.core.student_name")}`) :
                        console.log(`Activity completed. Congratulations ${doLMSGetValue("cmi.core.student_name")}`)

                    doLMSFinish()
                }, 2000)
            }
        }
    }
}

createApp({
    addCheckBox,
    textInputVal
}).mount()

lang !== 'en' ?
    console.log(
        `${doLMSGetValue("cmi.core.student_name")} est connecté.`
    ) :
    console.log(
        `${doLMSGetValue("cmi.core.student_name")} is logged in.`
    );