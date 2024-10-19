let p1ScoreEl = document.getElementById("p1-score");
let p1Score = 0;

function p1AddPoint() {
    p1Score += 1;
    p1ScoreEl.textContent = p1Score;
}

function p1Add5Points() {
    p1Score += 5;
    p1ScoreEl.textContent = p1Score;
}

function p1Add10Points() {
    p1Score += 10;
    p1ScoreEl.textContent = p1Score;
}

function reset() {
    p1ScoreEl.textContent = 0;
    p1Score = 0;
}