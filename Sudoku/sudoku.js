var numselected = null;
var tileselected = null;
var error =0;

var board = [
    "6-5-1-",
    "---6-5",
    "35--6-",
    "--4-5-",
    "5--2--",
    "-4--31"
]

var solution = [
    "625413",
    "413625",
    "352164",
    "164352",
    "531246",
    "246531"
]

window.onload = function(){
    setGame();
}

function setGame(){
    // Digits
    for(let i=1; i<= 6; i++){
        // <div id ="i" class ="number">i</div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText =i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9X9
    for(let r=0; r < 6; r++){
        for(let c=0; c<6; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c] != "-"){
                tile.innerText = board [r][c];
                tile.classList.add("tileStart")
            }
            if(r == 1 || r == 3 ){
                tile.classList.add("hrline");
            }
            if(c ==2){
                tile.classList.add("vline");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);

        }
    }
}

function selectNumber(){
    if(numselected != null){
        numselected.classList.remove("number-selected");
    }
    numselected = this;
    numselected.classList.add("number-selected");
}

function selectTile (){
    if(numselected){
        if(this.innerText != ""){
            return;
        }
        

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0","0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if(solution[r][c] == numselected.id){
            this.innerText = numselected.id;
        }else{
            error += 1;
            document.getElementById("errors").innerText = error;
        }
    }
}