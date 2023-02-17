function inputFieldValue(inputField){
    const inputField = document.getElementById(inputField);
    const inputFieldValueString = parseInt(inputField.value);
    const inputFieldValue = inputFieldValueString;
    return inputFieldValue;
}
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleBaseValue = inputFieldValue('triangle-b');
    console.log(triangleBaseValue);
})