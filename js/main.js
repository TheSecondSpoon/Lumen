var gameData = {
    resources : {
        lumen: 0,
        science: 0,
        lumenPerHit: 1,
    },
    upgrades : {
        torch : 0,
        campfire : 0,
    },
    costs : {
        torch: 10,
        campfire: 150,
        costincrease : {
            torch: 1.25,
            campfire: 1.25,
        },
    },
    income : {
        torch: 1,
        campfire: 10,
    },


};

function cheating(amount){
    gameData.resources.lumen += amount;
    updateWebsite();
}

function hitFlint() {
    gameData.resources.lumen += gameData.resources.lumenPerHit;
    updateWebsite();
}

function upgrade(upgrade, resource){
    if(gameData.resources[resource] >= gameData.costs[upgrade]){
        gameData.upgrades[upgrade] += 1;
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
    gameData.resources.lumen +=
        (gameData.upgrades.torch * gameData.income.torch) +
        (gameData.upgrades.campfire * gameData.income.campfire)


    ;

    updateWebsite();
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

function updateWebsite(e) {
    document.getElementById("availableLumen").innerHTML = "Available Lumens: " + gameData.resources.lumen;
    document.getElementById("torchButton").innerHTML = "Create Torch (" + gameData.upgrades.torch + ")";
    document.getElementById("torchTool").innerHTML = "Creates passive lumen income<br>Cost: " + gameData.costs.torch + " lumen";
    document.getElementById("campfireButton").innerHTML = "Create campfire (" + gameData.upgrades.campfire + ")";
    document.getElementById("campfireTool").innerHTML = "Creates passive lumen income<br>Cost: " + gameData.costs.campfire + " lumen";
}