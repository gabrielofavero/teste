// Questão 4 (Executar em Node.js)

const _start = () => {
    console.log("Questão 4")
    let faturamentoMensal = {
        "SP":67836.43,
        "RJ":36678.66,
        "MG":29229.88,
        "ES":27165.48,
        "Outros":19849.53,
    }
    let chaves = Object.keys(faturamentoMensal);
    let soma = _getSoma(chaves, faturamentoMensal)
    
    _logRepresentacao(soma, chaves, faturamentoMensal)
}

const _getSoma = (chaves, objeto) => {
    let soma = 0;
    
    for (let i = 0; i < chaves.length; i++) {
        soma += objeto[chaves[i]];
    }

    return soma;
}

const _logRepresentacao = (soma, chaves, objeto) => {
    
    for (let i = 0; i < chaves.length; i++) {
        let valor = (objeto[chaves[i]]/soma) * 100;
        valor = Math.round(valor * 100) / 100
        console.log("Representação " + chaves[i] + ": " + valor + "%");
    }

}

// Executar
_start();