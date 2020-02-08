<!doctype html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/styling.css">
    <title>
        Idle Lumen
    </title>
</head>

<body>

<header>
    <div class="container-fluid">
        <div class="row justify-content-center">
        </div>
    </div>
</header>
<hr>
<div class="container-fluid">
    <div class="row">
        <div class="col-2">
            <h2 class="text-center">Resources</h2>
            <hr>
            <p id="Lumen">Lumen: 0</p>
            <p id="Science">Science: 0</p>
        </div>
        <div class="col">
            <h2 class="text-center">Active Light</h2>
            <hr>
            <div class="row">
                <div class="col tooltip">
                        <button onclick="upgrade('torch', 'lumen')" type="button" class="btn btn-lg btn-light btn-block" id="torchButton">
                            Create Torch (0)
                        </button>
                        <span id="torchTool" class="tooltiptext"> Generate 1 lumen per second<br>
                        Cost: 10 lumen</span>
                </div>
                <div class="col tooltip">
                        <button onclick="upgrade('campfire', 'lumen')" type="button" class="btn btn-lg btn-light btn-block" id="campfireButton">
                            Create campfire (0)
                        </button>
                        <span id="campfireTool" class="tooltiptext"> Generate 10 lumen per second<br>
                        Cost: 150 lumen</span>
                </div>
            </div>
            <hr>
            <p id="lumenPerHit">Lumen per hit: 1</p>
            <button onclick="hitFlint()" type="button" class="btn btn-lg btn-light btn-block">
                Hit flint
            </button>
        </div>
        <div class="col-4">
            <h2 class="text-center">Log</h2>
            <div class="fluid-container overflow-auto">
                <p id="0"></p>
                <p id="1"></p>
                <p id="2"></p>
                <p id="3"></p>
                <p id="4"></p>
            </div>
        </div>
    </div>
</div>
<footer>
    <nav class="navbar fixed-bottom">
        <button onclick="deleteSave()" class="btn btn-outline-danger"> clear data </button>
        <button onclick="cheating(100)" class="btn btn-outline-warning"> 100 </button>
        <button onclick="cheating(10000)" class="btn btn-outline-warning"> 10000 </button>
        <button onclick="cheating(10000000)" class="btn btn-outline-warning"> 10000000 </button>
    </nav>
</footer>
<script src="js/main.js" charset="utf-8" type="text/javascript"></script>
</body>
