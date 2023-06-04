const gMap = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 3, 6, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3, 3, 6, 6, 7, 7, 7, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 6, 3, 0, 0, 0, 3, 3, 0, 6, 6, 6, 0, 0, 0,
    0, 0, 3, 3, 6, 6, 6, 7, 7, 2, 2, 2, 7, 7, 2, 2, 2, 7, 7, 6, 3, 3, 3, 6, 6, 3, 6, 13, 6, 0, 0, 0,
    0, 3, 3, 10, 11, 3, 3, 6, 7, 7, 2, 2, 2, 2, 2, 2, 1, 1, 7, 6, 6, 6, 6, 6, 3, 0, 6, 6, 6, 0, 0, 0,
    0, 0, 3, 3, 3, 0, 3, 3, 3, 7, 7, 2, 2, 2, 2, 7, 7, 1, 1, 6, 6, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 7, 7, 7, 7, 2, 7, 6, 3, 1, 3, 6, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 7, 2, 7, 6, 3, 1, 3, 3, 6, 6, 3, 0, 0, 0, 3, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 0, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 6, 7, 7, 7, 6, 3, 1, 1, 3, 3, 6, 3, 3, 0, 3, 12, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 7, 7, 6, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 6, 6, 6, 6, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6, 6, 3, 3, 3, 3, 1, 1, 3, 3, 3, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 5, 3, 3, 3, 6, 6, 6, 3, 3, 3, 1, 1, 1, 1, 1, 3, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 8, 9, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 3, 3, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 6, 3, 6, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 6, 3, 6, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 6, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0,
    7, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7,
];

let gEncounter = [0, 0, 0, 1, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0];//敵エンカウント


const INTERVAL = 33;//フレームレート
const SCROLL = 2;//スクロール速度

const HEIGHT = 120;//仮想画面の高さ(px)
const WIDTH = 128;//仮想画面の幅(px)

const MAP_WIDTH = 32;//マップの幅（マス）
const MAP_HEIGHT = 32;//マップの高さ（マス）

const SCR_WIDTH = 8;//画面タイルサイズの半分の幅
const SCR_HEIGHT = 8;//画面タイルサイズの半分の高さ

const CHRHEIGHT = 9;//キャラの高さ(px)
const CHRWIDTH = 8;//キャラの幅(px)

const SMOOTH = 0;//補完処理

const FONT = "12px monospace";
const FONTSTYLE = "#ffffff";

const TILESIZE = 8;//タイルサイズ（ドット）
const TILECOLUMN = 4;//タイル桁数
const TILEROW = 4;//タイル行数

const gFile = {
    map: "../../img/map.png",
    player: "../../img/player.png",
    monster: "../../img/monster.png"
};

const WNDSTYLE = "rgba(0,0,0,0.75)";

const START_X = 15;//開始位置
const START_Y = 17;//開始位置

const gKey = new Uint8Array(0x100);//キー入力バッファ

const START_HP = 20;

let gScreen;//仮想画面の変数を定義
let gWidth;//実画面の幅
let gHeight;//実画面の高さ
let gFrame = 0;
let gImgMap;
let gImgPlayer;
let gImgMonster;
let gPlayerX = START_X * TILESIZE + TILESIZE / 2;//プレイヤー座標
let gPlayerY = START_Y * TILESIZE + TILESIZE / 2;
let gAngle = 0;

let gMoveX = 0;//移動量
let gMoveY = 0;

let gMessage1 = null;//表示メッセージ
let gMessage2 = null;//表示メッセージ

let gItem = 0;//所持アイテム

let gHP = START_HP;//プレイヤーのHP
let gMHP = START_HP;//プレイヤーの最大HP
let gLv = 1;//プレイヤーのレベル
let gEx = 0;//プレイヤーの経験値

let gPhase = 0;//戦闘フェーズ

let gCursor = 0;

let gEnemyType;//敵種別

window.addEventListener("load", () => {
    LoadImage();

    gScreen = document.createElement("canvas");//仮想画面を作成
    gScreen.width = WIDTH;//定義済みの仮想画面の幅を、実際に適用
    gScreen.height = HEIGHT;//定義済みの仮想画面の高さを、実際に適用

    WmSize();//ロード時サイズ計測、適用
    window.addEventListener("resize", () => { WmSize(); });//リサイズ時サイズ計測、適用
    setInterval(() => { WmTimer(); }, INTERVAL);//メインループ
});

const WmTimer = () => {//すべての処理をループさせるための関数
    gFrame++;
    TickField();//フィールド進行処理
    WmPaint();
};

const LoadImage = () => {
    gImgMap = new Image();//仮想画面に描画するマップチップ画像の準備
    gImgMap.src = gFile.map;//マップチップ画像の取得

    gImgMonster = new Image();
    gImgMonster.src = gFile.monster;

    gImgPlayer = new Image();
    gImgPlayer.src = gFile.player;
};

