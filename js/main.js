var gameData = {
    lumen: 0,
    lumenPerHit: 1,
    firestoneCost: 10,
    firestoneLevel: 1
};

function hitStone() {
    gameData.lumen += gameData.lumenPerHit;
    document.getElementById("availableLumen").innerHTML = "Available Lumens: " + gameData.lumen;
}

function duplicateFirestone () {
    if (gameData.lumen >= gameData.firestoneCost) {
        gameData.lumen -= gameData.firestoneCost;
        gameData.firestoneLevel += 1;
        gameData.lumenPerHit += 1;
        gameData.firestoneCost *= 2;
        document.getElementById("availableLumen").innerHTML = "Available Lumens: " + gameData.lumen;
        document.getElementById("duplicateFirestone").innerHTML = " Duplicate firestone (" + gameData.firestoneLevel +
            ")<br>Cost: " + gameData.firestoneCost;
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
    document.getElementById("duplicateFirestone").innerHTML = " Duplicate firestone (" + gameData.firestoneLevel +
        ")<br>Cost: " + gameData.firestoneCost;
    document.getElementById("lumenPerHit").innerHTML = "Lumen per hit: " + gameData.lumenPerHit;
};