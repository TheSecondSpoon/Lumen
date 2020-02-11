<!doctype html>
<html lang="en" dir="ltr">

<!-- Header ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/styling.css">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
    <title>
        Idle Lumen
    </title>
</head>

<!-- Start body ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<body>
<div class="container-fluid">

    <!-- Nav-bar ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

    <div class="row">
        <div class="col-2"></div>
        <div class="col">
            <ul class="nav nav-pills nav-justified " role="tablist" id="tabs">
                <li class="nav-item tab"><a class="nav-link active" data-toggle="pill" href="#buildings">Buildings</a>
                </li>
                <li class="nav-item tab"><a class="nav-link" data-toggle="pill" href="#menu1">Menu 1</a></li>
                <li class="nav-item tab"><a class="nav-link" data-toggle="pill" href="#menu2">Menu 2</a></li>
                <li class="nav-item tab"><a class="nav-link" data-toggle="pill" href="#menu3">Menu 3</a></li>
            </ul>
        </div>
        <div class="col-4"></div>
    </div>

    <!-- Main Game Row----------------------------------------------------------------------------------------------------------------------------------------------------------- -->


    <div class="row">

        <!-- Col-Resources ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

        <div class="col-2">
            <h2 class="text-center">Resources</h2>
            <hr>
            <p id="lumen">Lumen: 0</p>
            <p id="science">Science: 0</p>
        </div>

        <!-- Col-tabs ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

        <div class="col">
            <div class="tab-content">

                <!-- Tab-Building ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                <div id="buildings" class="tab-pane fade show active" role="tabpanel" aria-labelledby="buildings-tab">
                    <h2 class="text-center">Buildings</h2>
                    <hr>
                    <div class="row">
                        <div class="col tooltip">
                            <button type="button" class="btn btn-lg btn-light btn-block" id="torchButton">
                                Create torch (0)
                            </button>
                            <span id="torchTool" class="tooltiptext">
                                Generate 1 lumen per second <hr>
                                Cost: 10 lumen</span>
                        </div>
                        <div class="col tooltip">
                            <button type="button" class="btn btn-lg btn-light btn-block"
                                    id="campfireButton">
                                Create campfire (0)
                            </button>
                            <span id="campfireTool" class="tooltiptext">
                                Generate 10 lumen per second <hr>
                                Cost: 150 lumen</span>
                        </div>
                        <div class="col tooltip">
                            <button type="button" class="btn btn-lg btn-light btn-block"
                                    id="bonfireButton">
                                Create bonfire (0)
                            </button>
                            <span id="bonfireTool" class="tooltiptext">
                                Generate 50 lumen per second <hr>
                                Cost: 1000 lumen</span>
                        </div>
                    </div>
                    <hr>
                    <p id="lumenPerHit">Lumen per hit: 1</p>
                    <button id="hitFlint" type="button" class="btn btn-lg btn-light btn-block">
                        Hit flint
                    </button>
                </div>

                <!-- Tab-Menu1 ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                <div id="menu1" class="tab-pane fade" role="tabpanel" aria-labelledby="menu1-tab">
                    <h3>Menu 1</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                </div>

                <!-- Tab-Menu2 ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                <div id="menu2" class="tab-pane fade" role="tabpanel" aria-labelledby="menu2-tab">
                    <h3>Menu 2</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam.</p>
                </div>

                <!-- Tab-Menu2 ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                <div id="menu3" class="tab-pane fade" role="tabpanel" aria-labelledby="menu3-tab">
                    <h3>Menu 3</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.</p>
                </div>
            </div>
        </div>

        <!-- Col-Log ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

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

<!-- Footer ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<footer>
    <nav class="navbar fixed-bottom">
        <button id="deleteSave" class="btn btn-outline-danger"> clear data</button>
        <button id="cheating100" class="btn btn-outline-warning"> 100</button>
        <button id="cheating10000" class="btn btn-outline-warning"> 10000</button>
        <button id="cheating10000000" class="btn btn-outline-warning"> 10000000</button>
    </nav>
</footer>

<!-- Scripts ----------------------------------------------------------------------------------------------------------------------------------------------------------- -->

<script type="module" src="main.js" charset="utf-8"></script>
<script>
    $('#tabs a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
</script>
</body>
