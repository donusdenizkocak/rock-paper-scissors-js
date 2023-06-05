const rockBtn =document.querySelector('.tas')
const paperBtn =document.querySelector('.kagit')
const scissorsBtn =document.querySelector('.makas')

const choices =['Rock','Paper','Scissors']
 rockBtn.addEventListener('click',()=>oyun('Rock'))
paperBtn.addEventListener('click',()=>oyun('Paper'))
scissorsBtn.addEventListener('click',()=>oyun('Scissors'))
let sayac=0;
function oyun (user){
    console.log(user)
const computerChoice = choices[Math.floor(Math.random()*3)] 
console.log(computerChoice)
document.querySelector('.user').innerText= `Sizin tercihiniz: ${user}`
document.querySelector('.computer').innerText= `Bilgisayarın  tercihi: ${computerChoice}`
const result=determineWinner(user,computerChoice)
if(sayac<5){
if(result === 'user'){
    alert('you win!')
}
else if(result === 'computer'){
    alert('computer wins!')
}else{
    alert(`it's a tiel!`)
}
sayac++
document.querySelector('.sayac').innerText=`Sayaç: ${sayac}`
}else{
    alert('Oyun hakkınız bitmiştir')
}
}

function determineWinner(user,computerChoice){
    if(user === computerChoice){
        return 'tie'
    }
    if((user==='Rock' && computerChoice==='Scissors') || (user ==='Paper' &&computerChoice==='Rock') || (user==='Scissors' && computerChoice ==='Paper')){
        return 'user'
    }
    return 'computer'
}

