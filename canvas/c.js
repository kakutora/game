var map = [
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
];

const SMOOTH = 0;//補完処理

const INTERVAL = 15;//フレームレート設定

const VTL_WIDTH = 512;//マップの幅の総ピクセル数
const VTL_HEIGHT = 512;//マップの高さの総ピクセル数

const MAP_WIDTH = 16;//マップの幅（マス）
const MAP_HEIGHT = 16;//マップの高さ（マス）

const TILESIZE = 32;

let vScreen;//仮想画面
let rScreen;//実画面
let rWidth;//実画面の幅
let rHeight;//実画面の高さ

let mapImg;//マップチップ画像
let ricoImg;//マップチップ画像

const img = {//画像パス
    map: "/img/map.png",
    rico: "/img/rico.png"
};

const loadImage = () => {
    mapImg = new Image();
    mapImg.src = img.map;

    ricoImg = new Image();
    ricoImg.src = img.rico;
};

let playerX = 32;
let playerY = 32;
//let ricoMove = 0;
let moveX = 0;
let moveY = 0;

var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

window.addEventListener('load', () => {
    loadImage();
    vScreen = document.createElement('canvas');
    vScreen.width = VTL_WIDTH;
    vScreen.height = VTL_HEIGHT;

    canvasSize();
    window.addEventListener("resize", () => { canvasSize(); });

    setInterval(() => { mainLoop(); }, INTERVAL);
});

const canvasSize = () => {
    const c = document.querySelector('#canvas');
    c.width = window.innerWidth / 1.15;
    c.height = window.innerHeight / 1.15;

    const ctx = c.getContext("2d");
    ctx.imageSmoothingEnabled = ctx.msImageSmoothingEnabled = SMOOTH;

    rWidth = c.width;
    rHeight = c.height;

    if (rWidth / VTL_WIDTH < rHeight / VTL_HEIGHT) {
        rHeight = rWidth * VTL_HEIGHT / VTL_WIDTH;
    } else {
        rWidth = rHeight * VTL_WIDTH / VTL_HEIGHT;
    }
};

const mainLoop = () => {
    realPaint();
};

const realPaint = () => {
    vtrPaint();

    const c = document.querySelector('#canvas');
    const ctx = c.getContext("2d");

    ctx.drawImage(vScreen, 0, 0, vScreen.width, vScreen.height, 0, 0, rWidth, rHeight);
};

const vtrPaint = () => {
    const ctx = vScreen.getContext("2d");
    paintField(ctx);
};

const paintField = (ctx) => {
    for (let dy = 0; dy < map.length; dy++) {
        for (let dx = 0; dx < map[dy].length; dx++) {
            ctx.drawImage(
                mapImg,
                TILESIZE * map[dy][dx], 0, TILESIZE, TILESIZE,
                TILESIZE * dx, TILESIZE * dy, TILESIZE, TILESIZE
            );
        }
    }

    ctx.drawImage(ricoImg, playerX, playerY);
};

const keyDown = (event, px, py) => {
    let px2 = px;
    let py2 = py;
    let key_code = event.keyCode;
    if (key_code === 37) moveX -= TILESIZE;
    if (key_code === 38) moveY -= TILESIZE;
    if (key_code === 39) moveX += TILESIZE;
    if (key_code === 40) moveY += TILESIZE;

    let mx = Math.floor((px2 + moveX) / TILESIZE);
    let my = Math.floor((py2 + moveY) / TILESIZE);

    mx += MAP_WIDTH;
    mx %= MAP_WIDTH;
    my += MAP_HEIGHT;
    my %= MAP_HEIGHT;

    if (map[my][mx] == 1) {
        moveX = 0;
        moveY = 0;
    }
    console.log(my, mx);
    py2 += moveY;
    px2 += moveX;
    moveX = 0;
    moveY = 0;

    px2 += (MAP_WIDTH * TILESIZE);
    px2 %= (MAP_WIDTH * TILESIZE);
    py2 += (MAP_HEIGHT * TILESIZE);
    py2 %= (MAP_HEIGHT * TILESIZE);

    px = px2;
    py = py2;

    event.preventDefault();
};

addEventListener("keydown", (e) => {
    keyDown(e, playerX, playerY);
}, false);