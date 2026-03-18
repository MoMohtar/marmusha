document.getElementById("submit").onclick = function (event) {
    event.preventDefault();

    let age = document.getElementById("age").value;
    let result = document.getElementById("result");

    if (age === "") {
        result.innerText = "3OMRIK 20 ⚠️";
    } else if (Number(age) === 20) {
          window.location.href = "Sabaho.html";
    } else {
        result.innerText = "GHALATTT! 🔒";
    }
};