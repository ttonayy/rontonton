function checkAnswer() {
    var answer = document.getElementById("answer").value.toLowerCase();
    if (answer === "bakırköy") {
        document.body.classList.add("flash");
        document.getElementById("success-msg").classList.remove("hidden");
    }
}
