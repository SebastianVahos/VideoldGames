/*Icono de super mario bross*/
const iconoMario = document.querySelector('#iconoMario');
const tooltip = document.querySelector('#tooltip');
/*Icono de pacman*/
const iconoPacman = document.querySelector('#iconoPacman');
const tooltipPac = document.querySelector('#tooltipPac');
/*Icono de Zelda*/
const iconoZelda = document.querySelector('#iconoZelda');
const tooltipZel = document.querySelector('#tooltipZel');
/*Icono de pokemon*/
const iconoPokemon = document.querySelector('#iconoPokemon');
const tooltipPok = document.querySelector('#tooltipPok');
/*Icono de sims*/
const iconoSims = document.querySelector('#iconoSims');
const tooltipSims = document.querySelector('#tooltipSims');
/*Icono de Assassin's Creed*/
const iconoCreed = document.querySelector('#iconoAssa');
const tooltipCreed = document.querySelector('#tooltipAssa');
/*Icono de Lol*/
const iconoLol = document.querySelector('#iconoLol');
const tooltipLol = document.querySelector('#tooltipLol');
/*Icono de World of warcraft*/
const iconoWorld = document.querySelector('#iconoWorld');
const tooltipWorld = document.querySelector('#tooltipWorld');
/*Icono de Guitar Hero*/
const iconoGuitar = document.querySelector('#iconoGuitar');
const tooltipGuitar = document.querySelector('#tooltipGuitar');
/*Icono de Gta*/
const iconoGta = document.querySelector('#iconoGta');
const tooltipGta = document.querySelector('#tooltipGta');
/*Icono de Minecraft*/
const iconoMine = document.querySelector('#iconoMine');
const tooltipMine = document.querySelector('#tooltipMine');
/*Icono de Tetris*/
const iconoTetris = document.querySelector('#iconoTetris');
const tooltipTetris = document.querySelector('#tooltipTetris');
/*Icono de Halo*/
const iconoHalo = document.querySelector('#iconoHalo');
const tooltipHalo = document.querySelector('#tooltipHalo');
/*Icono de Counter Strike*/
const iconoCounter = document.querySelector('#iconoCounter');
const tooltipCounter = document.querySelector('#tooltipCounter');
/*Icono de Angry Birds*/
const iconoAngry = document.querySelector('#iconoAngry');
const tooltipAngry = document.querySelector('#tooltipAngry');

//metodo de mario bross
const calcularPosicionMario = () => {
    //coordenadas del icono
    const x = iconoMario.offsetLeft;
    const y = iconoMario.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltip.clientWidth;
    const altoTooltip = tooltip.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) - 550;
    const arriba = y - altoTooltip - 700;

    tooltip.style.left = `${izquierda}px`;
    tooltip.style.top = `${arriba}px`;
};

//metodo de Pacman
const calcularPosicionPacman = () => {
    //coordenadas del icono
    const x = iconoPacman.offsetLeft;
    const y = iconoPacman.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipPac.clientWidth;
    const altoTooltip = tooltipPac.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) - 467;
    const arriba = y - altoTooltip - 595;

    tooltipPac.style.left = `${izquierda}px`;
    tooltipPac.style.top = `${arriba}px`;
};

//metodo de zelda
const calcularPosicionZelda = () => {
    //coordenadas del icono
    const x = iconoZelda.offsetLeft;
    const y = iconoZelda.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipZel.clientWidth;
    const altoTooltip = tooltipZel.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) - 458;
    const arriba = y - altoTooltip - 564;

    tooltipZel.style.left = `${izquierda}px`;
    tooltipZel.style.top = `${arriba}px`;
};

//metodo de pokemon
const calcularPosicionPokemon = () => {
    //coordenadas del icono
    const x = iconoPokemon.offsetLeft;
    const y = iconoPokemon.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipPok.clientWidth;
    const altoTooltip = tooltipPok.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) - 550;
    const arriba = y - altoTooltip - 700;

    tooltipPok.style.left = `${izquierda}px`;
    tooltipPok.style.top = `${arriba}px`;
};

//metodo de Los sims
const calcularPosicionSims = () => {
    //coordenadas del icono
    const x = iconoSims.offsetLeft;
    const y = iconoSims.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipSims.clientWidth;
    const altoTooltip = tooltipSims.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 456;
    const arriba = y - altoTooltip + 327;

    tooltipSims.style.left = `${izquierda}px`;
    tooltipSims.style.top = `${arriba}px`;
};