const WmSize = () => {//サイズに関連する処理
    //html上のcanvasを取得し、ブラウザの幅と高さを設定
    const c = document.querySelector('#canvas');
    c.width = window.innerWidth / 1.3;
    c.height = window.innerHeight / 1.3;
    //

    //コンテキスト取得して、2行目の構文で補完処理（くっきり）
    const ctx = c.getContext("2d");
    ctx.imageSmoothingEnabled = ctx.msImageSmoothingEnabled = SMOOTH;
    //


    //実画面サイズを計測。ドットのアス比を維持したままの最大サイズを計測
    //ブラウザ幅と高さを代入、
    //
    gWidth = c.width;
    gHeight = c.height;
    if (gWidth / WIDTH < gHeight / HEIGHT) {//高さの値
        gHeight = gWidth * HEIGHT / WIDTH;
    } else {//幅の値
        gWidth = gHeight * WIDTH / HEIGHT;
    }
    //
};

const WmPaint = () => {//canvasへの描画関連の処理の関数
    DrawMain();

    //html上のcanvasとコンテキストを取得し、仮想画面の描画を実画面へ描画
    const c = document.querySelector('#canvas');
    const ctx = c.getContext("2d");

    //仮想画面の描画を、実画面へ描画
    ctx.drawImage(gScreen, 0, 0, gScreen.width, gScreen.height, 0, 0, gWidth, gHeight);
    //
};

const DrawMain = () => {//「仮想画面」に描画する
    //仮想画面のcanvasコンテキスト取得
    const ctx = gScreen.getContext("2d");

    if (gPhase == 0) {
        DrawField(ctx);
    } else {
        DrawFight(ctx);
    }

    /*
    ctx.fillStyle = WNDSTYLE;//ウィンドウの色
    ctx.fillRect(20, 3, 105, 15);//矩形描画

    ctx.font = FONT;
    ctx.fillStyle = FONTSTYLE;
    ctx.fillText("x=" + gPlayerX + "y=" + gPlayerY + "m=" + gMap[my * MAP_WIDTH + mx], 25, 15);
    */
};

const DrawFight = (ctx) => { //戦闘画面描画
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    let w = gImgMonster.width / 4;
    let h = gImgMonster.height;

    ctx.drawImage(gImgMonster, gEnemyType * w, 0, w, h, Math.floor(WIDTH / 2 - w / 2), Math.floor(HEIGHT / 2 - h / 2), w, h);

    DrawStatus(ctx);
    DrawMessage(ctx);

    if (gPhase == 2) {//戦闘フェイズがコマンド選択中の場合
        ctx.fillText("⇒", 6, 96 + 14 * gCursor);//カーソル描画
    }

};

const DrawField = (ctx) => {//フィールド描画処理
    let mx = Math.floor(gPlayerX / TILESIZE);//プレイヤーのタイル座標X
    let my = Math.floor(gPlayerY / TILESIZE);//プレイヤーのタイル座標Y

    //仮想画面にマップチップで描画
    for (let dy = -SCR_HEIGHT; dy <= SCR_HEIGHT; dy++) {
        let ty = my + dy;                           //タイル座標Y
        let py = (ty + MAP_HEIGHT) % MAP_HEIGHT;    //ループ後タイル座標Y
        for (let dx = -SCR_WIDTH; dx <= SCR_WIDTH; dx++) {
            let tx = mx + dx;                       //タイル座標Y
            let px = (tx + MAP_WIDTH) % MAP_WIDTH;  //ループ後タイル座標X
            DrawTile(
                ctx,
                tx * TILESIZE + WIDTH / 2 - gPlayerX,
                ty * TILESIZE + HEIGHT / 2 - gPlayerY,
                gMap[py * MAP_WIDTH + px]
            );
        }
    }

    //キャラの位置やキャラチップ切り替え
    ctx.drawImage(
        gImgPlayer,
        (gFrame >> 3 & 1) * CHRWIDTH, gAngle * CHRHEIGHT, CHRWIDTH, CHRHEIGHT,
        WIDTH / 2 - CHRWIDTH / 2, HEIGHT / 2 - CHRHEIGHT + TILESIZE / 2, CHRWIDTH, CHRHEIGHT
    );

    //ステータスウィンドウ
    ctx.fillStyle = WNDSTYLE;//ウィンドウの色
    ctx.fillRect(2, 2, 44, 37);//矩形描画
    DrawStatus(ctx);

    DrawMessage(ctx);
};

const DrawMessage = (ctx) => {//メッセージ描画

    if (!gMessage1) { return; }

    ctx.fillStyle = WNDSTYLE;//ウィンドウの色
    ctx.fillRect(4, 84, 120, 30);//矩形描画

    ctx.font = FONT;
    ctx.fillStyle = FONTSTYLE;

    ctx.fillText(gMessage1, 20, 96);//１行目表示
    if (gMessage2) {
        ctx.fillText(gMessage2, 20, 110);//１行目表示
    }
};

