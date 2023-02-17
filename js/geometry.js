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
    triangleResultSet.innerText = triangleResult;

    const triangleName = textFieldValue('triangle-name');
    const triangleNameSet = document.getElementById('triangle-name-set');
    triangleNameSet.innerText = triangleName;
    }
})
// triangle calculation end here
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidthValue = inputFieldValue('rectangle-w');
    const rectanglelengthValue = inputFieldValue('rectangle-l');
    if(isNaN(rectangleWidthValue) || rectangleWidthValue <= 0 || isNaN(rectanglelengthValue) || rectanglelengthValue <= 0 ){
        alert('Please Enter the valid value');
    }
    else{
        const rectangleResult = rectangleWidthValue * rectanglelengthValue;

    const rectangleResultSet = document.getElementById('rectanagle-result');
    rectangleResultSet.innerText = rectangleResult;

    const rectangleName = textFieldValue('rectangle-name');
    const rectangleNameSet = document.getElementById('rectangle-name-set');
    rectangleNameSet.innerText = rectangleName;
    }
})