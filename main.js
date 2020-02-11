/* MODULE IMPORTS ------------------------------------------------------------------------------------------------------------------------------------------------------------- */
import log, {stories, writeStory} from "./js/story.js";


/* VARIABLES ----------------------------------------------------------------------------------------------------------------------------------------------------------- */

var gameData = {
    resources: {
        lumen: 0,
        science: 0,
        lumenPerHit: 1,
    },
    buildings: {
        upgrades: {
            torch: 0,
            campfire: 0,
            bonfire: 0,
            },
        costs: {
            torch: 10,
            campfire: 150,
            bonfire: 1000,

            costincrease: {
                torch: 1.25,
                campfire: 1.25,
                bonfire: 1.25,
            },
        },
        income: {
            torch: 1,
            campfire: 10,
            bonfire: 50
        },
    },

    research: {
        upgrades: {
            blueflames: 0,
        },
        costs: {
            blueflames: 500,

            costincrease: {

                blueflames: 1.25,
            },
        },
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
document.getElementById("torchButton").addEventListener("click", function () {callupgrade('resources', 'buildings','torch', 'lumen')});
document.getElementById("campfireButton").addEventListener("click", function () {callupgrade('resources','buildings','campfire', 'lumen');});
document.getElementById("bonfireButton").addEventListener("click", function () {callupgrade('resources','buildings','bonfire', 'lumen');});

/*
        Research
 */



/* WRITE STORY ---------------------------------------------------------------------------------------------------------------------------------------------------- */


/* Upgrade Functions ------------------------------------------------------------------------------------------------------------------------------------------- */
function callupgrade(type_upgrade, affects, upgrade, resource){
    switch (type_upgrade) {
        case 'resources':
            standard_upgrade(affects,upgrade,resource);
            break;
        case 'research':
            standard_upgrade(affects,upgrade, resource);
            break;
        default:
            break;
    }
}

function standard_upgrade(affects, upgrade, resource) {
    if (gameData.resources[resource] >= gameData[affects].costs[upgrade]) {
        gameData[affects].upgrades[upgrade] += 1;
        gameData.resources[resource] -= gameData[affects].costs[upgrade];
        gameData[affects].costs[upgrade] = Math.round(gameData[affects].costs[upgrade] * gameData[affects].costs.costincrease[upgrade]);
        updateWebsite();
    }
}

/* UNSORTED FUNCTIONS ------------------------------------------------------------------------------------------------------------------------------------------- */
function lumenPerSecond() {
    var upgrade = Object.values(gameData.buildings.upgrades);
    var income = Object.values(gameData.buildings.income);
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



function deleteSave() {
    localStorage.clear();
    location.reload(true);
}

function updateWebsite() {
    document.getElementById("lumen").innerHTML = "Lumen: " + gameData.resources.lumen + " (" + lumenPerSecond() + " p/s)";
    document.getElementById("torchButton").innerHTML = "Create Torch (" + gameData.buildings.upgrades.torch + ")";
    document.getElementById("torchTool").innerHTML = "Generate 1 lumen per second<hr>Cost: " + gameData.buildings.costs.torch + " lumen";
    document.getElementById("campfireButton").innerHTML = "Create campfire (" + gameData.buildings.upgrades.campfire + ")";
    document.getElementById("campfireTool").innerHTML = "Generate 10 lumen per second<hr>Cost: " + gameData.buildings.costs.campfire + " lumen";
    document.getElementById("bonfireButton").innerHTML = "Create bonfire (" + gameData.buildings.upgrades.bonfire + ")";
    document.getElementById("bonfireTool").innerHTML = "Generate 50 lumen per second<hr>Cost: " + gameData.buildings.costs.bonfire + " lumen";
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
    if (gameData.buildings.upgrades.torch >= 1) {
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