const DrawStatus = (ctx) => {//ステータス描画
    ctx.font = FONT;
    ctx.fillStyle = FONTSTYLE;
    ctx.fillText("Lv " + gLv, 4, 13);//Lv
    ctx.fillText("HP " + gHP, 4, 25);//HP
    ctx.fillText("Ex " + gEx, 4, 37);//Ex
};

const DrawTile = (ctx, x, y, idx) => {//map描画
    //マップチップの左から何番目か
    const ix = (idx % TILECOLUMN) * TILESIZE;
    //マップチップの上から何番目か
    const iy = Math.floor(idx / TILECOLUMN) * TILESIZE;
    //上の2つで得た情報からマップチップ切り取り
    ctx.drawImage(gImgMap, ix, iy, TILESIZE, TILESIZE, x, y, TILESIZE, TILESIZE);
};

const keydownfunc = (event) => {
    //押されたボタンに割り当てられた数値（すうち）を、key_codeに代入
    let key_code = event.keyCode;

    if (gKey[key_code] != 0) {//既に押下中の場合（キーリピート）
        return;
    }

    gKey[key_code] = 1;

    if (gPhase == 1) {//敵が現れた場合
        gPhase = 2;//戦闘コマンド選択フェーズ
        SetMessage("戦う", "逃げる");
        return;
    }
    if (gPhase == 2) {//戦闘コマンド選択中の場合
        if (key_code == 13 || key_code == 90) {
            SetMessage("敵をやっつけた");
            gPhase = 3;
        } else {
            gCursor = 1 - gCursor;//カーソル移動
        } return;
    }
    if (gPhase == 3) {
        gPhase = 0;//マップ移動フェーズ
        gHP -= 5;
        gEx++;
    }

    gMessage1 = null;
};

const keyupfunc = (event) => {
    gKey[event.keyCode] = 0;
};

const TickField = () => {
    if (gMoveX != 0 || gMoveY != 0 || gMessage1) { }//移動中又はメッセージ表示中の場合
    else if (gKey[37]) { gAngle = 1; gMoveX = -TILESIZE; }
    else if (gKey[38]) { gAngle = 3; gMoveY = -TILESIZE; }
    else if (gKey[39]) { gAngle = 2; gMoveX = TILESIZE; }
    else if (gKey[40]) { gAngle = 0; gMoveY = TILESIZE; }

    //移動後のタイル座標判定
    let mx = Math.floor((gPlayerX + gMoveX) / TILESIZE);//タイル座標X
    let my = Math.floor((gPlayerY + gMoveY) / TILESIZE);//タイル座標X
    mx += MAP_WIDTH;//マップループ処理X
    mx %= MAP_WIDTH;//マップループ処理X
    my += MAP_HEIGHT;//マップループ処理Y
    my %= MAP_HEIGHT;//マップループ処理Y

    let m = gMap[my * MAP_WIDTH + mx];

    if (m < 3) {//移動禁止
        gMoveX = 0;//移動禁止X
        gMoveY = 0;//移動禁止Y
    }

    if (Math.abs(gMoveX) + Math.abs(gMoveY) == SCROLL) {//マス目移動が終わる直前
        if (m == 8 || m == 9) {//お城
            SetMessage("倒せ");
        }
        if (m == 10 || m == 11) {//街
            SetMessage("西にも村あるよ", "!!!");
        }
        if (m == 12) {//村
            SetMessage("鍵は洞窟に", "あるよ");
        }
        if (m == 13) {//洞窟
            SetMessage("鍵を手に入れた");
            gItem = 1;//鍵入手
        }
        if (m == 14) {//洞窟
            if (gItem == 0) {
                gPlayerY -= TILESIZE;//1マス上へ移動
                SetMessage("鍵が必要です");
            }
            else {
                SetMessage("扉が開いた");
            }
        }
        if (m == 15) {//洞窟
            SetMessage("魔王を倒した");
        }
        if (Math.random() * 8 < gEncounter[m]) {
            gPhase = 1;//
            gEnemyType = 1;
            SetMessage("敵が現れた");
        }
    }

    gPlayerX += Math.sign(gMoveX) * SCROLL;//プレイヤー座標移動X
    gPlayerY += Math.sign(gMoveY) * SCROLL;//プレイヤー座標移動Y
    gMoveX -= Math.sign(gMoveX) * SCROLL;
    gMoveY -= Math.sign(gMoveY) * SCROLL;

    //マップループ処理
    gPlayerX += (MAP_WIDTH * TILESIZE);
    gPlayerX %= (MAP_WIDTH * TILESIZE);
    gPlayerY += (MAP_HEIGHT * TILESIZE);
    gPlayerY %= (MAP_HEIGHT * TILESIZE);
};

const SetMessage = (m1, m2 = null) => {
    gMessage1 = m1;
    gMessage2 = m2;
};

window.addEventListener("keydown", keydownfunc);
window.addEventListener("keyup", keyupfunc);