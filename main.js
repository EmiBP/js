
function mudaCor(elemento, cor){
    elemento.style.color = cor;
};



function clickButton(elemento, texto){
    elemento.innerHTML = texto;
};


const tagP = document.querySelector('p');
const button = document.querySelector('button');
const input = document.querySelector('input');
const img = document.querySelector('img');

/*
tagP.onmouseover = function(){
    tagP.style.color = "red";
   
};

tagP.onmouseout = function(){
    tagP.style.color = "black";
   
};

*/

button.onclick = function() {

      button.innerHTML = "BOTÃO CLICADO" ;


}


input.onfocus = function() {
    input.placeholder = "Campo em foco";

}
input.onblur = function() {
    input.placeholder = "";

}

img.onmouseover = function(){
    img.setAttribute('src', '/assets/img/imagem2.png');
   
};

img.onmouseout = function(){
    img.setAttribute('src', '/assets/img/imagem1.png');
   
};







    
    











