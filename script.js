const values = document.querySelectorAll(".valueSum")
const score = document.getElementById("score")
const rating = document.getElementById("rating")
const container = document.getElementById("container")
const circle = document.getElementById("circle")
const button = document.getElementById("continue")
let sum = 0
fetch("data.json")
.then(response => response.json())
.then(data => {
    for (let x = 0; x < data.length; x++) {
        values[x].innerHTML = data[x].score 
        sum += data[x].score
    }
    score.innerHTML = Math.trunc(sum / data.length)
    const result = Number(score.innerHTML)
    console.log(result)
    if (result <= 80 && result >= 60) {
        document.documentElement.setAttribute("data-theme", "great")
        rating.innerText = "Great"
    } else if (result < 80 && result >= 50) {
        document.documentElement.setAttribute("data-theme", "avarage")
        rating.innerText = "Avarage"
        container.style.color = "black"

    } else if (result <  50) {
        document.documentElement.setAttribute("data-theme", "bad")
        rating.innerText = "Bad"
    }
})