const tweetDisplay = document.querySelector('.tweet-text')
let i = 1

fetch("https://api.jsonbin.io/b/621e98ad7caf5d67835cdb18")
    .then(response => {
        return response.json()
    })
    .then(jsondata => {
        tweetDisplay.innerText = jsondata[0].text
        window.setInterval(() => {
            tweetDisplay.innerText = jsondata[i].text
            i++
        }, 3000)
    })