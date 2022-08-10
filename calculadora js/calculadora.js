/* função para criar o elemento */
function criaElemento(sElement, sNome, iValor, sTipo = null){
    let button  = document.createElement(sElement);
    button.appendChild(document.createTextNode(sNome));
    button.value = iValor;
    if(sTipo == 'number'){
        button.addEventListener('click', onClickNumber);
    }
    else if(sTipo == 'operador'){
        button.addEventListener('click', onClickOperador);
    }
    else if(sTipo == 'limpa'){
        button.addEventListener('click', onClickLimpar);
    }
    else if(sTipo == 'resultado'){
        button.addEventListener('click', onClickResultado);
    }
    return button;
}

/* função ao clicar no botão de número */
function onClickNumber(){
    let iValorBotao = this.value;
    if(numeroAnterior == null){
        numeroAnterior = iValorBotao;
        valorTela      = iValorBotao;
        resultado.innerHTML = iValorBotao;
    }
    else if(operadorAnterior !== null){
        iNewValor = numeroAnterior + operadorAnterior + iValorBotao;
        numeroAnterior = iNewValor;
        valorTela = numeroAnterior;
        operadorAnterior = null;
        resultado.innerHTML = valorTela;
    }
    else {
        iNewValor = numeroAnterior + iValorBotao
        numeroAnterior = iNewValor;
        valorTela = numeroAnterior;
        resultado.innerHTML = valorTela;
    }
}

/* função ao clicar no operador */
function onClickOperador(){
    let sOperador = this.value;
    if(valorTela !== null){
        valorTela = valorTela + sOperador
        resultado.innerHTML = valorTela;
        operadorAnterior = sOperador;
    }
}

/* função ao apertar para limpar */
function onClickLimpar(){
    numeroAnterior = null;
    valorTela = null;
    operadorAnterior = null;
    resultado.innerHTML = '';
}

/* função ao clicar no botão para resultado */
function onClickResultado(){
    if(valorTela !== null){
        let result = eval(valorTela);
        resultado.innerHTML = result;
        valorTela = result;
        numeroAnterior = result;
    }
    else{
        resultado.innerHTML = 'ERROR';
    }
}

/* Tela */
let resultado = criaElemento('div', '', '', '');

let numeroAnterior = null;
let valorTela      = null;
let operadorAnterior = null;

/* números */
let number0 = criaElemento('button', '0', 0, 'number');
let number1 = criaElemento('button', '1', 1, 'number');
let number2 = criaElemento('button', '2', 2, 'number');
let number3 = criaElemento('button', '3', 3, 'number');
let number4 = criaElemento('button', '4', 4, 'number');
let number5 = criaElemento('button', '5', 5, 'number');
let number6 = criaElemento('button', '6', 6, 'number');
let number7 = criaElemento('button', '7', 7, 'number');
let number8 = criaElemento('button', '8', 8, 'number');
let number9 = criaElemento('button', '9', 9, 'number');

/* operadores */
let soma       = criaElemento('button', '+', '+', 'operador');
let multiplica = criaElemento('button', '*', '*', 'operador'); 
let subtrai    = criaElemento('button', '-', '-', 'operador');
let divide     = criaElemento('button', '/', '/', 'operador');
let limpa      = criaElemento('button', 'c', 'c', 'limpa');
let igual      = criaElemento('button', '=', '=', 'resultado');

/* quebra linha */
let quebraLinha1 = criaElemento('br', 'quebraLinha1');
let quebraLinha2 = criaElemento('br', 'quebraLinha2');
let quebraLinha3 = criaElemento('br', 'quebraLinha3');
let quebraLinha4 = criaElemento('br', 'quebraLinha4');

let container = document.getElementById('container')

container.appendChild(resultado)
container.appendChild(number1)
container.appendChild(number2)
container.appendChild(number3)
container.appendChild(divide)
container.appendChild(quebraLinha1)
container.appendChild(number4)
container.appendChild(number5)
container.appendChild(number6)
container.appendChild(multiplica)
container.appendChild(quebraLinha2)
container.appendChild(number7)
container.appendChild(number8)
container.appendChild(number9)
container.appendChild(subtrai)
container.appendChild(quebraLinha3)
container.appendChild(number0)
container.appendChild(igual)
container.appendChild(limpa)
container.appendChild(soma)
container.appendChild(quebraLinha4)
