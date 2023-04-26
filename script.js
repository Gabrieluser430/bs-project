const day = document.querySelector(".day")
const month = document.querySelector(".month")
const date = new Date()
const newDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() 
const newMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
day.textContent = newDay;
month.textContent = newMonth;
