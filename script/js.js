const cpBg = document.getElementById("cpBg");
const body = document.getElementsByTagName("body")[0];



cpBg.addEventListener('change', function() {
    body.style.backgroundColor = cpBg.Value;
})