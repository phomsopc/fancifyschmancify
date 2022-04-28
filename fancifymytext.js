/* caitlin phomsopha
4/28/2021
*/

//bigger
function bigz() {
    var text = document.getElementById("writeme");
    text.style.fontSize = "24pt";
}

//bold
function boldz() {
    var text = document.getElementById("writeme");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
}

//unbold
function boringz() {
    var text = document.getElementById("writeme");
    text.style.fontSize = "initial";
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
}

//uppercase+ -Moo
function mooz() {
    var suffix = '-Moo';
    txt = document.getElementById('writeme');
    txt.style.textTransform = "uppercase";
    txt.value = txt.value.split('.').join('') + suffix;
}