function calcularIMC(){
	const nome = document.getElementById('nome').value;
    const renda = document.getElementById('renda').value;
    const bem = document.getElementById('bem').value;
    const entrada = document.getElementById('entrada').value;
    const juros = document.getElementById('juros').value;
    const n = document.getElementById('prestacoes').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && renda !== '' && bem !== '' && entrada !== '' && juros !== '' && n !== '') {
        const i = juros / 100;
        const financiar = bem - entrada;

        const pmt = ((((1+i)**n)*i*financiar)/((1+i)**n-1)).toFixed(2);

        const max_p = (renda * 0.3).toFixed(2);

        const verifica = max_p - pmt;

        if(verifica < 0){
            resultado.textContent = `Olá ${nome}! Seu financiamento foi recusado! O valor máximo que você pode financiar é R$${max_p}, com ${n} prestações o valor de cada parcela fica em R$${pmt}.`;
        }else{
            resultado.textContent = `Olá ${nome}! Seu financiamento foi aprovado! Com sua renda de R$${renda}, o valor máximo que você pode financiar é R$${max_p}. Financiando um valor de R$${financiar} por ${n} meses a uma taxa de ${juros}% cada parcela será de R$${pmt}.`;
        }

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }
}