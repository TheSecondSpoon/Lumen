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

<body class="vh-100">
<div class="container-fluid">
    <div class="row">
        <div class="col-2">
            <h2 class="text-center">Resources</h2>
            <hr>
            <p id="lumen">Lumen: 0</p>
            <p id="science">Science: 0</p>
        </div>
        <div class="col">
            <h2 class="text-center">Active Light</h2>
            <hr>
            <div class="row">
                <div class="col tooltip">
                    <button type="button" class="btn btn-lg btn-light btn-block" id="torchButton">
                        Create Torch (0)
                    </button>
                    <span id="torchTool" class="tooltiptext">
                        Generate 1 lumen per second <hr>
                        Cost: 10 lumen
                    </span>
                </div>
                <div class="col tooltip">
                    <button type="button" class="btn btn-lg btn-light btn-block"
                            id="campfireButton">
                        Create campfire (0)
                    </button>
                    <span id="campfireTool" class="tooltiptext">
                        Generate 10 lumen per second <hr>
                        Cost: 150 lumen
                    </span>
                </div>
            </div>
            <hr>
            <p id="lumenPerHit">Lumen per hit: 1</p>
            <button id="hitFlint" type="button" class="btn btn-lg btn-light btn-block">
                Hit flint
            </button>
        </div>
        <div class="col-4">
            <h2 class="text-center">Log</h2>
            <div class="overflow-auto log">
                <p id="4"></p>
                <p id="3"></p>
                <p id="2"></p>
                <p id="1"></p>
                <p id="0"></p>
            </div>
        </div>
    </div>
</div>
<footer>
    <nav class="navbar fixed-bottom">
        <button id="deleteSave" class="btn btn-outline-danger"> clear data</button>
        <button id="cheating100" class="btn btn-outline-warning"> 100</button>
        <button id="cheating10000" class="btn btn-outline-warning"> 10000</button>
        <button id="cheating10000000" class="btn btn-outline-warning"> 10000000</button>
    </nav>
</footer>
<script type="module" src="main.js" charset="utf-8"></script>
</body>
