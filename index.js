body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container);
const div1 = document.createElement('div');
div1.style.cssText += 'height:100px;width:100px;';
div1.classList.add('box');
container.appendChild(div1);
const div2 = document.createElement('div');
div2.style.cssText += 'height:100px;width:100px;';
div2.classList.add('box');
container.appendChild(div2);
const div3 = document.createElement('div');
div3.style.cssText += 'height:100px;width:100px';
div3.classList.add('box');
container.appendChild(div3);

document.querySelectorAll('.box').forEach(div =>{
    div.addEventListener('mouseover', ()=>{
        div.style.backgroundColor = 'black';
    })
})