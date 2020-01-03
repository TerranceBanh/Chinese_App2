'use strict'

const duplicateAudit = (arr) => {// Take array of objects with property str and replaces matching string value
    let questionsLen = arr.length   // Cached for performance
    let filterArr = []

    // Replaces duplicate answers with placeholder text
    for (let i = 0; i < questionsLen; i++) {
        let answersArr = arr[i].answers // Cached for performance
        let answersLen = answersArr.length // Cached for performance
        let library = arr[i].library 
        for (let j = 0; j < answersLen; j++) {
            let answer = answersArr[j].str // Cached for performance
            for (let k = 0; k < answersLen; k++) {
                if (answer === answersArr[k].str && j !== k) {
                    answersArr.splice(k, 1, { str: 'DUPLICATE ANSWER', bool: false })
                }
            }
        }
        for (let j = 0; j < answersLen; j++) {
            if (answersArr[j].str !== 'DUPLICATE ANSWER') filterArr.push(answersArr[j])
        }
        for (let j = 0; j < answersLen; j++) {
            if (answersArr[j].str === 'DUPLICATE ANSWER')            
                answersArr.splice(j, 1, { str: randomAnswer({ arr: answers[library], a: filterArr, }), bool: false }),
                filterArr.push(answersArr[j])
        }
        filterArr = []
        // console.log(arr[i].answers)
    }
    return arr
}