//metodo de Assassin's Creed
const calcularPosicionAssassins = () => {
    //coordenadas del icono
    const x = iconoCreed.offsetLeft;
    const y = iconoCreed.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipCreed.clientWidth;
    const altoTooltip = tooltipCreed.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 509;
    const arriba = y - altoTooltip + 381;

    tooltipCreed.style.left = `${izquierda}px`;
    tooltipCreed.style.top = `${arriba}px`;
};

//metodo de Lol
const calcularPosicionLol = () => {
    //coordenadas del icono
    const x = iconoLol.offsetLeft;
    const y = iconoLol.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipLol.clientWidth;
    const altoTooltip = tooltipLol.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 655;
    const arriba = y - altoTooltip + 526;

    tooltipLol.style.left = `${izquierda}px`;
    tooltipLol.style.top = `${arriba}px`;
};

//metodo de World of warcraft
const calcularPosicionWorld = () => {
    //coordenadas del icono
    const x = iconoWorld.offsetLeft;
    const y = iconoWorld.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipWorld.clientWidth;
    const altoTooltip = tooltipWorld.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 556;
    const arriba = y - altoTooltip + 427;

    tooltipWorld.style.left = `${izquierda}px`;
    tooltipWorld.style.top = `${arriba}px`;
};

//metodo de Guitar Hero
const calcularPosicionGuitar = () => {
    //coordenadas del icono
    const x = iconoGuitar.offsetLeft;
    const y = iconoGuitar.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipGuitar.clientWidth;
    const altoTooltip = tooltipGuitar.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 356;
    const arriba = y - altoTooltip + 227;

    tooltipGuitar.style.left = `${izquierda}px`;
    tooltipGuitar.style.top = `${arriba}px`;
};

//metodo de Gta
const calcularPosicionGta = () => {
    //coordenadas del icono
    const x = iconoGta.offsetLeft;
    const y = iconoGta.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipGta.clientWidth;
    const altoTooltip = tooltipGta.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 158;
    const arriba = y - altoTooltip + 51;

    tooltipGta.style.left = `${izquierda}px`;
    tooltipGta.style.top = `${arriba}px`;
};

//metodo de Minecraft
const calcularPosicionMinecraft = () => {
    //coordenadas del icono
    const x = iconoMine.offsetLeft;
    const y = iconoMine.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipMine.clientWidth;
    const altoTooltip = tooltipMine.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 61;
    const arriba = y - altoTooltip - 46;

    tooltipMine.style.left = `${izquierda}px`;
    tooltipMine.style.top = `${arriba}px`;
};

//metodo de Tetris
const calcularPosicionTetris = () => {
    //coordenadas del icono
    const x = iconoTetris.offsetLeft;
    const y = iconoTetris.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipTetris.clientWidth;
    const altoTooltip = tooltipTetris.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) - 120;
    const arriba = y - altoTooltip - 248;

    tooltipTetris.style.left = `${izquierda}px`;
    tooltipTetris.style.top = `${arriba}px`;
};

//metodo de Halo
const calcularPosicionHalo = () => {
    //coordenadas del icono
    const x = iconoHalo.offsetLeft;
    const y = iconoHalo.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipHalo.clientWidth;
    const altoTooltip = tooltipHalo.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 632;
    const arriba = y - altoTooltip + 481;

    tooltipHalo.style.left = `${izquierda}px`;
    tooltipHalo.style.top = `${arriba}px`;
};

//metodo de Counter Strike
const calcularPosicionCounter = () => {
    //coordenadas del icono
    const x = iconoCounter.offsetLeft;
    const y = iconoCounter.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipCounter.clientWidth;
    const altoTooltip = tooltipCounter.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) + 671;
    const arriba = y - altoTooltip + 562;

    tooltipCounter.style.left = `${izquierda}px`;
    tooltipCounter.style.top = `${arriba}px`;
};

//metodo de Angry Birds
const calcularPosicionAngry = () => {
    //coordenadas del icono
    const x = iconoAngry.offsetLeft;
    const y = iconoAngry.offsetLeft;

    //calculamos tamaño del tooltip
    const anchoTooltip = tooltipAngry.clientWidth;
    const altoTooltip = tooltipAngry.clientHeight;
    
    //donde posicionamos el tooltip
    const izquierda = x - (anchoTooltip / 2) - 59;
    const arriba = y - altoTooltip - 166;

    tooltipAngry.style.left = `${izquierda}px`;
    tooltipAngry.style.top = `${arriba}px`;
};

