/* MODULE IMPORTS ------------------------------------------------------------------------------------------------------------------------------------------------------------- */
import log, {stories, writeStory} from "./js/story.js";


/* VARIABLES ----------------------------------------------------------------------------------------------------------------------------------------------------------- */

var gameData = {
    resources: {
        lumen: 0,
        science: 0,
        lumenPerHit: 1,
    },
    upgrades: {
        torch: 0,
        campfire: 0,
    },
    costs: {
        torch: 10,
        campfire: 150,
        costincrease: {
            torch: 1.25,
            campfire: 1.25,
        },
    },
    income: {
        torch: 1,
        campfire: 10,
    },
};

/* LOG TESTS ---------------------------------------------------------------------------------------------------------------------------------------------------- */


/* EVENT LISTENERS  ----------------------------------------------------------------------------------------------------------------------------------------------------
        Basic
 */
document.getElementById("hitFlint").addEventListener("click", hitFlint);
document.getElementById("cheating100").addEventListener("click", function () {cheating(100);});
document.getElementById("cheating10000").addEventListener("click", function () {cheating(10000);});
document.getElementById("cheating10000000").addEventListener("click", function () {cheating(10000000);});
document.getElementById("deleteSave").addEventListener("click", deleteSave);
/*
        Upgrades
 */
document.getElementById("torchButton").addEventListener("click", function () {upgrade('torch', 'lumen')});
document.getElementById("campfireButton").addEventListener("click", function () {upgrade('campfire', 'lumen');});

/* WRITE STORY ---------------------------------------------------------------------------------------------------------------------------------------------------- */


/* UNSORTED FUNCTIONS ------------------------------------------------------------------------------------------------------------------------------------------- */

function lumenPerSecond() {
    var upgrade = Object.values(gameData.upgrades);
    var income = Object.values(gameData.income);
    var lumenPerSecond = 0;

    for (var i = 0; i < upgrade.length; i++) {
        lumenPerSecond += upgrade[i] * income[i]
    }

    return lumenPerSecond

}

function cheating(amount) {
    gameData.resources.lumen += amount;
    updateWebsite();
}

function hitFlint() {
    gameData.resources.lumen += gameData.resources.lumenPerHit;
    updateWebsite();
}

function upgrade(upgrade, resource) {
    if (gameData.resources[resource] >= gameData.costs[upgrade]) {
        gameData.upgrades[upgrade] += 1;
        gameData.resources[resource] -= gameData.costs[upgrade];
        gameData.costs[upgrade] = Math.round(gameData.costs[upgrade] * gameData.costs.costincrease[upgrade]);
        updateWebsite();
    }
}

function deleteSave() {
    localStorage.clear();
    location.reload(true);
}

function updateWebsite() {
    document.getElementById("torchButton").innerHTML = "Create Torch (" + gameData.upgrades.torch + ")";
    document.getElementById("lumen").innerHTML = "Lumen: " + gameData.resources.lumen + " (" + lumenPerSecond() + " p/s)";
    document.getElementById("torchTool").innerHTML = "Generate 1 lumen per second<hr>Cost: " + gameData.costs.torch + " lumen";
    document.getElementById("campfireButton").innerHTML = "Create campfire (" + gameData.upgrades.campfire + ")";
    document.getElementById("campfireTool").innerHTML = "Generate 10 lumen per second<hr>Cost: " + gameData.costs.campfire + " lumen";
}


/* GAMELOOPS -------------------------------------------------------------------------------------------------------------------------------------------------------- */


var mainGameLoop = window.setInterval(function () {
    /* checks */


    /* calculation */
    gameData.resources.lumen += lumenPerSecond();
    /* update */
    updateWebsite();
}, 1000);

var storyGameLoop = window.setInterval(function () {

    log(0);
    if (gameData.upgrades.torch >= 1) {
        log(1);
    }

}, 1000);

var saveGameLoop = window.setInterval(function () {
    localStorage.setItem('lumenSave', JSON.stringify(gameData))

}, 10000);

/* ONLOAD -------------------------------------------------------------------------------------------------------------------------------------------------------- */

window.onload = function () {
    var savegame = JSON.parse(localStorage.getItem('lumenSave'));
    if (savegame !== null) {
        gameData = savegame
    }
    writeStory();
    updateWebsite();

};




