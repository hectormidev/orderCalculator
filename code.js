const pieces = document.querySelector('#piecesQuantity')
const perBox = document.querySelector('#perBoxQuantity')
const perLevel = document.querySelector('#perLevelQuantity')
const btn = document.querySelector('.btn')
const results = document.querySelector('.results')

const textBoxes = document.createElement('h3')
const resultBoxes = document.createElement('div')
//add answer to its father container

const textParcials = document.createElement('h3')
const resultParcials = document.createElement('div')
//add answer to its father container

const calculateTotalBoxes = (pieces, perBox) =>{
    pieces = pieces.value
    perBox = perBox.value

    let boxes, boxesToPicked, parcials

    
    if(!isNaN(pieces) && !isNaN(perBox)){
        
        //For get boxes and parcials
            //get boxes with decimals
            boxes = parseInt(pieces / perBox)
            //get boxes number without decimals
            boxesToPicked = boxes * perBox
            //get parcial
            parcials = pieces - boxesToPicked 
            textBoxes.innerHTML = `${boxes} boxes`
            textParcials.innerHTML = `${parcials} parcials`
    } else{
        createResult(`Introduced a valid number`)
    }
    
    
    resultBoxes.appendChild(textBoxes)
    resultParcials.appendChild(textParcials)

    //add result to results list
    results.appendChild(resultBoxes)
    results.appendChild(resultParcials)
} 




btn.addEventListener('click', e =>{
    e.preventDefault()
    
    calculateTotalBoxes(pieces, perBox)
})