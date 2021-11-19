let rockbutton = document.getElementById("btnrock")
let paperbutton = document.getElementById("btnpaper")
let scissorbutton = document.getElementById("btnscissors")
let userimage = document.getElementById("userimg")
let compimage = document.getElementById("compimg")
let results = document.getElementById("results")

let options = [
    "rock",
    "paper",
    "scissors"
]

let pics = [
    "images/rock.jpeg",
    "images/paper.png",
    "images/scissors.jpg"
]

let winner = ""

rockbutton.addEventListener("click", function(){
    decideRPS("rock", 0)
})

paperbutton.addEventListener("click", function(){
   decideRPS("paper", 1)
})

scissorbutton.addEventListener("click", function(){
    decideRPS("scissors",2)
})

function decideRPS(userchoice, usernum)
{
    console.log(userchoice + " was clicked")
    userimage.setAttribute("src", pics[usernum])

    let compchoice = Math.round(Math.random() * 2)
    let compchoicetext = options[compchoice]
    console.log(pics[compchoice])
    compimage.setAttribute("src", pics[compchoice])

    if (compchoicetext == userchoice) {
        winner = "It was a tie"
    } else if (compchoicetext == "paper"){
        if (userchoice == "rock")
        {
            winner = "I win"
        }
        else
        {
            winner = "You win"
        }
    } else if (compchoicetext == "scissors")
    {
        if (userchoice == "rock")
        {
            winner = "You win"
        }
        else
        {
            winner = "I win"
        }
    } else if (compchoicetext == "rock")
    {
        if (userchoice == "paper")
        {
            winner = "You win"
        }
        else
        {
            winner = "I win"
        }
    }


    results.textContent = winner
}