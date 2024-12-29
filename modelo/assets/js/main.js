function criaHoraDosSegundos(segundo){
    let data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-BR',{hour12: false, timeZone: 'UTC'})
}

let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');

let segundos = 0;
let timer; 

function iniciaRelogio(){
    
    timer = setInterval(function(){
        segundos++; 
        relogio.innerHTML = criaHoraDosSegundos(segundos);        
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio(); 
}); 

pausar.addEventListener('click', function(event){
    clearInterval(timer); 
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