window.addEventListener('load', () => {
    calcularPosicionMario();
    calcularPosicionPacman();
    calcularPosicionZelda();
    calcularPosicionPokemon();
    calcularPosicionSims();
    calcularPosicionAssassins();
    calcularPosicionLol();
    calcularPosicionWorld();
    calcularPosicionGuitar();
    calcularPosicionGta();
    calcularPosicionMinecraft();
    calcularPosicionTetris();
    calcularPosicionHalo();
    calcularPosicionCounter();
    calcularPosicionAngry();
});
window.addEventListener('resize', () => {
    calcularPosicionMario();
    calcularPosicionPacman();
    calcularPosicionZelda();
    calcularPosicionPokemon();
    calcularPosicionSims();
    calcularPosicionAssassins();
    calcularPosicionLol();
    calcularPosicionWorld();
    calcularPosicionGuitar();
    calcularPosicionGta();
    calcularPosicionMinecraft();
    calcularPosicionTetris();
    calcularPosicionHalo();
    calcularPosicionCounter();
    calcularPosicionAngry();
});
//Mario bross
iconoMario.addEventListener('mouseenter', () => {
    tooltip.classList.add('activo');
    calcularPosicionMario();
});
//Pacman
iconoPacman.addEventListener('mouseenter', () => {
    tooltipPac.classList.add('activo');
    calcularPosicionPacman();
});
//Zelda
iconoZelda.addEventListener('mouseenter', () => {
    tooltipZel.classList.add('activo');
    calcularPosicionZelda();
});
//pokemon
iconoPokemon.addEventListener('mouseenter', () => {
    tooltipPok.classList.add('activo');
    calcularPosicionPokemon();
});
//Los sims
iconoSims.addEventListener('mouseenter', () => {
    tooltipSims.classList.add('activo');
    calcularPosicionSims();
});
//Assassin's Creed
iconoCreed.addEventListener('mouseenter', () => {
    tooltipCreed.classList.add('activo');
    calcularPosicionAssassins();
});
//Lol
iconoLol.addEventListener('mouseenter', () => {
    tooltipLol.classList.add('activo');
    calcularPosicionLol();
});
//World of warcraft
iconoWorld.addEventListener('mouseenter', () => {
    tooltipWorld.classList.add('activo');
    calcularPosicionWorld();
});
//Guitar Hero
iconoGuitar.addEventListener('mouseenter', () => {
    tooltipGuitar.classList.add('activo');
    calcularPosicionGuitar();
});
//Gta
iconoGta.addEventListener('mouseenter', () => {
    tooltipGta.classList.add('activo');
    calcularPosicionGta();
});
//Minecraft
iconoMine.addEventListener('mouseenter', () => {
    tooltipMine.classList.add('activo');
    calcularPosicionMinecraft();
});
//Tetris
iconoTetris.addEventListener('mouseenter', () => {
    tooltipTetris.classList.add('activo');
    calcularPosicionTetris();
});
//Halo
iconoHalo.addEventListener('mouseenter', () => {
    tooltipHalo.classList.add('activo');
    calcularPosicionHalo();
});
//Counter Strike
iconoCounter.addEventListener('mouseenter', () => {
    tooltipCounter.classList.add('activo');
    calcularPosicionCounter();
});
//Angry Birds
iconoAngry.addEventListener('mouseenter', () => {
    tooltipAngry.classList.add('activo');
    calcularPosicionAngry();
});

