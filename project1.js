function uppercase(){
    let value = document.getElementById("textbox").value;

    // change to uppercase
    let newValue = value.toUpperCase()

    document.getElementById("result").innerHTML = newValue;
}

function lowercase(){
    let value = document.getElementById("textbox").value;

    // change to uppercase
    let newValue = value.toLowerCase()

    document.getElementById("result").innerHTML = newValue;
}

function capitalize(){
    let value = document.getElementById("textbox").value;
    let newValue = value
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
        document.getElementById("result").innerHTML = newValue;
}

function removeSpace(){
    let value = document.getElementById("textbox").value;

    // change to uppercase
    let newValue = value.trim()

    document.getElementById("result").innerHTML = newValue;
}

function replaceWord(){
    let value = document.getElementById("textbox").value;
    let word1 = prompt("Select a word to be replaced")
    let word2 = prompt("Select a word to replace it")
    document.getElementById("result").innerHTML = textbox.value.replace(word1,word2);
}

function countCharacters(){
    let value = document.getElementById("textbox").value;

    // change to uppercase
    let newValue = value.length

    document.getElementById("result").innerHTML = newValue;
}