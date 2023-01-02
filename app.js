const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]


const tempDate = new Date()
const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDay = tempDate.getDate()


const giveaway = document.querySelector('.heading4')
const Day = document.querySelector('.Day')
const Hour = document.querySelector('.Hour')
const Minute = document.querySelector('.Minute')
const Second = document.querySelector('.Second')
const offerExpired = document.querySelector('.countdown')

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)
const fullyear = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()

let weekday = futureDate.getDay()
weekday = weekdays[weekday]

giveaway.innerHTML = `Giveaway ends on ${weekday},${date} ${month} ${fullyear}`

const futureTime = futureDate.getTime()


function getRemainingDay() {
    const today = new Date().getTime()
    const t = futureTime - today
    console.log(t)

    const oneDay = 24 * 1000 * 60 * 60
    const oneHour = 1000 * 60 * 60
    const oneMinute = 1000 * 60

    const days = Math.floor(t / oneDay)
    const hours = Math.floor((t % oneDay) / oneHour)
    const min = Math.floor((t % oneHour) / oneMinute)
    const sec = Math.floor((t % oneMinute) / 1000)

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        } else {
            return item
        }
    }

    Day.innerHTML = format(days)
    Hour.innerHTML = format(hours)
    Minute.innerHTML = format(min)
    Second.innerHTML = format(sec)

    if (t < 0) {
        clearInterval(countdown)
        offerExpired.innerHTML = `<h1> Sorry, this giveaway is expired </h1>`
    }
}

let countdown = setInterval(getRemainingDay, 1000)
getRemainingDay()
