var gameData = {
    lumen: 0,
    lumenPerHit: 1,
    flintCost: 10,
    flintLevel: 1,
    bundleCost: 25,
    bundleLevel: 1,
};

function hitFlint() {
    gameData.lumen += gameData.lumenPerHit;
    document.getElementById("availableLumen").innerHTML = "Available Lumens: " + gameData.lumen;
}

function duplicateFlint () {
    if (gameData.lumen >= gameData.flintCost) {
        gameData.lumen -= gameData.flintCost;
        gameData.flintLevel += 1;
        gameData.lumenPerHit += 1;
        gameData.flintCost *= 2;
        document.getElementById("availableLumen").innerHTML = "Available Lumens: " + gameData.lumen;
        document.getElementById("flintButton").innerHTML = "Duplicate flint (level " + gameData.flintLevel + ")";
        document.getElementById("flintTool").innerHTML = " Increase lumen per hit by 1<br>Cost: " + gameData.flintCost;
        document.getElementById("lumenPerHit").innerHTML = "Lumen per hit: " + gameData.lumenPerHit;
    }
}


function deleteSave() {
    localStorage.clear()
    location.reload(true)
}

var mainGameLoop = window.setInterval(function() {

}, 1000);

var saveGameLoop = window.setInterval(function () {
    localStorage.setItem('lumenSave', JSON.stringify(gameData))
}, 15000);

window.onload = function () {
    var savegame = JSON.parse(localStorage.getItem('lumenSave'));
    if (savegame !== null) {
        gameData = savegame
    }
    document.getElementById("availableLumen").innerHTML = "Available Lumens: " + gameData.lumen;
    document.getElementById("flintButton").innerHTML = "Duplicate flint (level " + gameData.flintLevel + ")";
    document.getElementById("flintTool").innerHTML = " Increase lumen per hit by 1<br>Cost: " + gameData.flintCost;
    document.getElementById("lumenPerHit").innerHTML = "Lumen per hit: " + gameData.lumenPerHit;
};