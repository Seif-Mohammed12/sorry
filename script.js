const forgiveBtn = document.getElementById("forgive-btn");
const messageDiv = document.getElementById("message");
const kittenImg = document.getElementById("kitten-img");
const kittenMessage = document.getElementById("kitten-message");

let moveCount = 0;

// Different kittens & messages for each tap
const kittens = [
    {
        img: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
        msg: "Look, I live with this guy, and even I think he’s an idiot sometimes."
    },
    {
        img: "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif",
        msg: "His brain? A potato. His heart? 100% yours. I see him think about you all the time."
    },
    {
        img: "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif",
        msg: "He may be dumb, but he’s your dummy. And he loves you more than anything."
    }
];

forgiveBtn.addEventListener("click", () => {
    if (moveCount < kittens.length) {
        // Change kitten and message
        kittenImg.src = kittens[moveCount].img;
        kittenMessage.textContent = kittens[moveCount].msg;

        // Move button to a random position on the screen
        let randomX = Math.random() * (window.innerWidth - 100) + "px";
        let randomY = Math.random() * (window.innerHeight - 100) + "px";

        forgiveBtn.style.position = "absolute";
        forgiveBtn.style.left = randomX;
        forgiveBtn.style.top = randomY;

        moveCount++;
    } else {
        forgiveBtn.style.position = "static"; // Stop moving
        forgiveBtn.style.margin = "20px auto"; // Center the button
        forgiveBtn.textContent = "Fine, tap me.";
        forgiveBtn.removeEventListener("click", arguments.callee);
        forgiveBtn.addEventListener("click", () => {
            forgiveBtn.style.display = "none"; // Hide button
            messageDiv.classList.remove("hidden"); // Show message
        });
    }
});