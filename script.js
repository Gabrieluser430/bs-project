const date = new Date()
const formattedDate = date.toLocaleDateString("pt-BR")
const day = formattedDate.slice(0, 2)
const month = formattedDate.slice(3, 5)
document.querySelector(".day").textContent = day
document.querySelector(".month").textContent = month

