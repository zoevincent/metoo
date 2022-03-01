let data;
const colors = ['#292D32', '#F15A69'];

function setup() {
    p6_CreateCanvas();
    noLoop();
}

function windowResized() {
    p6_ResizeCanvas();
}

function preload() {
    let url = 'https://api.jsonbin.io/b/621e98ad7caf5d67835cdb18';
    data = loadJSON(url);
}

function draw() {
    background(255, 250, 245);
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        let size = map(data[i].retweet_count, 0, 215, 20, 200)
        if (data[i].category == 1) {
            fill(colors[0]);
        }
        else if (data[i].category == 0) {
            fill(colors[1]);
        }
        noStroke();
        ellipse(x, y, size);
    }
}