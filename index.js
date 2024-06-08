let p1ScoreEl = document.getElementById("p1-score");
let p2ScoreEl = document.getElementById("p2-score");
let p3ScoreEl = document.getElementById("p3-score");
let p4ScoreEl = document.getElementById("p4-score");
let p1Score = 0;
let p2Score = 0;
let p3Score = 0;
let p4Score = 0;

function p1AddPoint() {
    p1Score += 1;
    p1ScoreEl.textContent = p1Score;
}

function p2AddPoint() {
    p2Score += 1;
    p2ScoreEl.textContent = p2Score;
}

function p3AddPoint() {
    p3Score += 1;
    p3ScoreEl.textContent = p3Score;
}

function p4AddPoint() {
    p4Score += 1;
    p4ScoreEl.textContent = p4Score;
}

function p1Add5Points() {
    p1Score += 5;
    p1ScoreEl.textContent = p1Score;
}

function p2Add5Points() {
    p2Score += 5;
    p2ScoreEl.textContent = p2Score;
}

function p3Add5Points() {
    p3Score += 5;
    p3ScoreEl.textContent = p3Score;
}

function p4Add5Points() {
    p4Score += 5;
    p4ScoreEl.textContent = p4Score;
}

function p1Add10Points() {
    p1Score += 10;
    p1ScoreEl.textContent = p1Score;
}

function p2Add10Points() {
    p2Score += 10;
    p2ScoreEl.textContent = p2Score;
}

function p3Add10Points() {
    p3Score += 10;
    p3ScoreEl.textContent = p3Score;
}

function p4Add10Points() {
    p4Score += 10;
    p4ScoreEl.textContent = p4Score;
}

function reset() {
    p1ScoreEl.textContent = 0;
    p2ScoreEl.textContent = 0;
    p3ScoreEl.textContent = 0;
    p4ScoreEl.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    p3Score = 0;
    p4Score = 0;
}