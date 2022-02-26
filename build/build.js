var data;
var number;
var ratio;
var mycolor = ['#292D32', '#F15A69'];
function setup() {
    p6_CreateCanvas();
    noLoop();
}
function windowResized() {
    p6_ResizeCanvas();
}
function preload() {
    var url = 'https://api.jsonbin.io/b/61fd01f04ce71361b8cde1a3';
    data = loadJSON(url);
}
function draw() {
    background(255, 250, 245);
    for (var i = 0; i < 100; i++) {
        var counter = data[i].favorite_count + data[i].retweet_count;
        if (counter > counter * 0.75) {
            var ratio = counter / 4;
        }
        else if (counter < counter * 0.25) {
            var ratio = counter * 4;
        }
        else {
            var ratio = counter;
        }
        var size = Math.round(ratio);
        if (data[i].category == 1) {
            fill(mycolor[0]);
            noStroke();
            ellipse(i * size * random() * 2, i * size * random() / 2, size, size);
        }
        else if (data[i].category == 0) {
            fill(mycolor[1]);
            noStroke();
            ellipse(i * size * random() * 2, i * size * random() / 2, size, size);
        }
    }
    ellipse(30, 30, width / 50, height / 50);
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map