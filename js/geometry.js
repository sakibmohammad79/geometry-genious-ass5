 function inputFieldValue(inputFieldId){
     const inputField = document.getElementById(inputFieldId);
     const inputFieldValueString = parseFloat(inputField.value);
     const inputFieldValue = inputFieldValueString;
     return inputFieldValue;
}
function textFieldValue(textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldName = textField.innerText;
    return textFieldName;
}
//triangle calculation start here
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleBaseValue = inputFieldValue('triangle-b');
    const trianglehightValue = inputFieldValue('triangle-h');
    if(isNaN(triangleBaseValue) || triangleBaseValue <= 0 || isNaN(trianglehightValue) || triangleBaseValue <= 0 ){
        alert('Please Enter the valid value');
    }
    else{
        const triangleResult = 0.5 * triangleBaseValue * trianglehightValue;

        const triangleResultSet = document.getElementById('triangle-result');
    triangleResultSet.innerText = triangleResult.toFixed(2);

    const triangleName = textFieldValue('triangle-name');
    const triangleNameSet = document.getElementById('triangle-name-set');
    triangleNameSet.innerText = triangleName;
    
    }
})
// triangle calculation end here
//rectangle calculation start here
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidthValue = inputFieldValue('rectangle-w');
    const rectanglelengthValue = inputFieldValue('rectangle-l');
    if(isNaN(rectangleWidthValue) || rectangleWidthValue <= 0 || isNaN(rectanglelengthValue) || rectanglelengthValue <= 0 ){
        alert('Please Enter the valid value');
    }
    else{
        const rectangleResult = rectangleWidthValue * rectanglelengthValue;

    const rectangleResultSet = document.getElementById('rectanagle-result');
    rectangleResultSet.innerText = rectangleResult.toFixed(2);

    const rectangleName = textFieldValue('rectangle-name');
    const rectangleNameSet = document.getElementById('rectangle-name-set');
    rectangleNameSet.innerText = rectangleName;
    }
})
//rectangle calculation end here
//Parallelogram calculation start here
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const ParallelogramBaseValue = inputFieldValue('parallelogram-b');
    const ParallelogramhightValue = inputFieldValue('parallelogram-h');
    if(isNaN(ParallelogramBaseValue) || ParallelogramBaseValue <= 0 || isNaN(ParallelogramhightValue) || ParallelogramhightValue <= 0 ){
        alert('Please Enter the valid value');
    }
    else{
        const parallelogramResult = ParallelogramBaseValue * ParallelogramhightValue;

    const parallelogramResultSet = document.getElementById('parallelogram-result');
    parallelogramResultSet.innerText = parallelogramResult.toFixed(2);

    const parallelogramName = textFieldValue('parallelogram-name');
    const parallelogramNameSet = document.getElementById('parallelogram-name-set');
    parallelogramNameSet.innerText = parallelogramName;
    }
})
//Parallelogram calculation end here
//Parallelogram calculation start here
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusD1Value = inputFieldValue('rhombus-b');
    const rhombusD2Value = inputFieldValue('rhombus-h');
    if(isNaN(rhombusD1Value) || rhombusD1Value <= 0 || isNaN(rhombusD2Value) || rhombusD1Value <= 0 ){
        alert('Please Enter the valid value');
    }
    else{
        const rhombusResult = 0.5 * rhombusD1Value * rhombusD1Value;

    const rhombusResultSet = document.getElementById('rhombus-result');
    rhombusResultSet.innerText = rhombusResult.toFixed(2);

    const rhombusName = textFieldValue('rhombus-name');
    const rhombusNameSet = document.getElementById('rhombus-name-set');
    rhombusNameSet.innerText = rhombusName;
    }
})
//Parallelogram calculation end here
//Pentagon calculation start here
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonPValue = inputFieldValue('pentagon-p');
    const pentagonBValue = inputFieldValue('pentagon-b');
    if(isNaN(pentagonPValue) || pentagonPValue <= 0 || isNaN(pentagonBValue) || pentagonBValue <= 0 ){
        alert('Please Enter the valid value');
    }
    else{
        const pentagonResult = 0.5*(pentagonPValue * pentagonBValue);

    const pentagonResultSet = document.getElementById('pentagon-result');
    pentagonResultSet.innerText = pentagonResult.toFixed(2);

    const pentagonName = textFieldValue('pentagon-name');
    const pentagonNameSet = document.getElementById('pentagon-name-set');
    pentagonNameSet.innerText = pentagonName;
    }
})
//Pentagon calculation end here
//Ellips calculation start here
document.getElementById('ellips-btn').addEventListener('click', function(){
    const ellipsAValue = inputFieldValue('ellips-a');
    const ellipsBValue = inputFieldValue('ellips-b');
    if(isNaN(ellipsAValue) || ellipsAValue <= 0 || isNaN(ellipsBValue) || ellipsBValue <= 0 ){
        alert('Please Enter the valid value');
    }
    else{
        const ellipsResult = 3.14*(ellipsAValue * ellipsBValue);

    const ellipsResultSet = document.getElementById('ellips-result');
    ellipsResultSet.innerText = ellipsResult.toFixed(2);

    const ellipsName = textFieldValue('ellips-name');
    const ellipsNameSet = document.getElementById('ellips-name-set');
    ellipsNameSet.innerText = ellipsName;
    }
})
//Ellips calculation end here
const cardId = document.getElementById('card1').addEventListener('mouseenter', function(){
    
})

