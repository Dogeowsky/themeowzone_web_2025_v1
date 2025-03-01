setInterval(() => {
    document.querySelector(".author").style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}, 1000)

const meow_audio = new Audio('audio/meow.mp3')

document.querySelector(".author").addEventListener("click", () => {
    meow_audio.play()
})
