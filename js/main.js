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
    storiescompleted :[],

};

var story ={
    stories:[],

}

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

function log(index){
    if(gameData.storiescompleted[index] == null){
        gameData.storiescompleted[index] = true;
        document.getElementById(index).innerHTML = story.stories[index];
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

var storyGameLoop = window.setInterval(function() {
    writeStory();
    log(0);

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

function updateWebsite() {
    document.getElementById("Lumen").innerHTML = "Lumens: " + gameData.resources.lumen;
    document.getElementById("torchButton").innerHTML = "Create Torch (" + gameData.upgrades.torch + ")";
    document.getElementById("torchTool").innerHTML = "Creates passive lumen income<br>Cost: " + gameData.costs.torch + " lumen";
    document.getElementById("campfireButton").innerHTML = "Create campfire (" + gameData.upgrades.campfire + ")";
    document.getElementById("campfireTool").innerHTML = "Creates passive lumen income<br>Cost: " + gameData.costs.campfire + " lumen";
}

function updateStory(){

}

function writeStory(){
    story.stories[0] = "\n" +
        "\n" +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut vulputate quam. Donec tincidunt odio id metus ullamcorper, eget laoreet metus pellentesque. Phasellus nec gravida nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique at risus in pretium. Vivamus turpis libero, porta in varius in, posuere vel erat. Nunc sed ligula vitae nibh sollicitudin dictum. Vestibulum arcu ligula, finibus a congue ac, feugiat a elit. Duis facilisis eleifend lacus nec auctor. Morbi sodales nibh eros. Suspendisse arcu lorem, laoreet quis tempor vel, ullamcorper tempor nisi. Vivamus vehicula scelerisque iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed semper dignissim libero, a facilisis mi egestas a.\n" +
        "\n" +
        "Nullam quis tempor magna, et maximus ligula. Nullam eget varius ex. Vestibulum id est dignissim lectus hendrerit blandit vel id ligula. Morbi dignissim, nisi euismod euismod dapibus, velit massa placerat nulla, a tempus nisl lectus nec felis. Fusce est arcu, ornare id tempor ac, ultricies eget magna. Proin ipsum tortor, ultricies sit amet libero in, tristique blandit lorem. Fusce rhoncus arcu tempus est convallis vulputate.\n" +
        "\n" +
        "Phasellus rhoncus, felis nec bibendum placerat, nisl tellus malesuada nulla, quis gravida tellus velit vitae nunc. Aenean quis facilisis massa. Suspendisse nec accumsan tellus. Proin accumsan nibh vel orci pellentesque, eget feugiat justo volutpat. Donec eu risus nec dolor condimentum aliquam. Vestibulum nibh enim, mattis in mi non, ultrices rhoncus lorem. Duis dignissim ut nisi in volutpat. Pellentesque mattis convallis dolor in eleifend.\n" +
        "\n" +
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eu consectetur metus, sit amet ultricies lorem. Etiam viverra risus ut tempus consequat. In leo velit, cursus vitae arcu et, interdum elementum dui. Fusce ullamcorper justo non turpis ullamcorper hendrerit. Aliquam lobortis malesuada lectus, et auctor metus posuere in. Sed ligula lectus, accumsan rutrum commodo ac, lobortis id quam. Donec nunc lectus, laoreet vel placerat sed, vehicula nec felis. Phasellus nec bibendum ligula. Nullam augue orci, porta a finibus quis, vehicula luctus ligula. Nam sollicitudin iaculis porta. Maecenas vitae rhoncus lorem, vel aliquam nibh.\n" +
        "\n" +
        "Integer mollis erat facilisis justo condimentum, at vehicula purus auctor. Ut ac placerat lacus. Nunc luctus id lacus vitae imperdiet. Sed ut lobortis augue. Mauris mattis accumsan sagittis. Phasellus tristique, est sed mattis fringilla, risus lorem egestas risus, quis tincidunt enim nibh id odio. Curabitur suscipit feugiat arcu a laoreet. Quisque suscipit mattis vehicula. Mauris quis libero sem. Vivamus mollis nunc et tortor ultrices, eu laoreet libero accumsan. Maecenas commodo nisl sed ullamcorper congue. Ut vehicula, erat nec laoreet pharetra, tortor lacus fermentum quam, sed tincidunt tellus ante in risus. Integer rhoncus vehicula cursus. Vivamus finibus lectus ac urna dictum, sed malesuada nulla ullamcorper.\n" +
        "\n" +
        "Etiam risus enim, venenatis eu lobortis non, commodo a diam. Vivamus interdum enim quis nibh congue ultrices. Sed malesuada, elit ac fermentum maximus, risus sapien semper risus, quis interdum felis sapien ut quam. Integer consectetur ante augue, a blandit tortor porta eget. Fusce magna enim, malesuada nec elementum eu, viverra sit amet tellus. Nam eu tristique ligula. Pellentesque id finibus magna. Praesent aliquam luctus quam, sed porttitor augue eleifend vitae. Sed sed mauris in lacus porta interdum vel sed neque.\n" +
        "\n" +
        "Nunc ac nisl non elit commodo feugiat rutrum in justo. Fusce egestas elit felis, quis convallis nisl ullamcorper vel. Morbi id venenatis elit, eget volutpat nisl. Etiam libero leo, tempus non massa eu, aliquam facilisis quam. Integer hendrerit vel urna id suscipit. Donec dictum ipsum at mauris faucibus fermentum. In ac fringilla augue. Pellentesque eget ipsum volutpat, laoreet tellus non, efficitur nulla. Fusce consequat ex a dapibus accumsan. Suspendisse pretium fringilla nisi vel porta. Sed sit amet fringilla enim. Vivamus sed mi ex.\n" +
        "\n" +
        "Sed vel condimentum dui, in varius ligula. Mauris mattis egestas rutrum. Nullam malesuada nunc mauris, nec auctor nunc maximus non. Sed commodo viverra lorem, in cursus erat accumsan quis. Ut quis sem elementum, tristique felis vitae, fermentum velit. Proin consequat, felis eget venenatis fringilla, eros mauris venenatis lectus, in vulputate justo nisl sit amet tellus. Aenean imperdiet enim nisl, ac tempor risus pharetra nec. Cras interdum ex sit amet neque fringilla, ac egestas nibh blandit. Sed id fringilla eros. Morbi purus sem, gravida sit amet eros vel, volutpat eleifend felis.\n" +
        "\n" +
        "Curabitur lacus tortor, pretium consectetur ligula eu, pulvinar dapibus est. Mauris consectetur dolor nunc, vel euismod elit convallis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec interdum tortor a eleifend interdum. Etiam augue ligula, eleifend non mi sit amet, finibus pharetra metus. Suspendisse vitae justo at tellus molestie placerat. Pellentesque sagittis neque id metus ornare volutpat. Phasellus dignissim ipsum nec varius rhoncus. Sed non malesuada mi, pretium semper lacus. Nunc non justo quis lectus pellentesque dignissim in id urna. Praesent cursus condimentum leo at vestibulum. Vivamus interdum dui et massa auctor, vitae sodales metus malesuada. Sed facilisis sapien vitae risus molestie aliquam. Pellentesque condimentum, nisi eu commodo condimentum, ligula massa eleifend metus, eget luctus velit metus vel est. Mauris in neque sem. In hac habitasse platea dictumst.\n" +
        "\n" +
        "Integer luctus consectetur tincidunt. Mauris elementum orci at magna blandit aliquet. Donec eros purus, sagittis id enim quis, bibendum aliquet neque. Quisque non tellus sit amet nisi hendrerit blandit eget ac odio. Nunc dolor lacus, consectetur viverra porta ac, ullamcorper in nunc. Proin enim nibh, consequat sed condimentum et, tincidunt at quam. Nam et quam dictum, malesuada libero sit amet, pretium nulla. Integer gravida nec nunc quis sagittis. Nulla hendrerit risus nec turpis volutpat vulputate eu hendrerit arcu. Curabitur sed fringilla dolor. Suspendisse dictum, lacus sit amet suscipit sodales, lectus dolor molestie metus, at cursus elit magna non purus.\n" +
        "\n" +
        "Nunc pulvinar ut eros a sodales. Mauris pretium finibus consectetur. Nulla facilisi. Cras consequat mauris sit amet feugiat semper. In ex est, viverra vitae massa vel, vehicula volutpat nulla. Proin vitae sodales urna. Aliquam id dictum turpis. Donec quis neque a velit feugiat faucibus in porta enim. Nam enim velit, elementum nec scelerisque vel, tristique in risus. Nulla convallis, lacus id varius tristique, ante odio consectetur nulla, eu pharetra metus magna ac arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur vitae sapien vitae risus cursus fermentum id ut velit. Donec pulvinar, velit nec aliquam sodales, ex justo dictum ligula, sit amet blandit quam ligula non mi. Nam varius orci id dolor ultrices, in laoreet ex posuere. Nulla ullamcorper egestas turpis in maximus. In ac placerat erat.\n" +
        "\n" +
        "Maecenas non arcu massa. Aenean vitae volutpat velit, sed posuere tellus. Aenean eget semper nunc. Nulla dictum imperdiet libero, quis venenatis purus feugiat a. Aenean sit amet lacus ac lectus dictum rhoncus. Integer condimentum lorem id mi ultricies eleifend. Donec tristique dolor nec justo ultrices consectetur. Mauris rhoncus arcu ut nisl mollis, ut sollicitudin purus efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie lacus sit amet enim dictum, quis convallis nisl aliquet.\n" +
        "\n" +
        "Cras tincidunt nisi sit amet tempor condimentum. Quisque condimentum metus vitae risus blandit, in pellentesque dolor facilisis. Etiam quam quam, molestie quis consectetur quis, fringilla vitae metus. Ut malesuada feugiat arcu non semper. Vestibulum dui massa, ullamcorper quis congue a, maximus eu mi. Duis sagittis ullamcorper turpis ut vestibulum. Curabitur sagittis massa vitae justo commodo fermentum. Cras in ultricies elit. Sed et odio feugiat enim ultricies sodales sed eget metus. Duis nec eros mollis nibh imperdiet dapibus sit amet sed enim. Integer aliquet egestas nulla, ut posuere purus molestie sed. Vestibulum egestas magna at enim porttitor sagittis. Praesent blandit accumsan metus at consequat.\n" +
        "\n" +
        "Praesent sem arcu, lacinia ut orci vel, commodo facilisis est. In hac habitasse platea dictumst. Mauris mattis diam eget massa iaculis, eu vehicula sapien hendrerit. Sed urna quam, commodo ut tincidunt et, fermentum ac dolor. Etiam sodales nibh ornare ultricies sagittis. Vestibulum dapibus eleifend consectetur. Nulla facilisi. Curabitur imperdiet ullamcorper nibh, vel laoreet massa dictum eu. Pellentesque luctus elit id eros ultricies facilisis. Nulla pretium turpis orci. Nulla id nisi lorem. Etiam feugiat blandit nunc in auctor.\n" +
        "\n" +
        "Phasellus ac lacinia dui, a facilisis nulla. Nam quis mattis lacus, ut pellentesque ligula. Praesent ultrices et dui sit amet aliquet. Integer at nulla dapibus, elementum erat a, tincidunt turpis. Nulla nisi elit, varius nec tristique tempus, lobortis eget sem. Donec commodo eros purus. Suspendisse nisl felis, pharetra eget sodales vel, volutpat consectetur felis. Aenean vel nulla id nibh aliquam suscipit eu eu enim. Fusce faucibus nisi ac turpis varius, sed fringilla neque finibus. Pellentesque rutrum libero nulla, vitae gravida lectus tempus sollicitudin. Sed a purus at mauris congue placerat at sit amet erat. Nam sed justo et leo iaculis congue. Praesent vulputate laoreet quam, eu posuere mauris. Pellentesque pretium sagittis suscipit. Proin iaculis urna ut placerat rhoncus.\n" +
        "\n" +
        "Proin tristique est lorem. Morbi lacus nunc, vehicula vitae varius nec, luctus in lectus. Proin quis est vulputate, convallis ex eu, tincidunt metus. Praesent ultricies, justo nec eleifend porttitor, sem libero pellentesque sapien, sed consectetur felis nisi ut dolor. Mauris vel iaculis eros. Donec a vestibulum ex. Pellentesque pharetra sit amet odio a egestas. Vivamus id suscipit elit. Nullam convallis mattis elit non finibus. Morbi at vestibulum orci. Fusce malesuada sapien vel purus interdum aliquam. Nulla fringilla, felis eu pharetra euismod, lacus elit dignissim massa, id venenatis enim nibh in sem. Morbi nec massa efficitur risus porttitor iaculis. Duis rutrum, urna sed dapibus porttitor, lacus risus pellentesque urna, nec feugiat neque ipsum ac mi.\n" +
        "\n" +
        "Duis porttitor tellus at odio euismod, vel consectetur mi tristique. Suspendisse sit amet lorem enim. Maecenas id leo ac odio mollis placerat vitae dictum purus. In in sodales diam. Integer condimentum felis ac bibendum sollicitudin. Proin laoreet fringilla sapien, vel elementum ante varius sodales. Integer maximus vulputate pretium. Morbi pellentesque nisl id posuere aliquam. Nullam vitae velit sit amet risus porta laoreet. Quisque euismod hendrerit ex, blandit condimentum lorem fringilla ut.\n" +
        "\n" +
        "Duis quis diam non augue vestibulum bibendum. Vivamus sit amet viverra dui, et suscipit enim. Cras massa mauris, pretium bibendum imperdiet sed, lobortis a dolor. Sed commodo interdum mi ac vulputate. Aliquam efficitur tempus eros, at iaculis mauris placerat ut. In eleifend ex quis finibus fermentum. Proin tincidunt lacus ut malesuada efficitur. Ut augue erat, blandit eget ullamcorper quis, bibendum quis orci. Donec tristique convallis erat pellentesque finibus. Curabitur condimentum consequat cursus. Maecenas ullamcorper a ipsum nec vestibulum. Nunc mollis quam quis tortor pretium, et bibendum eros dictum. Donec non lacinia ante, et lobortis ex.\n" +
        "\n" +
        "Sed diam ipsum, tempor sed tellus in, sollicitudin sodales lacus. Quisque lobortis nibh eget porta posuere. Suspendisse tincidunt elit sed porttitor congue. Ut euismod orci sit amet consequat auctor. Fusce et pretium nunc. Vestibulum tortor tortor, pharetra ut nibh eget, gravida ultrices est. Suspendisse ultricies hendrerit lorem, a scelerisque urna elementum nec. Proin porta massa iaculis justo lobortis, et aliquam lectus feugiat.\n" +
        "\n" +
        "Vestibulum ac ullamcorper justo, a hendrerit neque. Maecenas at tristique ex. Donec eget tincidunt ex. Maecenas a placerat libero. Nam ut placerat felis. Nam suscipit volutpat enim, id condimentum neque tristique at. Vestibulum sit amet eleifend augue. Praesent lacinia eu quam eget ornare. Duis iaculis, mi quis condimentum tempus, eros est luctus orci, vitae facilisis mauris massa et dui. Quisque interdum tortor eget ligula vestibulum, vel mattis turpis dignissim. Curabitur ac turpis urna. Aenean euismod in felis at consequat. Morbi in euismod purus, non egestas risus. Sed cursus lorem ac pellentesque volutpat. Cras pulvinar ligula eu mauris aliquam gravida. ";
    story.stories[1] = "";
    story.stories[2] = "";
    story.stories[3] = "";
    story.stories[4] = "";
    story.stories[5] = "";
    story.stories[6] = "";

}