setInterval(() => {
    document.querySelector(".author").style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}, 1000)

document.querySelector(".author").addEventListener("click", () => {
    const meows = ["audio/meow_1.mp3", "audio/meow_2.mp3", "audio/meow_3.mp3"]
    let random_meow = Math.floor(Math.random() * 3)
    let meow_audio = new Audio(meows[random_meow])
    
    console.log(`Playing sound: ${meows[random_meow]}`)
    meow_audio.play()
})

const buttonSnippet = `<a href="https://themeowzone.net/" target="_parent"><img src="https://themeowzone.net/files/button.png" alt="TheMeowZone" title="mewo >w<"></a>`

if(document.URL == "https://themeowzone.net/about.html") {
    document.querySelector("#copy_button").addEventListener("click", () => {
        navigator.clipboard.writeText(buttonSnippet)
        alert("Copied the snippet!")
   })
   
   document.querySelector("#my_button").textContent = buttonSnippet
}


