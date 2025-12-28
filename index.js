
function showGroup(groupNumber) {
    // hide all images
    document.querySelectorAll(".group").forEach(el => {
        el.style.display = "none";
    });

    // show selected group
    document.querySelectorAll(".group" + groupNumber).forEach(el => {
        el.style.display = "block";
    });

    // remove active class from all buttons
    document.querySelectorAll(".gallery-slider-btns").forEach(btn => {
        btn.classList.remove("active");
    });

    // add active class to clicked button
    document
        .querySelectorAll(".gallery-slider-btns")[groupNumber - 1]
        .classList.add("active");
}

// default active (group 1)
showGroup(1);


document.addEventListener("DOMContentLoaded", function () {
    const textEl = document.getElementById("text");
    const toggleBtn = document.getElementById("toggle");

    if (!textEl || !toggleBtn) return;

    const fullText = textEl.innerText;
    const limit = 300; // pwede mo gawing 2000
    let isShort = true;

    if (fullText.length > limit) {
        textEl.innerText = fullText.substring(0, limit) + "...";
    } else {
        toggleBtn.style.display = "none";
    }

    toggleBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if (isShort) {
            textEl.innerText = fullText;
            toggleBtn.innerText = "See less";
        } else {
            textEl.innerText = fullText.substring(0, limit) + "...";
            toggleBtn.innerText = "See more";
        }

        isShort = !isShort;
    });
});


