// Variables
const pantalla = document.querySelector('#screen');
const buttons = document.querySelectorAll('.row div');
const igual = document.querySelector('button')

let simb = '';
let numUno = '';
let numDos = '';
let resultado;

document.addEventListener('DOMContentLoaded', () => {
    pantalla.textContent = 0;
    
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if(simb == ''  && btn.classList.contains('numero')) {
                numUno += btn.textContent; 
                pantalla.textContent = numUno;
                ;
            }
            
            if(btn.classList.contains('simbolo') ) {
                pantalla.textContent = btn.textContent
                simb = btn.textContent;
            }
            
            if(numUno !== '' && simb !== '' && btn.classList.contains('numero')) {
                numDos += btn.textContent; 
                pantalla.textContent = numDos;
            }
        })
        
        igual.onclick = function() {
            console.log(numUno)
            console.log(numDos)
                if(simb == '+') {
                    resultado = parseInt(numUno) + parseInt(numDos);
                    pantalla.textContent = resultado;
                    console.log(resultado)
                } else if(simb == '-') {
                    resultado = parseInt(numUno) - parseInt(numDos);
                    pantalla.textContent = resultado;
                    console.log(resultado)
                } else if(simb == 'x') {
                    resultado = parseInt(numUno) * parseInt(numDos);
                    pantalla.textContent = resultado;
                    console.log(resultado)
                } else if (simb == '/') {
                    resultado = parseInt(numUno) / parseInt(numDos);
                    pantalla.textContent = resultado;
                    console.log(resultado)
                } else {
                    resultado = 'error'
                    pantalla.textContent = resultado;
                    console.log(resultado)
                }
                numUno = '';
                numDos = '';
                simb = ''
            }
    })
})