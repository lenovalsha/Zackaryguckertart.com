// ACTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var myImage = document.getElementById("currentImage");
var myDramaImage = document.getElementById("currentImageDrama");
var my30MinorLessImage = document.getElementById("currentImage30minorLess");

var first = 0, Second = 0, imageIndex = 1;
var x = 0, y = 0, z = 1;
var a = 0, b = 0, c = 1;

const actionButton = document.querySelector('#backButton');
const dramaButton = document.querySelector('#dramaButton');
const _30minButton = document.querySelector('#_30minButton');
if (imageIndex == 1 && Second == 0 && first == 0) {
    actionButton.disabled = true;
}

function nextAction() {
    actionButton.disabled = false;
    imageIndex++;

    if (imageIndex == 10) {
        imageIndex = 0;
        Second++;
        if (Second == 10) {
            Second = 0;
            first++;
        }
    }
    myImage.setAttribute("src", "images/SBAction/Individual/action/SubwayActionAnimatic-board-00" + first + Second + imageIndex + ".png");
}
function backAction() {
    imageIndex--;
    if (imageIndex == 1 && Second == 0 && first == 0) {
        actionButton.disabled = true;
    }


    Second = Second;
    if (imageIndex == 0) {
        imageIndex = 9;
        Second--;
        if (Second == 10) {
            Second = 0;
            first--;
        }
    }
    myImage.setAttribute("src", "images/SBAction/Individual/action/SubwayActionAnimatic-board-00" + first + Second + imageIndex + ".png");
}


// Drama

function nextDrama() {
    dramaButton.disabled = false;
    z++;

    if (z == 10) {
        z = 0;
        y++;
        if (y == 10) {
            y = 0;
            x++;
        }
    }
    myDramaImage.setAttribute("src", "images/Drama/Cage of Furry Goods/individual/CoFStoryboardFile-board-00" + x + y + z + ".png");
}
function backDrama() {
    z--;
    if (z == 1 && y == 0 && x == 0) {
        dramaButton.disabled = true;
    }


    y = y;
    if (z == 0) {
        z = 9;
        y--;
        if (x == 10) {
            y = 0;
            x--;
        }
    }
    myDramaImage.setAttribute("src", "images/Drama/Cage of Furry Goods/individual/CoFStoryboardFile-board-00" + x + y + z + ".png");
}

// 30minorLess

if (c == 1 && b == 0 && a == 0) {
    _30minButton.disabled = true;
}
function next30Min() {
    _30minButton.disabled = false;
    c++;

    if (c == 10) {
        c = 0;
        b++;
        if (b == 10) {
            b = 0;
            a++;
        }
    }
    my30MinorLessImage.setAttribute("src", "images/Action/30minorLess/individual/30MinStoryboardFile-board-00" + a + b + c + ".png");
}
function back30Min() {
    c--;
    if (c == 1 && b == 0 && a == 0) {
        _30minButton.disabled = true;
    }


    b = b;
    if (c == 0) {
        c = 9;
        b--;
        if (a == 10) {
            b = 0;
            a--;
        }
    }
    my30MinorLessImage.setAttribute("src", "images/Action/30minorLess/individual/30MinStoryboardFile-board-00" + a + b + c + ".png");
}