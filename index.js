const body = document.querySelector('body');
const bodyContainer = document.querySelector('.body');
// const bodyContainer = document.createElement('div');
// bodyContainer.classList.add('body');
// body.appendChild(bodyContainer);
// document.body.prepend(bodyContainer);


setBoard(50);

const twentyFive = document.querySelector('#b25');
const fifty = document.querySelector('#b50');
const seventyFive = document.querySelector('#b75');
const oneHundred = document.querySelector('#b100');

const rainbow = document.querySelector('.rainbow');
const black = document.querySelector('.black');
const chooseColor = document.querySelector('#chooseColor');


twentyFive.addEventListener('click', (e) =>{
    setBoard(e.target.id.substring(1, e.target.id.length));
})

fifty.addEventListener('click', (e) =>{
    setBoard(e.target.id.substring(1, e.target.id.length));
})

seventyFive.addEventListener('click', (e) =>{
    setBoard(e.target.id.substring(1, e.target.id.length));
})

oneHundred.addEventListener('click', (e) =>{
    setBoard(e.target.id.substring(1, e.target.id.length));
})

rainbow.addEventListener('click', rainbowPen);
black.addEventListener('click', blackPen);

chooseColor.addEventListener('click', (e)=>{
    document.querySelectorAll('.box').forEach(div =>{
        div.removeEventListener('mouseover', blackPen);
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = e.target.value;
        })
    })
})



function setBoard(size){
    const bodyContainer = document.querySelector('.body');
    bodyContainer.remove();
    const newBodyContainer = document.createElement('div');
    newBodyContainer.classList.add('body');
    // body.appendChild(newBodyContainer);
    body.insertBefore(newBodyContainer, body.children[1]);
    
    for (let i = 0; i < size; i++){
        const flexContainer = document.createElement('div');
        flexContainer.classList.add('flex-container');
        newBodyContainer.appendChild(flexContainer);
        for (let p = 0; p < size; p++){
            const div = document.createElement('div');
            div.classList.add('box');
            flexContainer.appendChild(div);
        }
    }
    blackPen();
}

function blackPen(){
    document.querySelectorAll('.box').forEach(div =>{
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = '#2b2b2b';
        })
    })
}

function rainbowPen(){
    document.querySelectorAll('.box').forEach(div =>{
        div.removeEventListener('mouseover', blackPen);
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
        })
    })
}

//Button style CSS etc. is below. I wanted to seperate this from the actualy game function programming.

document.querySelectorAll('button').forEach(button =>{
    button.addEventListener('mouseover', ()=>{
        button.style.border = '3px solid #BFD4DB'
    })
})

document.querySelectorAll('button').forEach(button =>{
    if (button.classList.contains('black') == false && button.classList.contains('rainbow') == false){
        button.addEventListener("mouseleave", ()=>{
            button.style.border = '3px solid #CDCCC5'
        })
    }
})

black.addEventListener("mouseleave", ()=>{
    black.style.border = '3px solid rgb(255, 251, 235)';
})

rainbow.addEventListener("mouseleave", ()=>{
    rainbow.style.border = '3px solid #2b2b2b';
})
