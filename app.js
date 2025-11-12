let main = document.getElementsByTagName("main")[0]
let div = document.createElement("div")

div.classList.add("gallery")

for (let i = 1; i <= 28; i++) {
  let img = document.createElement("img")
  img.setAttribute("src", `images/imagen${i}.jpg`)
  img.setAttribute("alt", `Portada ${i}`)
  div.appendChild(img)
}

main.appendChild(div)