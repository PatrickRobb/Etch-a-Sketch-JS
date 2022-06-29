const body = document.querySelector('body');
const bodyContainer = document.createElement('div');
bodyContainer.classList.add('body');
body.appendChild(bodyContainer);

setBoard(50);

const twentyFive = document.querySelector('#b25');
const fifty = document.querySelector('#b50');
const oneHundred = document.querySelector('#b100');

const rainbow = document.querySelector('#rainbow');
const black = document.querySelector('#black');


twentyFive.addEventListener('click', (e) =>{
    setBoard(e.target.id.substring(1, e.target.id.length));
})

fifty.addEventListener('click', (e) =>{
    setBoard(e.target.id.substring(1, e.target.id.length));
})

oneHundred.addEventListener('click', (e) =>{
    setBoard(e.target.id.substring(1, e.target.id.length));
})

rainbow.addEventListener('click', rainbowPen);
black.addEventListener('click', blackPen);



function setBoard(size){
    const bodyContainer = document.querySelector('.body');
    bodyContainer.remove();
    const newBodyContainer = document.createElement('div');
    newBodyContainer.classList.add('body');
    body.appendChild(newBodyContainer);
    
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
            div.style.backgroundColor = 'black';
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


// for (let i = 0; i < 50; i++){
//     const flexContainer = document.createElement('div');
//     flexContainer.classList.add('flex-container');
//     bodyContainer.appendChild(flexContainer);
//     for (let p = 0; p < 50; p++){
//         const div = document.createElement('div');
//         div.classList.add('box');
//         flexContainer.appendChild(div);
//     }
// }

// document.querySelectorAll('.box').forEach(div =>{
//     div.addEventListener('mouseover', ()=>{
//         div.style.backgroundColor = 'black';
//     })
// })

// sixteen.addEventListener('click', (e) =>{
//     const bodyContainer = document.querySelector('.body');
//     bodyContainer.remove();
//     const newBodyContainer = document.createElement('div');
//     newBodyContainer.classList.add('body');
//     body.appendChild(newBodyContainer);
    
//     for (let i = 0; i < Number(e.target.id.substring(1, e.target.id.length)); i++){
//         const flexContainer = document.createElement('div');
//         flexContainer.classList.add('flex-container');
//         newBodyContainer.appendChild(flexContainer);
//         for (let p = 0; p < Number(e.target.id.substring(1, e.target.id.length)); p++){
//             const div = document.createElement('div');
//             div.classList.add('box');
//             flexContainer.appendChild(div);
//         }
//     }
    
//     document.querySelectorAll('.box').forEach(div =>{
//         div.addEventListener('mouseover', ()=>{
//             div.style.backgroundColor = 'black';
//         })
//     })
// })