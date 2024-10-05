let display = document.querySelector('#display');

let firstValue = "";// Contém o primeiro número da operação, evoluindo ao longo do uso da calculadora.
let secondValue = "";
let operator = "";
let currentValue = 1;//Controla o estado da entrada, indicando se o usuário está digitando o primeiro ou o segundo número.

function reset() {
    firstValue = '';
    secondValue = '';
    operator = '';
    currentValue = 1; // volta o cursor para o 1 valor
}

function clicked(button) { //button, para saber qual botao foi usado

    switch (button) {// button, para saber qual botao executar

        case 'c':
            reset();

            break;


        case '+':
        case '-':
        case 'x':
        case '÷':
            // Em uma calculadora, queremos ARMAZENAR apenas o último operador pressionado, não acumulá-los. Imagine que o usuário pressione primeiro o botão "+" e depois o botão "-". Com essa lógica, operator se tornaria "+-", o que não faz sentido em uma operação matemática.
            if (firstValue !== '') {
                operator = button;//A variável operator recebe o valor do botão pressionado
                currentValue = 2; // Isso indica que a calculadora agora está esperando a entrada do segundo operando da operação.
            }


            break;


        case '.':
            if (currentValue === 1 && firstValue !== "" && firstValue.includes(".") === false) {
                firstValue = firstValue + '.';
            }
            if (currentValue === 2 && secondValue !== "" && secondValue.includes(".") === false) {
                secondValue = secondValue + '.';
            }


            break;


        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            //Aqui, quando um botão numérico é pressionado, o valor do botão (button) é adicionado (+) ao firstValue ou secondValue, dependendo do valor da variável curretValue. Isso significa que, a cada dígito pressionado, estamos construindo o operando correspondente, adicionando o novo dígito ao final do valor já existente.
            if (currentValue === 1) {
                firstValue = firstValue + button;
            }
            if (currentValue === 2) {
                secondValue = secondValue + button;
            }
            break;

        case '='://O usuário tiver inserido o primeiro operando, o operador e o segundo operandoe O segundo operando não estiver vazio.
            if(currentValue === 2 && secondValue != ''){
                let result = calculate(firstValue, operator, secondValue);
                reset();
                firstValue= result;
            }



            break;
    }
    updateDisplay()
}

function updateDisplay() {
    if (firstValue === '') {
        display.innerHTML = '0';
    } else {
        display.innerHTML = firstValue + operator + secondValue;
    }
}

function calculate(first, op, second) {
    first = parseFloat(first);
    second = parseFloat(second);

    switch (op) {

        case '÷':
            return first / second;
            break;
        case 'x':
            return fisrt * second;
            break;
        case '-':
            return first - second;
            break;
        case '+':
            return first + second;
            break;
            default:
                return 0;
                break;
    }
}