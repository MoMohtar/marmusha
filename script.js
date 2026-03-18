document.getElementById("submit").onclick = function (event) {
    event.preventDefault();

    let age = document.getElementById("age").value;
    let result = document.getElementById("result");

    result.classList.remove("success", "error");

    if (age === "") {
        result.innerText = " oomrik ⚠️";
        result.classList.add("error");
    } else if (Number(age) === 20) {
        result.innerText = "Access granted 😎 Redirecting...";
        result.classList.add("success");

        setTimeout(() => {
            window.location.href = "Sabaho.html";
        }, 1500);
    } else {
        result.innerText = "Ghalatt hehehee 🔒";
        result.classList.add("error");
    }
};
const card = document.querySelector(".form-container");

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});