//Mario Bross
let time;
iconoMario.addEventListener('mouseleave', () => {
    time = setTimeout(() => {
        tooltip.classList.remove('activo');
    }, 400);
});
//Pacman
let timePac;
iconoPacman.addEventListener('mouseleave', () => {
    timePac = setTimeout(() => {
        tooltipPac.classList.remove('activo');
    }, 400);
});
//Zelda
let timeZel;
iconoZelda.addEventListener('mouseleave', () => {
    timeZel = setTimeout(() => {
        tooltipZel.classList.remove('activo');
    }, 400);
});
//pokemon
let timePok;
iconoPokemon.addEventListener('mouseleave', () => {
    timePok = setTimeout(() => {
        tooltipPok.classList.remove('activo');
    }, 400);
});
//Los sims
let timeSims;
iconoSims.addEventListener('mouseleave', () => {
    timeSims = setTimeout(() => {
        tooltipSims.classList.remove('activo');
    }, 400);
});
//Assassin's Creed
let timeAssan;
iconoCreed.addEventListener('mouseleave', () => {
    timeAssan = setTimeout(() => {
        tooltipCreed.classList.remove('activo');
    }, 400);
});
//Lol
let timelol;
iconoLol.addEventListener('mouseleave', () => {
    timelol = setTimeout(() => {
        tooltipLol.classList.remove('activo');
    }, 400);
});
//World of warcraft
let timeWorld;
iconoWorld.addEventListener('mouseleave', () => {
    timeWorld = setTimeout(() => {
        tooltipWorld.classList.remove('activo');
    }, 400);
});
//Guitar Hero
let timeGuitar;
iconoGuitar.addEventListener('mouseleave', () => {
    timeGuitar = setTimeout(() => {
        tooltipGuitar.classList.remove('activo');
    }, 400);
});
//Gta
let timeGta;
iconoGta.addEventListener('mouseleave', () => {
    timeGta = setTimeout(() => {
        tooltipGta.classList.remove('activo');
    }, 400);
});
//Minecraft
let timeMine;
iconoMine.addEventListener('mouseleave', () => {
    timeMine = setTimeout(() => {
        tooltipMine.classList.remove('activo');
    }, 400);
});
//Tetris
let timeTetris;
iconoTetris.addEventListener('mouseleave', () => {
    timeTetris = setTimeout(() => {
        tooltipTetris.classList.remove('activo');
    }, 400);
});
//Halo
let timeHalo;
iconoHalo.addEventListener('mouseleave', () => {
    timeHalo = setTimeout(() => {
        tooltipHalo.classList.remove('activo');
    }, 400);
});
//Counter Strike
let timeCounter;
iconoCounter.addEventListener('mouseleave', () => {
    timeCounter = setTimeout(() => {
        tooltipCounter.classList.remove('activo');
    }, 400);
});
//Angry Birds
let timeAngry;
iconoAngry.addEventListener('mouseleave', () => {
    timeAngry = setTimeout(() => {
        tooltipAngry.classList.remove('activo');
    }, 400);
});


//Pacman
tooltipPac.addEventListener('mouseenter', () => clearTimeout(timePac));
tooltipPac.addEventListener('mouseleave', () => tooltipPac.classList.remove('activo'));

//Zelda
tooltipZel.addEventListener('mouseenter', () => clearTimeout(timeZel));
tooltipZel.addEventListener('mouseleave', () => tooltipZel.classList.remove('activo'));

//pokemon
tooltipPok.addEventListener('mouseenter', () => clearTimeout(timePok));
tooltipPok.addEventListener('mouseleave', () => tooltipPok.classList.remove('activo'));

//Los sims
tooltipSims.addEventListener('mouseenter', () => clearTimeout(timeSims));
tooltipSims.addEventListener('mouseleave', () => tooltipSims.classList.remove('activo'));

//Assassin's Creed
tooltipCreed.addEventListener('mouseenter', () => clearTimeout(timeAssan));
tooltipCreed.addEventListener('mouseleave', () => tooltipCreed.classList.remove('activo'));

//Lol
tooltipLol.addEventListener('mouseenter', () => clearTimeout(timelol));
tooltipLol.addEventListener('mouseleave', () => tooltipLol.classList.remove('activo'));

//World of warcraft
tooltipWorld.addEventListener('mouseenter', () => clearTimeout(timeWorld));
tooltipWorld.addEventListener('mouseleave', () => tooltipWorld.classList.remove('activo'));

//Guitar Hero
tooltipGuitar.addEventListener('mouseenter', () => clearTimeout(timeGuitar));
tooltipGuitar.addEventListener('mouseleave', () => tooltipGuitar.classList.remove('activo'));

//Gta
tooltipGta.addEventListener('mouseenter', () => clearTimeout(timeGta));
tooltipGta.addEventListener('mouseleave', () => tooltipGta.classList.remove('activo'));

//Minecraft
tooltipMine.addEventListener('mouseenter', () => clearTimeout(timeMine));
tooltipMine.addEventListener('mouseleave', () => tooltipMine.classList.remove('activo'));

//Tetris
tooltipTetris.addEventListener('mouseenter', () => clearTimeout(timeTetris));
tooltipTetris.addEventListener('mouseleave', () => tooltipTetris.classList.remove('activo'));

//Halo
tooltipHalo.addEventListener('mouseenter', () => clearTimeout(timeHalo));
tooltipHalo.addEventListener('mouseleave', () => tooltipHalo.classList.remove('activo'));

//Counter Strike
tooltipCounter.addEventListener('mouseenter', () => clearTimeout(timeCounter));
tooltipCounter.addEventListener('mouseleave', () => tooltipCounter.classList.remove('activo'));

//Angry Birds
tooltipAngry.addEventListener('mouseenter', () => clearTimeout(timeAngry));
tooltipAngry.addEventListener('mouseleave', () => tooltipAngry.classList.remove('activo'));

