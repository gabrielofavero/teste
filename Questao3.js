// Questão 3 (Executar em Node.js)

const fs = require('fs');

const _start = () => {
    console.log("Questão 3")
    let result = {};
    let faturamentoDiario = JSON.parse(fs.readFileSync('Questao3.json'));
    let keys = Object.keys(faturamentoDiario);

    for (let i=0; i< keys.length; i++){
        let filtered = _filtrarVetor(faturamentoDiario[keys[i]]);
        let mediaMes = _getMediaMes(filtered);
        let valoresAcimaMM = _getValoresAcimaMM(mediaMes, filtered)  
        
        result[keys[i]] = {
            "Maior Valor" : Math.max.apply(null, filtered),
            "Menor Valor" : Math.min.apply(null, filtered),
            "Qnt Dias que superaram a média": valoresAcimaMM
        }
    }
    
    console.log(result);

}

function _filtrarVetor(vetor) {
    return vetor.filter(function(item){
      return item != null;
    });
   }

const _getMediaMes = (faturamentoDiario=[]) => {
    let size = 0;
    let sum = 0;

    for (let i = 0; i < faturamentoDiario.length; i++) {
        sum += faturamentoDiario[i];
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