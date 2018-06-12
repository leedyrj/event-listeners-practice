/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
function handlerFunction (event) {
    let power = document.querySelector('.power')
    power.classList.remove('disable')
    power.classList.toggle('enable')
}

document.querySelector("#activate-flight").addEventListener('click', handlerFunction)

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

document.querySelector("#activate-mindreading").addEventListener('click', handlerFunction)

document.querySelector("#activate-xray").addEventListener('click', handlerFunction)



/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

function activeateAll (event) {
    let allClass = document.querySelectorAll('.power')
        for (let i=0; i<allClass.length; i++){
            if (allClass[i].classList.contains('disabled'))
        allClass[i].classList.remove('disabled')
        allClass[i].classList.add('enabled')
        }
}



document.querySelector("#activate-all").addEventListener('click', activeateAll)

function deactiveateAll (event) {
    let allClass = document.querySelectorAll('.power')
        for (let i=0; i<allClass.length; i++){
            if (allClass[i].classList.contains('enabled'))
        allClass[i].classList.remove('enabled')
        allClass[i].classList.add('disabled')
        }
}



document.querySelector("#deactivate-all").addEventListener('click', deactiveateAll)
