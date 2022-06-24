// Questão 3 (Executar em Node.js)

const fs = require('fs');
const VALOR = "valor"

const _start = () => {
    console.log("Questão 3")
    let faturamentoDiario = JSON.parse(fs.readFileSync('dados.json'));
    let vetorValor = _getVetorValor(faturamentoDiario);
    
    let mediaMes = _getMediaMes(vetorValor);
    let valoresAcimaMM = _getValoresAcimaMM(mediaMes, vetorValor);
    
    let result = {
        "Maior Valor" : Math.max.apply(null, vetorValor),
        "Menor Valor" : Math.min.apply(null, vetorValor),
        "Qnt Dias que superaram a média": valoresAcimaMM
    }

    console.log(result);
}

function _getVetorValor(vetor) {
    let result = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i][VALOR]) {
            result.push(vetor[i][VALOR]);
        }
    }
    return result;
}

const _getMediaMes = (faturamentoDiario=[]) => {
    let size = 0;
    let sum = 0;

    for (let i = 0; i < faturamentoDiario.length; i++) {
        sum += faturamentoDiario[i][VALOR];
        size++;
    }

    if (size && sum) {
        return sum / size;
    } else return 0;

}

const _getValoresAcimaMM = (mediaMes, faturamentoDiario=[]) => {
    let result = 0;
    for (let i = 0; i < faturamentoDiario.length; i++) {
        if (faturamentoDiario[i] > mediaMes){
            result++;
        }
    }
    return result;
}


// Executar
_start();