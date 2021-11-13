const game = document.querySelectorAll('.panel')
 game.forEach(candyGame  =>{
     candyGame.addEventListener('click',()=>{
         removeClass()
         candyGame.classList.add('active')
     })
 })

function removeClass( ){
    games.forEach(candyGame => {
        candyGame.classList.remove('active')
    })
}

const games = document.querySelectorAll('.panel')
games.forEach(candyGame =>{
    candyGame.addEventListener('click',()=>{
        removeClass()
        candyGame.classList.add('active')
    })
})

