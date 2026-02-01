const values = document.querySelectorAll(".valueSum")
const result = document.getElementById("result")
let sum = 0
fetch("data.json")
.then(response => response.json())
.then(data => {
    for (let x = 0; x < data.length; x++) {
        values[x].innerHTML = data[x].score 
        sum += data[x].score
    }
    result.innerHTML = Math.trunc(sum / data.length)
})