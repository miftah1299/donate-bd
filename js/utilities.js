// common functions for reusability
// for input fields
function getInputFieldById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    console.log(id, inputNumber);
    return inputNumber;
}

// for text fields
function getTextFieldById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    console.log(id, textNumber);
    return textNumber;
}

// show section by id
function showSectionById(id) {
    document.getElementById("history").classList.add("hidden");
    document.getElementById("donation").classList.add("hidden");

    // show section
    document.getElementById(id).classList.remove("hidden");

    // show color
}


// show modal
