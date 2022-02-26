const tweetDisplay = document.querySelector('.tweet-text')
let i = 1

fetch("https://api.jsonbin.io/b/61fd01f04ce71361b8cde1a3")
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