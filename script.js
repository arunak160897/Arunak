function hello() {
    alert("Thank you for visiting my website!");
}

window.onload = function () {
    console.log("Website Loaded Successfully");
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", function () {
        card.style.transform = "translateY(-10px) scale(1.05)";
    });

    card.addEventListener("mouseout", function () {
        card.style.transform = "translateY(0) scale(1)";
    });
});
