var numselected = null;
var tileselected = null;
var error =0;

var board = [
    "--7-9-6-5",
    "2---6-3-9",
    "-----7-1-",
    "-5-6----4",
    "--3----9-",
    "--62--1-7",
    "9-4-7---2",
    "67-83--9-",
    "-1--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function(){
    setGame();
}

function setGame(){
    // Digits
    for(let i=1; i<= 9; i++){
        // <div id ="i" class ="number">i</div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText =i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9X9
    for(let r=0; r < 9; r++){
        for(let c=0; c<9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c] != "-"){
                tile.innerText = board [r][c];
                tile.classList.add("tileStart")
            }
            if(r == 2 || r == 5 ){
                tile.classList.add("hrline");
            }
            if(c ==2 || c == 5 ){
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