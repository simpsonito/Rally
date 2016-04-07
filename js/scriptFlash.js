/**
 * Created by adib on 12/09/14.
 */
var canvas, stage, exportRoot;
window.addEventListener("load",init,false);
function init() {
    createjs.MotionGuidePlugin.install();

    canvas = document.getElementById("canvas");
    images = images||{};

    var manifest = [
        {src:"images/cocheBien.png", id:"cocheBien"},
        {src:"images/cocheMal.png", id:"cocheMal"},
        {src:"images/rally.jpg", id:"rally"}
    ];

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
    exportRoot = new lib.baseRally();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", stage);
}