let boxes=document.querySelectorAll(".box");
let reset1=document.querySelector("#reset");
let printWinner=document.querySelector("#printWinner");
let newGame=document.querySelector("#newGame");
let X_times=document.querySelector("#X_times");
let O_times=document.querySelector("#O_times");
let turn=2;
let flag=0;              //  we will start the game with X
let Xwon=0;
let Owon=0;
const winPatterns=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

const reset=()=>{
    turn=2;
    flag=0;
    enable();
    printWinner.innerHTML="";
}
const resetMatch=()=>{
    turn=2;
    flag=0;
    Xwon=0;
    Owon=0;
    X_times.innerText=`X WON : 0`;
    O_times.innerText=`Y WON : 0`;
    enable();
    printWinner.innerHTML="";
}
boxes.forEach((box)=> //here all the boxes will be accessed
{
    box.addEventListener("click", () => //whenever a box is clicked the msg will be displayed in console window
    {                                   
        console.log("button was clicked");
        if(turn%2==0)       //if the value of <turn> is even that means its X turn
        {
            box.innerText="X";
            turn=1;
            flag+=1;
        }
        else              //if the value of <turn> is odd that means its X turn
        {
            box.innerText="O";
            turn=2;
            flag+=1;
        }
        box.disabled=true;//the value which is stored inside the particular box is fixed and cannot be changed
        let check=checkIsWinner();//calling the checkIsWinner function
        if(flag==9 && check!=1)
        {
            displayNoWinner();
        }
    });
});
const enable=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};
const displayWinner=(a)=> {
    printWinner.innerHTML=`THE WINNER IS : ${a}`;
    if(a=="X")
    {
        Xwon++;
        X_times.innerText=`X WON : ${Xwon}`;
    }
    else if(a=="O")
    {
        Owon++;
        O_times.innerText=`O WON : ${Owon}`;
    }
};
const displayNoWinner=()=>{
    printWinner.innerHTML=`THE GAME IS DRAW.NO WINNER`;
};
//HERE WE WILL TRACK OUR WINNER
const checkIsWinner=()=>
{
    for(let i=0;i<8;i++)
    {
        let pattern=winPatterns[i];
        let a=boxes[pattern[0]].innerText;
        let b=boxes[pattern[1]].innerText;
        let c=boxes[pattern[2]].innerText;
        if(a!="" && b!=""  && c!="")
        {
            if(a==b&&b==c)
            {
                console.log("WINNER IS",a);
                displayWinner(a);
                boxes.forEach((box) => box.disabled = true);
                return 1;
            }
        }
    }
}
newGame.addEventListener("click",reset);
reset1.addEventListener("click",resetMatch);
//change the reseT Game to RESET Match
//on countering RESET Match all the things will set to beginning  