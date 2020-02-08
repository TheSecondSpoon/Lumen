

var gameData = {
    resources : {
        lumen: 0,
        torch: 0,
        lumenPerHit: 1,
    },
    costs : {
        torch: 10,
        costincrease : {
            torch: 1.25,
        },
    },


};


function hitFlint() {
    gameData.resources.lumen += gameData.resources.lumenPerHit;
    updateWebsite();
}

function upgrade(upgrade, resource){
    if(gameData.resources[resource] >= gameData.costs[upgrade]){
        gameData.resources[upgrade] += 1;
        gameData.resources[resource] -= gameData.costs[upgrade];
        gameData.costs[upgrade] = Math.round(gameData.costs[upgrade] * gameData.costs.costincrease[upgrade]);
        updateWebsite();
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
    updateWebsite();

};

function updateWebsite() {
    document.getElementById("availableLumen").innerHTML = "Available Lumens: " + gameData.resources.lumen;
    document.getElementById("torchButton").innerHTML = "Create Torch (" + gameData.resources.torch + ")";
    document.getElementById("torchTool").innerHTML = "Creates passive lumen income<br>Cost: " + gameData.costs.torch + " lumen";

}