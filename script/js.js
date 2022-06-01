const cpBg = document.getElementById("cpBg");
const body = document.getElementsByTagName("Body")[0];



cpBg.addEventListener('change', function() {
    body.style.backgroundColor = cpBg.nodeValue;
})