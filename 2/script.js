let countEl = document.getElementById("btn__state")

console.log(countEl)
let count = 0 

function increment() {
    count = count + 1
    countEl.innerText = count
}