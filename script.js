

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

// console.log(inputAdultos, inputCrianças, inputDuracao)

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja /290)} Latas de 290ml de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalbebidas /2000)} Garrafa(s) de Refrigerante</p>`;


}

function carnePP(duracao) {
    if (duracao >= 5){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 5){
        return 2200;
    } else {
        return 1400;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 5){
        return 1000;
    } else {
        return 700;
    }
}

