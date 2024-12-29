function criaHoraDosSegundos(segundo){
    let data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-BR',{hour12: false, timeZone: 'UTC'})
}

let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');

let segundos = 0;
let timer; // Aqui a variável timer é global

function iniciaRelogio(){
    // Aqui a função não precisa redeclarar a variável timer
    timer = setInterval(function(){
        segundos++; // Incrementa os segundos
        relogio.innerHTML = criaHoraDosSegundos(segundos);        
    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer); // Para qualquer intervalo existente
    iniciaRelogio(); // Inicia um novo intervalo
}); 

pausar.addEventListener('click', function(event){
    clearInterval(timer); // Pausa o relógio ao parar o intervalo
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(event){
    clearInterval(timer); // Para o timer
    segundos = 0; // Reseta os segundos
    relogio.innerHTML = '00:00:00'; // Reseta o relógio para 00:00:00
    segundos = 0;
});
