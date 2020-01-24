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
            <div class="col-lg-auto">
                <h1 id="availableLumen">Available Lumens: 0</h1>
            </div>
        </div>
    </div>
</header>
<hr>
<div class="container-fluid">
    <div class="row">
        <div class="col">

        </div>
        <div class="col">
            <h2 class="text-center">Active Light</h2>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="tooltip">
                    <button onclick="duplicateFlint()" type="button" class="btn btn-lg btn-light btn-block" id="flintButton">
                        Duplicate flint (level 1)
                    </button>
                        <span id="flintTool" class="tooltiptext"> Increase lumen per hit by 1<br>
                        Cost: 10</span>
                    </div>
                </div>
                <div class="col">

                </div>
            </div>
            <hr>
            <p id="lumenPerHit">Lumen per hit: 1</p>
            <button onclick="hitFlint()" type="button" class="btn btn-lg btn-light btn-block">
                Hit flint
            </button>
        </div>
        <div class="col">

        </div>
    </div>
</div>
<footer>
    <nav class="navbar fixed-bottom">
        <button onclick="deleteSave()" class="btn btn-outline-danger"> clear data </button>
    </nav>
</footer>
<script src="js/main.js" charset="utf-8" type="text/javascript"></script>
</body>
