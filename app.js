document.getElementById("yesBtn").addEventListener("click", function () {
    document.getElementById("response").innerText = "Yay! ❤️ Can't wait to see you soon!";
});

const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", function (event) {
    const rect = noBtn.getBoundingClientRect();
    const distance = Math.hypot(event.clientX - (rect.left + rect.width / 2), event.clientY - (rect.top + rect.height / 2));

    if (distance < 100) { // If the cursor is within 100px, move the button
        let newX = Math.random() * (window.innerWidth - rect.width);
        let newY = Math.random() * (window.innerHeight - rect.height);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    }
});