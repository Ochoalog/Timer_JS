function getTimeFromSeconds(seconds){   
    const data = new Date(seconds) * 1000;
    return new Date(data).toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio');
let seconds = 0;
let timer;

function startClock(){
    timer = setInterval(function(){
        seconds++;
        relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado')
        second = 0;
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startClock();
    }
});
