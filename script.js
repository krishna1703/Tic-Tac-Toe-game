console.log("welcome to Tic Tac Toe ");
let music = new Audio("backgroundmusic.mp3")
let audioTrun = new Audio("clickmusic.mp3")
let gameover = new Audio("gameovermusic.mp3")
let trun =  "X";
let Gameover = false;
// function to change the trun

const changeTurn = () => {
    return trun === "X" ? "0" : "X"
}

// function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&

            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText +
                "won"
        Gameover =  trun;
              gameover.play();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="200px"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "20vw";
            
    }
            
    })
}


// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = trun;
            trun = changeTurn();
            audioTrun.play();
            //   music.play();
            // gameover.play();
            checkWin();
            if (!Gameover) {
                document.getElementsByClassName("info")[0].innerText = "Trun for" +  trun;
            }

        }
    })
})

// add onclick listener to reset button


reset.addEventListener('click', ()=> {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText =""
    });
    trun = "X";
    
    Gameover = false
    
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = "Trun for" + trun;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px"
    

});


