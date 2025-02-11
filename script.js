const forgiveBtn = document.getElementById("forgive-btn");
const messageDiv = document.getElementById("message");
const kittenImg = document.getElementById("kitten-img");
const kittenMessage = document.getElementById("kitten-message");

let moveCount = 0;

// Different kittens & messages for each dodge
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

forgiveBtn.addEventListener("mouseover", () => {
    if (moveCount < kittens.length) {
        // Change kitten and message
        kittenImg.src = kittens[moveCount].img;
        kittenMessage.textContent = kittens[moveCount].msg;

        // Move button to random location
        let randomX = Math.random() * 200 - 100; 
        let randomY = Math.random() * 200 - 100; 

        forgiveBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        moveCount++;
    } else {
        forgiveBtn.style.transform = "none"; // Stop moving
    }
});

forgiveBtn.addEventListener("click", () => {
    forgiveBtn.style.display = "none"; // Hide button
    messageDiv.classList.remove("hidden"); // Show message
});