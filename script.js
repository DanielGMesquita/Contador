let currentNumber = 0
const currentNumberWrapper = document.getElementById('currentNumber')
const buttonIncrement = document.getElementById('increment')
const buttonDecrement = document.getElementById('decrement')

function counterStyle(){
    if (currentNumber<0){
        currentNumberWrapper.classList.add('negative')
    } else {
        currentNumberWrapper.classList.remove('negative')
    }
}

function counterLimits(){
    if (currentNumber <= -10 ){
        buttonDecrement.disabled = true
    } else if(currentNumber >= 10) {
        buttonIncrement.disabled = true
    } else {
        buttonDecrement.disabled = false
        buttonIncrement.disabled = false
    }
}

buttonIncrement.addEventListener('click', function(){
    currentNumber += 1
    currentNumberWrapper.innerHTML = currentNumber
    counterStyle()
    counterLimits()
})

buttonDecrement.addEventListener('click', function(){
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber
    counterStyle()
    counterLimits()
})



